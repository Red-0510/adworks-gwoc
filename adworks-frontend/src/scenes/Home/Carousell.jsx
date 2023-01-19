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
      caption: "San Francisco"
    },
    {
      image: soc2,
      caption: "Scotland"
    },
    {
      image: soc3,
      caption: "Darjeeling"
    },
    {
      image: soc3,
      caption: "San Francisco"
    },
    {
      image: soc5,
      caption: "Scotland"
    }
    
  ];
      
      
  
    const captionStyle = {
      fontSize: '2em',
      fontWeight: 'bold',
    }
    const slideNumberStyle = {
      fontSize: '20px',
      fontWeight: 'bold',
    }
   

    
    return (

      
      <div className="Carousell">
        <div style={{ textAlign: "center" }}>
          
          <div style={{
           
          }}>
          
            <Carousel
              data={data}
              time={3000}
              width="100%"
              height="65vh"
              captionStyle={captionStyle}
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
              style={{
                textAlign: "center",
                maxWidth: "100%",
                maxHeight: "100%",
                margin: "80px auto",
                className:"fade",
                objectFit:"cover",
              }}
               />
          </div>
        </div>
      </div>

            
      );
}

export default Carousell;