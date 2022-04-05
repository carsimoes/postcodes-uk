import React from "react";

import classes from "./PostCode.module.css";
import { truncStr } from "./utils";

const PostCodeCard = props => {
  const { admin_ward } = props.item;
  
  return (
    <div>
      <div>
        <span >{admin_ward}</span>
      </div>

    
    </div>
  );
};

export default PostCodeCard;