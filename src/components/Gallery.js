import React, { useState, useEffect } from "react";
// ========== components ==========
import GalleryCategory from "./GalleryCategory";
import GalleryItem from "./GalleryItem";
// ========== data ==========
import { galleryChapters } from "../data/gallery-chapters-data";
import {
  galleryEngland,
  galleryBelgium,
  galleryPoland,
  galleryIreland,
  galleryNetherlands,
} from "../data/gallery-items-data";
// ========== styles ==========
import classes from "./Gallery.module.css";

const Gallery = () => {
  // ========== state ==========
  const [selectedCategory, setSelectedCategory] = useState("eng");
  const [galleryItem, setGalleryItem] = useState([]);

  // ========== effect ==========
  useEffect(() => {
    switch (selectedCategory) {
      case "eng":
        setGalleryItem(galleryEngland);
        break;
      case "be":
        setGalleryItem(galleryBelgium);
        break;
      case "pl":
        setGalleryItem(galleryPoland);
        break;
      case "irl":
        setGalleryItem(galleryIreland);
        break;
      case "nl":
        setGalleryItem(galleryNetherlands);
        break;
      default:
        setGalleryItem(galleryEngland);
    }
  }, [selectedCategory]);

  return (
    <div className={classes.gallery} id="gallery">
      <h1 className={classes.heading}>Country Gallery</h1>

      {/* ========== gallery categories ========== */}
      <ul className={classes.list}>
        {galleryChapters.map((category) => (
          <GalleryCategory
            key={category.id}
            id={category.id}
            title={category.title}
            active={selectedCategory === category.id}
            onSetActive={setSelectedCategory}
          />
        ))}
      </ul>

      {/* ========== gallery items ========== */}
      <div className={classes.container}>
        {galleryItem.map((item) => (
          <GalleryItem
            key={item.id}
            id={item.id}
            title={item.title}
            src={item.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;