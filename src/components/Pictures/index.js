import React from "react";
import PropTypes from "prop-types";

const Pictures = ({ pictures }) => (
  <>
    {pictures &&
      pictures.length &&
      pictures.map(({ image }, index) => (
        <div key={index} className="hero section columns is-vcentered">
          <img
            style={{ maxWidth: 680, padding: 0 }}
            className="image"
            src={image}
            alt={`gram ${index}`}
          />
        </div>
      ))}
  </>
);
Pictures.propTypes = {
  pictures: PropTypes.array
};
Pictures.defaultProps = {
  pictures: []
};

export default Pictures;
