import React from 'react';

import FileUpload from "../FileUpload";

const Modal = ({ uploadValue, toggleShowModal, handleUpload }) => (
  <div className="modal is-active">
    <div className="modal-background" />
    <div className="modal is-active" >
      <FileUpload uploadValue={uploadValue} toggleShowModal={toggleShowModal} handleUpload={handleUpload} />
    </div>
    <button style={{ zIndex: 100 }} className="modal-close is-large" onClick={toggleShowModal} />
  </div>
);

export default Modal;