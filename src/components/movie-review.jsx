import React from "react";
import "react-bootstrap";
import StarRating from "./star-rating";

function MovieReview(props) {
  return (
    <div className="row review-block">
    <div className="col-lg-6">
      <img className="review-img" src={props.imageURL} alt="film-img" />
    </div>
    <div className=" col-lg-6  review-entry">
    <div className = "container"><StarRating /></div>
      <form action="" method="get">
        <h4>Name: review</h4>
        <input type="text" placeholder="Name" />
        <textarea
          rows="5"
          cols="40"
          maxlength="100"
          name="description"
          placeholder="Enter review here... Maximum character 100"
        />
        <input className="submit-btn" type="submit" value="Submit" />
      </form>
    </div>
    </div>
  );
}

export default MovieReview;
