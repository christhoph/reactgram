import React from "react";
import PropTypes from "prop-types";

import SVGIcons from "../SVGIcons";

const Menu = ({ toggleShowModal }) => (
  <div className="hero is-dark">
    <div className="hero-body">
      <div className="container level">
        <h1 className="title">Reactgram</h1>
        <div className="button" onClick={toggleShowModal}>
          <SVGIcons wrapperClass="icon" iconName="plus_square" />
        </div>
      </div>
    </div>
  </div>
);
Menu.propTypes = {
  toggleShowModal: PropTypes.func.isRequired
};

export default Menu;
