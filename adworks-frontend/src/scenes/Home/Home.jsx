import React, { useEffect,useMemo,useState } from "react";
import Carousell from "./Carousell";
import "./Home.css";

const Home = () => {
  const [automatic,setauto]=useState(true);
  return (
    <div className="home">
      <div className="square1 move"></div>
      <div className="square2 move"></div>
      <div className="square3 move"></div>
      <div className="square4 move"></div>
      <div className="square5 move"></div>
      <div className="home_landing">
        <div class="landing_text">
          <h1 class="h1-seo">AdWorks</h1>
          <h3>Dare to dream Big.</h3>
          <h3>We will make</h3>
          <h3>it happen..</h3>
        </div>
      </div>
      <div className="carobody">
        <Carousell />
      </div>
    </div>
  );
};

export default Home;
