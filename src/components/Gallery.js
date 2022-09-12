import { Col, Row } from "antd";
import { useEffect, useContext } from "react";
import GalleryContext from "../context/GalleryContext";
import Products from "./products";

const Gallery = () => {
  const gallery = useContext(GalleryContext);

  useEffect(() => {
    gallery.render();
  });

  return (
    <>
      <h1>E commerce Product Gallery</h1>
      {/* <div id="gallery"></div> */}
      <div >
        <Row justify="space-evenly">
          <Col>
            <Products/>
          </Col>
          <Col>
            <Products/>
          </Col>
          <Col>
            <Products/>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Gallery;
