import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { defaultUploadTag, cloudName } from "./cloudinary/cloudinaryConfig";
import GalleryContext from "./context/GalleryContext";
import { BrowserRouter } from "react-router-dom";

/* eslint-disable */
const myGallery = cloudinary.galleryWidget({
  container: "#gallery",
  cloudName: "johnpaul",
  mediaAssets: [
    { tag: "product_gallery_tags", mediaType: "image" }, // by default mediaType: "image"
  ]
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GalleryContext.Provider value={myGallery}>
        <App />
      </GalleryContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
