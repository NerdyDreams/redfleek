import React from "react";
import "react-bootstrap";


function Menu(){
    return (
        <ul class="nav justify-content-center nav-menu body-margin">
        <li class="nav-item">
          <a class="nav-link active"  href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Movie Guide</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">News</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">Offshore</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">Contact Us</a>
        </li>
      </ul>
)}


export default Menu;