import React from "react";
import PropTypes from "prop-types";

function MovieDescription(props) {
  return <p>{props.children}</p>;
}
MovieDescription.propTypes = {
  children: PropTypes.string.isRequired
};

export default MovieDescription;
