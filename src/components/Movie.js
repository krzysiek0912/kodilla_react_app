import React from "react";
import MovieTitle from "./MovieTitle";
import MovieDescription from "./MovieDescription";
import MovieImage from "./MovieImage";

class Movie extends React.Component {
  render() {
    const { title, desc, img } = this.props.movie;
    return (
      <>
        <MovieTitle title={title} />
        <MovieDescription>{desc}</MovieDescription>
        <MovieImage img={img} title={title} />
      </>
    );
  }
}

export default Movie;
