import { Paper } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const user = useSelector(state=>state.global.user);
  if(!user) return <div></div>
  else {
    const products=[];
    return (
        <div className='dashboard'>
        <div className='admin-data'>
        <div className='admin-det'>
          Hello world
        </div>
        </div>
            
        </div>
    );
  };
}

export default Dashboard