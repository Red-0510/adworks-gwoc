import React from 'react';
import "./Dashtemp.css";
import imge from 'assets/images/profile.png'


function Dashtemp(props) {
    return ( 
        <div className='Dashtemp' title={props.des}>
        <h5 style={{height:"30%",display:"flex",justifyContent:"center",alignItems:"center"}}>{props.title}</h5>
        <div className='prod-temp-img'><img src={props.img} /></div>
        </div>
     );
}

export default Dashtemp;