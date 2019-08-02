import React from "react";
import PropTypes from "prop-types";

function MovieTitle(props) {
  return <h1>{props.title}</h1>;
}
MovieTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default MovieTitle;
