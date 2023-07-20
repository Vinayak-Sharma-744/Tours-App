import React from "react";
import { useEffect, useState } from "react";
const Slider = (props) => {
  const n = props.tours.length;

  const [selectedImage, setSelectedImage] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setSelectedImage((selectedImage) =>
        selectedImage < n ? selectedImage + 1 : 0
      );
    }, 4000);
  }, []);
  return (
    <div>
      <img src={props.tours[selectedImage].image} alt="" />
    </div>
  );
};

export default Slider;
