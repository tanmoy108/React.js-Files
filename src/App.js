import React from "react";
import Movie from "./Movie";
import List from "./Listdb";

const App = () => (
  <>
    {List.map((value) => {
      return (
        <Movie
          key={value.id}
          imgSrc={value.img}
          title={value.name}
          website={value.web}
          about={value.aboutMovie}
          link={value.mlink}
        />
      );
    })}
  </>
);

export default App;
