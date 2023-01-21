import { Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Dashboard.css";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import prof from "assets/images/profile.png";
import Dashtemp from "./Dashtemp";
// import { map } from 'lodash';
import MyButton from "components/MyButton/MyButton";
import { useGetProductQuery } from "state/api";
import {Buffer} from "buffer";
const Dashboard = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.global.user);
  // if(!user) return <div></div>;
  // function fun(e){
  //   return(
  //     <Dashtemp image={e.image} title={e.title} />
  //   )
  // }
  // useEffect(()=>{

  // },[products]);
  console.log(user._id);
  const [cards, setCards] = useState([]);
  const {data,isSuccess} = useGetProductQuery(user._id);

  useEffect(()=>{
    console.log(data);
    setCards(data);
  },[isSuccess]);

  if(isSuccess){
    return (
      <div className="dashboard">
          <div className="admin-data">
            <div className="admin-profile">
              <div className="prof-img"></div>
            </div>
            <div className="admin-det">
              <h3>Name</h3>
              <h5>Client name</h5>
            </div>
          </div>
          <br />
          <div className="extradivadded">
            <div className="products-dash">
              {cards && cards.map((card) => {
                // const base64String = Buffer.from(card.image.data.data).toString("base64");
                return (
                  // <img src={`data:image/png;base64,${base64String}`} alt="hello"/>
                  <Dashtemp
                    title={card.name}
                    img={`data:image/png;base64,${card.image}`}
                    des={"this is description"}
                  />
                );
              })}
            </div>
          </div>
          <div className="additembutton">
            <MyButton onClick={() => navigate("/add")}>+ Products</MyButton>
          </div>
        </div>
    );
  }
  else{
    return <div className="dashboard_loading"> Loading....Grab a cup of coffee until</div>
  }
};

export default Dashboard;
