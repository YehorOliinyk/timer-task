import React from 'react'
import { Button, Modal, Box, Typography } from '@mui/material';

const AlertMessage = ({onChange, open}) => {
    const alertStatus = () => {
        onChange(false)
    }

    const blockClick = (e) => {
        e.stopPropagation()
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <Modal
            open = {open}
            onClick={alertStatus}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style} onClick={blockClick}>
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{color: '#c23363'}}>
                    Empty task name
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    You are trying close your task without name, enter the title and try again!
                </Typography>
                <Button variant="text" sx={{float: "right"}} onClick={alertStatus}>Close</Button>
            </Box>
        </Modal>
    )
}

export default AlertMessage