import React from "react";

import classes from "./PostCode.module.css";
import { truncStr } from "./utils";

const PostCodeCard = props => {
  const { country,nhs_ha,postcode,ccg,longitude, latitude } = props.item;
  
  return (
    <div>
      <h1>{country}</h1>
      
      <address>
        {nhs_ha}<br></br>
        {postcode}<br></br>
        {ccg}<br></br>
        Longitude: {longitude}<br></br>
        Latitude: {latitude}<br></br>
      </address>
    </div>
  );
};

export default PostCodeCard;