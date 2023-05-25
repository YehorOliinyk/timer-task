//navigation by react-router-dom
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//components
import Timer from './components/Timer/Timer';
import TasksLog from './components/TasksInfoPart/TasksLog';
import TasksChart from './components/TasksInfoPart/TasksChart';
import Log from './components/TasksInfoPart/Pages/Log';
import UnknownTask from './components/TasksInfoPart/Pages/UnknownTask';

//styles
import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element = {<Timer/>}>
                        <Route index path='timer-task' element = {<TasksLog/>}/>
                        <Route path='chart' element = {<TasksChart/>}/>
                    </Route>
                    <Route path='/timer-task/:id' element = {<Log/>}/>
                    <Route path='/tasks/:id' element = {<UnknownTask/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
