import React from 'react'

const Dashboard = () => {
  const user = useSelector(state=>state.global.user);
  if(!user) return <div></div>
  else {
    const products=[];
    return (
        <div className='dashboard'>
            
        </div>
    );
  };
}

export default Dashboard