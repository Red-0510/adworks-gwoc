import React from 'react';
import { Zoom,Dialog } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Zoom timeout={500} ref={ref} {...props} />;
});

const ZoomDialog = ({open,setOpen,children}) => {

    function handleClick(e,reason){
        if (reason!=="backdropClick" && reason!=="escapeKeyDown") {
            setOpen(false);
        }
        
    }

  return (
    <div>
        <Dialog
            open={open}
            onClose={handleClick}
            TransitionComponent={Transition}
            keepMounted={true}
        >
            {children}
        </Dialog>
    </div>
  );
}

export default ZoomDialog