import { React } from "react";
import Tour from "./Tour";
import { useState } from "react";
import './Tour.css'
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';


const Tours = (props) => {
  const n = props.tours.length;

  const [selectedIndex, setSelectedIndex] = useState(0);
  // useEffect(() => {
  //   setInterval(() => {
  //     setSelectedIndex((selectedIndex) =>
  //       selectedIndex < n ? selectedIndex + 1 : 0
  //     );
  //   }, 5000);
  // }, []);

  const back = () => {
    console.log('back clicked')
    setSelectedIndex((selectedIndex) =>
      selectedIndex > 0 ? selectedIndex - 1 : n - 1
    );

  }
  const forward = () => {
    console.log('forward clicked')
    setSelectedIndex((selectedIndex) =>
      selectedIndex < n - 1 ? selectedIndex + 1 : 0
    );

  }
  return (
    <div className="container">

      <div className="btn">
        <GrFormPreviousLink onClick={back} className="left-btn" size={40} />
        <GrFormNextLink onClick={forward} className="right-btn" size={40} />
      </div>
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
    </div>
  );
};

export default Tours;
