//@reduxjs/toolkit library
import { createSlice } from "@reduxjs/toolkit";

//fake data
import { tasksData } from "../components/helpers/TasksData";

const timeSlice = createSlice({
    name: "timeCounter",
    initialState: {
        timeCounter: JSON.parse(localStorage.getItem("taskList")) || []
    },
    reducers: {
        startCountdown(state, action) {
            localStorage.setItem("start", JSON.stringify(action.payload))
        },
        stopCountdown(state, action) {
            state.timeCounter.push(action.payload)
            localStorage.setItem("taskList", JSON.stringify(state.timeCounter))
            localStorage.removeItem("start")
        },
        deleteTask(state, action) {
            state.timeCounter = state.timeCounter.filter((task) => task.taskName !== action.payload)
            localStorage.setItem("taskList", JSON.stringify(state.timeCounter))
        },
        generateTasks(state, action) {
            state.timeCounter = tasksData
            localStorage.setItem("taskList", JSON.stringify(state.timeCounter))
        }
    }
})

export const {startCountdown, stopCountdown, deleteTask, generateTasks} = timeSlice.actions;

export default timeSlice.reducer;