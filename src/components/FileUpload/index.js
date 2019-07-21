import React from "react";
import PropTypes from "prop-types";

import SVGIcons from "../SVGIcons";

const FileUpload = ({ uploadValue, handleUpload }) => (
  <div
    style={{ minWidth: "50%" }}
    className="hero section columns is-vcentered"
  >
    <div className="column is-full">
      <progress
        className="progress is-small is-info"
        value={uploadValue}
        max="100"
      />
    </div>
    <div className="column is-full">
      <div className="file">
        <label className="file-label">
          <input className="file-input" type="file" onChange={handleUpload} />
          <span className="file-cta">
            <span className="file-icon button">
              <SVGIcons wrapperClass="icon" iconName="upload_file" />
            </span>
            <span className="file-label">Choose a file…</span>
          </span>
        </label>
      </div>
    </div>
  </div>
);
FileUpload.propTypes = {
  uploadValue: PropTypes.number.isRequired,
  handleUpload: PropTypes.func.isRequired
};

export default FileUpload;
