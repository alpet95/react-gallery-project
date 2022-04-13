import React from "react";
// ========== styles ==========
import classes from "./GalleryItem.module.css";

const GalleryItem = (props) => {
  return (
    <div className={classes.item}>
      <img src={props.src} alt={props.title} />
      <h3>{props.title}</h3>
    </div>
  );
};

export default GalleryItem;