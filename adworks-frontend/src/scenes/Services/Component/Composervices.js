import React from 'react';
import "./Composervices.css"
// import { Paper } from '@mui/material';
function Composervices(props) {
    return ( 
        <div className='compo' >
        {props.icon&&<div className='iconcompo'>
        <props.icon/>
        </div>}
        <div className='compotexts'><h5 style={{fontSize:props.fontsize}}>{props.title}</h5>
          <p>{props.text}</p>
        </div>
        </div>
     );
}

export default Composervices;