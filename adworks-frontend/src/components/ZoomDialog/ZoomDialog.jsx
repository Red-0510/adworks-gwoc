import React from 'react';
import { useTheme } from '@emotion/react';
import { Zoom,Dialog } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Zoom timeout={500} ref={ref} {...props} />;
});

const ZoomDialog = ({open,setOpen,children}) => {

    const theme = useTheme();

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
            sx={{
                "& .MuiDialog-Paper":{
                    backgroundColor:theme.palette.background.alt,
                }
            }}
        >
            {children}
        </Dialog>
    </div>
  );
}

export default ZoomDialog