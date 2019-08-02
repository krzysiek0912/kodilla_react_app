import React from "react";
import PropTypes from "prop-types";

function MovieImage(props) {
  return <img src={props.img} alt={props.title} />;
}
MovieImage.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string.isRequired
};

export default MovieImage;
