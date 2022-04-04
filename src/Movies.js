import React from "react";

import Movie from "./Movie";
import classes from "./Movies.module.css";

const Movies = ({ list }) => {
  let cards = <h3>Loading...</h3>;
  
  // console.log(list[0])

  let listTemp = [];
  listTemp.push(list);

  if (listTemp) {
    cards = listTemp.map((m, i) => <Movie key={i} item={m} />);
  }

  return (
    <div className={classes.Container}>
      <div className={classes.ContainerInner}>{cards}</div>
    </div>
  );
};

export default Movies;