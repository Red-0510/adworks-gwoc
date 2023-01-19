import React from "react";
import './OurWork.css';
import post1 from "assets/images/Post 1.png"

const OurWork = () => {
    return (
        <div className="ourWork">
            <h4>Success Stories</h4>
            <h2>Top Brands Get Better With Adworks</h2>
            <div className="grid-container">
                <img src={post1} alt="img" />
                <div className="contents">
                    <p><b>PANDORA Boosts Brand and Archieves High CVR</b></p>
                    <div>
                        <h1>130%</h1>
                        <p>increase in conversion rate</p>
                    </div>
                    <div>
                        <h1>217 sec</h1>
                        <p>Average time on site</p>
                    </div>
                </div>
            </div>
        </div>
      );
}
 
export default OurWork;