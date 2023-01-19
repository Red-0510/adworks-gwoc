import React from 'react';
import "./Dashtemp.css";
import imge from 'assets/images/profile.png'
function Dashtemp() {
    return ( 
        <div className='Dashtemp'>
        <h5 style={{height:"30%",display:"flex",justifyContent:"center",alignItems:"center"}}>Heading Name</h5>
        <div className='prod-temp-img'><img src={imge}></img></div>
        </div>
     );
}

export default Dashtemp;