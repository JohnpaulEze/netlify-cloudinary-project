import { useEffect, useContext } from "react";
import GalleryContext from "../context/GalleryContext";

const Gallery = () => {
  const gallery = useContext(GalleryContext);

  useEffect(() => {
    gallery.render();
  });

  return (
    <>
      <h1>E commerce Product Gallery</h1>
      <div id="gallery"></div>
    </>
  );
};

export default Gallery;
