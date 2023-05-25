//react
import React from 'react'

//material-ui library
import { Alert, AlertTitle, Button } from '@mui/material'

//navigation by react-router-dom
import { NavLink } from 'react-router-dom'

const UnknownTask = () => {
    const style = { 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center", 
        margin: "150px auto 0 auto"
    }

    return (
        <Alert severity="warning" sx={style}>
            <AlertTitle>Warning</AlertTitle>
            <p>This is an unexisting task — <strong>check it out!</strong></p>
            <Button variant='outlined' sx={{marginTop: "20px"}}>
                <NavLink to='/timer-task'>
                    Return to tasks
                </NavLink>
            </Button>
        </Alert>
    )
}

export default UnknownTask
