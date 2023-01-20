import { Paper } from '@mui/material';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import "./Dashboard.css"
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import prof from "assets/images/profile.png"
import Dashtemp from './Dashtemp';
// import { map } from 'lodash';
import MyButton from 'components/MyButton/MyButton';
import { Product } from './products';
const Dashboard = () => {
  // const products=[];
  
  const navigate = useNavigate();
  const user = useSelector(state=>state.global.user);
  // const [products,setproducts]=useState([]);
  if(!user) return <div></div>
  else {
    // function fun(e){
    //   return(
    //     <Dashtemp image={e.image} title={e.title} />
    //   )
    // }
    return (
        <div className='dashboard'>
        <div className='admin-data'>
        <div className='admin-profile'>
        <div className='prof-img'></div>
        </div>
        <div className='admin-det'>
        <h3>Name</h3>
        <h5>Client name</h5>
        </div>
        </div>
        <br/>
        <div className='extradivadded'>
        <div className='products-dash'>
           {Product.map((e)=>{return(<Dashtemp title={e.Title} img={e.img} des={e.description}/>)})}

        </div>
        </div>
        <div className='additembutton'><MyButton onClick={() => navigate("/add")} >+ Products</MyButton></div>
        </div>
    );
  };
}

export default Dashboard