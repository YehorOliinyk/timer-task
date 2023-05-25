//react
import React from 'react'

//react-redux library
import { useSelector } from 'react-redux'

//material-ui library
import { TableCell, TableContainer, TableRow, Table, TableHead, TableBody, Button } from '@mui/material'

//navigation by react-router-dom
import { NavLink, useParams, Navigate } from 'react-router-dom'

const Log = () => {
    const tasksList = useSelector(state => state.timeCounter.timeCounter)

    const { id } = useParams()

    if (!tasksList[id]) {
        return (
            <Navigate replace to = {`/tasks/:${id}`}/>
        )
    }

    const { taskName, start, completedTask, currentTime } = tasksList[id]

    const tableCells = ['№', 'Task', 'Time start', 'Time end', 'Time spend', 'Info', 'Delete']

    return (
        <TableContainer sx={{display: "flex", alignItems: "center", height: "100vh", backgroundColor: "#eaf6ff"}}>
            <Table sx={{ maxWidth: "1140px", margin: "0 auto" }} aria-label="simple table">
                <TableHead >
                    <TableRow >
                    {
                        tableCells.map((item, index) => {
                            return <TableCell sx={{color: "#cec1b7"}} key={index}>{item}</TableCell>
                        })
                    }
                    </TableRow>
                </TableHead>
                <TableBody sx={{ backgroundColor: "#eaf6ff" }}>
                    <TableRow key={id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell align="left" sx={{ color: "#5867cb" }}>{id}</TableCell>
                        <TableCell align="left" sx={{ color: "#5867cb" }}>{taskName}</TableCell>
                        <TableCell align="left" sx={{ color: "#5867cb" }}>{start}</TableCell>
                        <TableCell align="left" sx={{ color: "#5867cb" }}>{completedTask}</TableCell>
                        <TableCell align="left" sx={{ color: "#5867cb" }}>{currentTime}</TableCell>
                        <TableCell align="left" sx={{ color: "#5867cb" }}>
                            <Button variant='outlined'>
                                <NavLink to='/timer-task'>Back to task list</NavLink>
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Log
