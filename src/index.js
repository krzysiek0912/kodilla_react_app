import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MovieList from "./App";
import * as serviceWorker from "./serviceWorker";
const movies = [
  {
    id: 1,
    title: "Harry Potter",
    desc: "film o czarodzieju",
    img: "http://imgur.com/n8OYCzR.png"
  },
  {
    id: 2,
    title: "Król Lew",
    desc: "Film o królu sawanny",
    img: "http://imgur.com/n8OYCzR.png"
  }
];
ReactDOM.render(<MovieList movies={movies} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
