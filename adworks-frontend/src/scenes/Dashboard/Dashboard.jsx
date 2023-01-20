import { Paper } from '@mui/material';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import "./Dashboard.css"
import prof from "assets/images/profile.png"
import Dashtemp from './Dashtemp';
import { map } from 'lodash';
import MyButton from 'components/MyButton/MyButton';
const Dashboard = () => {
  // const products=[];
  
  
  const user = useSelector(state=>state.global.user);
  const [products,setproducts]=useState([]);
  if(!user) return <div></div>
  else {
    function fun(e){
      return(
        <Dashtemp image={e.image} title={e.title} />
      )
    }
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
           {/* {map.products(fun(e))} */}
           <Dashtemp />
           <Dashtemp />
           <Dashtemp />
           <Dashtemp />
           <Dashtemp />
           <Dashtemp />
           <Dashtemp />
        </div>
        </div>
        <div className='additembutton'><MyButton >+ Products</MyButton></div>
        </div>
    );
  };
}

export default Dashboard