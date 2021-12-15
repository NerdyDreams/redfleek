import React from "react";
import "react-bootstrap";



function NewsBlock(props){
    return(
          <div className="row news-block">
            <div className="col-lg-6 news-bg-grey">
              <img
                className="news-img"
                src={props.imageURL}
                alt="news-img"
              />
            </div>
            <div className="col-lg-6 news-bg-grey">
              <a href={props.newsLink}>
                {props.title}
              </a>
            </div>
            </div>
    )
}

export default NewsBlock;