import React from 'react';
import profile from "assets/images/profile.png"
import "./Carousel.css"


function Carousel() { 
    return (
      
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel"  data-keyboard="true" data-interval="3000" data-pause="hover">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100 h-30 carousel_height" src={profile} alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 h-30 carousel_height" src={profile} alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 h-30 carousel_height" src={profile} alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
            
      );
}

export default Carousel;