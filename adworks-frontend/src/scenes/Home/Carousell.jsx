import React, { useState } from 'react';
import profile from "assets/images/profile.png"
import "./Carousel.css"
import { Carousel } from 'react-carousel-minimal';
import soc1 from "assets/images/soc1.jpg"
import soc2 from "assets/images/soc2.jpg"
import soc3 from "assets/images/soc3.jpg"
import soc4 from "assets/images/soc4.jpg"
import soc5 from "assets/images/soc5.jpg"
import soc6 from "assets/images/soc6.jpg"


function Carousell(props) { 
  const data = [
    {
      image: soc6,
      caption: "Digital Marketing"
    },
    {
      image: soc2,
      caption: "Designing"
    },
    {
      image: soc3,
      caption: "Content Writing"
    },
    {
      image: soc3,
      caption: "Social Media Marketing"
    },
    {
      image: soc5,
      caption: "Strategy and Planning"
    }
    
  ];
      
      
  
    const captionStyle = {
      fontSize: '2rem',
      fontWeight: 'bold',
    }
    const slideNumberStyle = {
      fontSize: '20px',
      fontWeight: 'bold',
    }
   

    
    return (

      
      <div className="Carousell">
        {/* <div style={{ textAlign: "center" }}> */}
            <Carousel
              data={data}
              time={3000}
              width="90vw"
              height="65vh"
              captionStyle={{fontSize:"40px",fontWeight:"bold"}}
              radius="10px"
              slideNumber={true}
              slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              automatic={true}
              dots={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="transparent"
              slideImageFit="cover"
              thumbnails={true}
              thumbnailWidth="100px"
              margin= "0 auto"
              style={{
                textAlign: "center",
                className:"fade",
                objectFit:"cover",
                boxSizing:"border-box",
              }}
               />
      </div>    
      )
}

export default Carousell;