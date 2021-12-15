import React, { useState } from "react";
import { FaStar } from "react-icons/fa"; 
import "react-bootstrap";


const createArray = length => [...Array(length)];

function Star({ selected = false, onSelect = f => f }) {
  return <FaStar className= "stars" color={selected ? "red" : "grey"} onClick={onSelect} />;
}

export default function StarRating({ totalStars = 5 }) {
    const [selectedStars, setSelectedStars] = useState(0);
    return (
      <>
        {createArray(totalStars).map((n, i) => (
          <Star
            key={i}
            selected={selectedStars > i}
            onSelect={() => setSelectedStars(i + 1)}
          />
        ))}
      </>
    );
  }
  