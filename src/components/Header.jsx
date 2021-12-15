import React from "react";
import 'react-bootstrap';

function Header(){
return(
<nav className="custom-nav-1">
          <div className="logo">
            <img src="assets/newlogo.png" alt=""  height="70px"/>
            <p> see it right! </p>
          </div>
          <div>
            <form class="form-inline" action="" method="get" id="movies-form">
                <input type="text" className=" px-4 py-1  search-input" placeholder="search movies,tv,actors,more..." name="search" id="search-one"/>
                <button type="button" className="search-icon">
                <img src="search.png" height="20px" width="20px" alt=""/>
                </button>
            </form>
            <div className="form-linking">
                <a href="#" class="link-to-form login-1" target="_self" lang="en">log in</a>
                <a href="#" target="_self" className="link-to-form register-1" lang="en">register</a>
            </div>
        </div>
</nav>

)}

export default Header;