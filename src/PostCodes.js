import React from "react";
import PostCode from "./PostCode";
import classes from "./PostCodes.module.css";

const PostCodes = ({ list }) => {
  let cards = <h3>Loading...</h3>;

  let listTemp = [];
  listTemp.push(list);

  if (listTemp) {
    cards = listTemp.map((m, i) => <PostCode key={i} item={m} />);
  }

  return (
    <div className={classes.Container}>
      <div className={classes.ContainerInner}>{cards}</div>
    </div>
  );
};

export default PostCodes;