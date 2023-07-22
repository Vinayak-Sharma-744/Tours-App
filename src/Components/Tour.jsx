import React from "react";
import Readmore from "./Readmore";
// import './Tour.css'
const Tour = (props) => {
  const { image, info, price, name } = props;
  return (
    <>
      <article className="Tour">
        <img src={image} alt={name} />
        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price">${price}</h4>
          </div>
          <Readmore>{info}</Readmore>

        </footer>
      </article>
    </>
  );
};

export default Tour;
