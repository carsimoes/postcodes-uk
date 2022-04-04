import React from "react";

import classes from "./Movie.module.css";
import { truncStr } from "./utils";

const MovieCard = props => {
  const { admin_ward } = props.item;
  

  return (
    <div  >
      <div >
        <span >{admin_ward}</span>
      </div>

    
    </div>
  );
};

export default MovieCard;