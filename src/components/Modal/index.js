import React from "react";
import PropTypes from "prop-types";

import FileUpload from "../FileUpload";

const Modal = ({ uploadValue, toggleShowModal, handleUpload }) => (
  <div className="modal is-active">
    <div className="modal-background" />
    <div className="modal is-active">
      <FileUpload uploadValue={uploadValue} handleUpload={handleUpload} />
    </div>
    <button
      style={{ zIndex: 100 }}
      className="modal-close is-large"
      onClick={toggleShowModal}
    />
  </div>
);
Modal.propTypes = {
  uploadValue: PropTypes.number.isRequired,
  toggleShowModal: PropTypes.func.isRequired,
  handleUpload: PropTypes.func.isRequired
};

export default Modal;
