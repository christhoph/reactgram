import React, { useState, useEffect, useCallback } from "react";
import axios from 'axios';
import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

import Menu from "./components/Menu";
import Pictures from "./components/Pictures";
import Modal from "./components/Modal";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [pictures, setPictures] = useState([]);
  const [uploadValue, setUploadValue] = useState(0);

  const dbRef = () => firebase.database().ref('pictures');

  useEffect(() => {
    const fetchImages = async () => await axios
      .get(`https://review-firebase-cs.firebaseio.com/.json`)
      .then(({ data }) => {
        let keys = Object.keys(data.pictures).map(key => data.pictures[key]);
        setPictures(keys);
      });

    dbRef().on('child_added', () => fetchImages());
  }, []);

  const toggleShowModal = useCallback(() => setShowModal(val => !val), []);

  const handleUpload = useCallback(e => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref(`/fotos/${file.name}`);
    const task = storageRef.put(file);

    task.on(
      "state_changed",
      snasphot => {
        const percentage =
          (snasphot.bytesTransferred / snasphot.totalBytes) * 100;
        setUploadValue(percentage);
      },
      error => console.log("error: ", error.message),
      () => storageRef.getDownloadURL().then(url => {
        if (url) {
          dbRef().push().set({ image: url });
          toggleShowModal();
        }
      })
    );
  }, [toggleShowModal]);

  return (
    <div className="App">
      <Menu toggleShowModal={toggleShowModal} />
      {!pictures.length && <progress className="progress is-small is-info" max="100">15%</progress>}
      {pictures && <Pictures pictures={pictures} />}
      {showModal && <Modal uploadValue={uploadValue} toggleShowModal={toggleShowModal} handleUpload={handleUpload} />}
    </div>
  );
};

export default App;
