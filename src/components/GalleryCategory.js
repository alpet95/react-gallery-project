import React from "react";
// ========== styles ==========
import classes from "./GalleryCategory.module.css";

const GalleryCategory = (props) => {
  // ========== data ==========
  const { id, title, active } = props;

  // ========== handlers ==========
  const selectLinkHandler = () => {
    props.onSetActive(id);
  };

  return (
    <li
      className={`${classes.link} ${active && classes.active}`}
      onClick={selectLinkHandler}
    >
      {title}
    </li>
  );
};

export default GalleryCategory;
