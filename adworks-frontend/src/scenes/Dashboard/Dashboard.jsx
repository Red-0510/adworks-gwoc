import React from 'react'

const Dashboard = () => {
  const user = useSelector(state=>state.global.user);
  if(!user) return <div></div>
  else {
    const products=[];
    return (
        <div className='dashboard'>
            Dashboard
        </div>
    );
  };
}

export default Dashboard