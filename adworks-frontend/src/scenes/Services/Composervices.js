import React from 'react';
function Compservices(props) {
    return ( 
        <div className='compo'>
        <props.icon/>
        <div className='texts'><h5 style={{fontSize:props.fontsize}}>{props.title}</h5>
          <p>{props.text}</p>
        </div>
        </div>
     );
}

export default Compservices;