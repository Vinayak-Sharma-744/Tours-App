import React from "react";
import Tour from "./Tour";
import { useEffect, useState } from "react";

const Tours = (props) => {
  const n = props.tours.length;

  const [selectedIndex, setSelectedIndex] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setSelectedIndex((selectedIndex) =>
        selectedIndex < n ? selectedIndex + 1 : 0
      );
    }, 5000);
  }, []);

  return (
    <div className="Tours">
      <h2>All Tours</h2>

      <div>
        <Tour
          name={props.tours[selectedIndex].name}
          image={props.tours[selectedIndex].image}
          info={props.tours[selectedIndex].info}
          price={props.tours[selectedIndex].price}
        />
      </div>
    </div>
  );
};

export default Tours;
