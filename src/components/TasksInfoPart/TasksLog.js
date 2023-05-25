// react
import React from 'react'

//material-ui library
import { TableCell, TableContainer, TableRow, Table, TableHead, TableBody, Button } from '@mui/material'

//navigation by react-router-dom
import { NavLink } from 'react-router-dom'

//react-redux library
import { useSelector, useDispatch } from 'react-redux'

//reducer
import { deleteTask } from '../../store/timeSlice'

const TasksLog = () => {
    const tasksList = useSelector(state => state.timeCounter.timeCounter)
    const dispatch = useDispatch()
    const deleteFromLog = (itemName) => dispatch(deleteTask(itemName))

    const tableCells = ['№', 'Task', 'Time start', 'Time end', 'Time spend', 'Info', 'Delete']
    
    const deleteLog = (mark) => () => {
        deleteFromLog(mark)
    }

    return (
        <TableContainer sx={{paddingBottom: "50px"}}>
            <Table sx={{maxWidth: "1140px", margin: "0 auto"}} aria-label="simple table">
                <TableHead >
                    <TableRow >
                    {
                        tableCells.map((item, index) => {
                            return <TableCell sx={{color: "#cec1b7"}} key={index}>{item}</TableCell>
                        })
                    }
                    </TableRow>
                </TableHead>    
                <TableBody sx={{backgroundColor: "#eaf6ff"}}>
                    {tasksList.map((item, index) => (
                        <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0}}}>
                            <TableCell align="left" sx = {{color: "#5867cb"}}>{index}</TableCell>
                            <TableCell align="left" sx = {{color: "#5867cb"}}>{item.taskName}</TableCell>
                            <TableCell align="left" sx = {{color: "#5867cb"}}>{item.start}</TableCell>
                            <TableCell align="left" sx = {{color: "#5867cb"}}>{item.completedTask}</TableCell>
                            <TableCell align="left" sx = {{color: "#5867cb"}}>{item.currentTime}</TableCell>
                            <TableCell align="left" sx = {{color: "#5867cb"}}>
                                <Button sx={{backgroundColor: "#fff"}}>
                                    <NavLink to = {`${index}`}>Info</NavLink>
                                </Button>
                            </TableCell>
                            <TableCell align="left" sx = {{color: "#5867cb"}}>
                                <Button sx={{backgroundColor: "#fff"}} onClick={deleteLog(item.taskName)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TasksLog
