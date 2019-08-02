import React from "react";
import PropTypes from "prop-types";
import Movie from "./components/Movie";
import "./App.css";

class MovieList extends React.Component {
  render() {
    const list = this.props.movies.map(function(movie) {
      return (
        <li key={movie.id}>
          <Movie movie={movie} />
        </li>
      );
    });
    return <ul>{list}</ul>;
  }
}
MovieList.propTypes = {
  movies: PropTypes.array
};

export default MovieList;
