// react 
import React from 'react'
import { useState, useEffect } from 'react'

//react-redux library
import { useDispatch } from 'react-redux'

//reducers
import { generateTasks, startCountdown, stopCountdown } from '../../store/timeSlice'

// moment.js library
import moment from 'moment/moment'

//material-ui library
import { Button, TextField} from '@mui/material'

//navigation by react-router-dom
import { NavLink, Outlet } from 'react-router-dom'

//component
import AlertMessage from '../AlertMessage/AlertMessage'

//styles
import './Timer.css'

const Timer = () => {
    const runningTime = JSON.parse(localStorage.getItem("start"));
    const dispatch = useDispatch()

    const startTimer = (value) => dispatch(startCountdown(value))
    const stopTimer = (obj) => dispatch(stopCountdown(obj))
    const generateShedule = () => dispatch(generateTasks())

    const initialState = {
        operation: "Start",
        currentTime: "00:00:00",
        taskName: '',
        alert: false
    }

    const [state, setState] = useState(initialState)

    const {operation, currentTime, taskName, alert} = state;

    useEffect(() => {
        if (runningTime) {
            setState({...state, operation: 'Stop'})
            
            const countdown = setInterval(() => {
                const diff = moment().diff(moment.unix(runningTime))
                setState((state) => ({...state, currentTime: moment.utc(moment.duration(diff).asMilliseconds()).format("HH:mm:ss")}))
            }, 1000)

            return () => {
                clearInterval (countdown)
            }
        } 
    }, [runningTime])

    const startOperation = () => {
        setState({...state, operation: 'Stop'})

        let startDate = moment().unix()
        startTimer(startDate)
    }

    const stopOperation = () => {
        if (taskName !== "") {
            const completedTask = moment().format("HH:mm:ss")
            const start = moment.unix(runningTime).format("HH:mm:ss");

            stopTimer({start, completedTask, currentTime, taskName})

            return setState(initialState)
        } 

        return setState({...state, alert: true})
    }

    const switchOperation = () => {
        runningTime ? stopOperation() : startOperation() 
    }

    const handleChange = (e) => {
        setState(state => ({...state, taskName: e.target.value}))
    }

    const alertStatus = (status) => {
        setState({...state, alert: status})
    }

    return (
        <div className='timer'>
            <TextField 
                value = {taskName}
                placeholder = "Name of your task"
                variant="standard" 
                sx = {{
                    input: {
                        textAlign: "center", 
                        color: "blue",  
                        marginTop: "50px",
                        width: "300px",
                        fontSize: "20px",
                    }
                }}
                onChange={handleChange}
            />
            <div className='clock'>
                <div className='clockItem'>{currentTime}</div>
            </div>
            <Button variant="outlined" onClick={switchOperation}>{operation}</Button>
            <Button variant='outlined' sx={{margin: "20px auto"}} onClick={generateShedule}>Generate</Button>
            {alert && <AlertMessage onChange={alertStatus} open = {alert}/>}
            <div className="navigation">
                <NavLink to='/timer-task' className='link'>TASKS LOG</NavLink>
                <NavLink to='chart' className='link'>TASKS CHART</NavLink>
            </div>
            <Outlet/>
        </div>
    )
}

export default Timer;
