import React from "react";
import Movie from "./Movie";
import List from "./Listdb";

function getMovie(value) {
  return (
    <Movie
      imgSrc={value.img}
      title={value.name}
      website={value.web}
      about={value.aboutMovie}
      link={value.mlink}
    />
  );
}

function App() {
  return <>{List.map(getMovie)}</>;
}

export default App;
