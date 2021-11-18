import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';



const TimeTraker = ({projectList})=>{
    const [taskList, updateTaskList] = useState([]);
    const [taskName, updateTaskName] = useState('');
    const [selectedProject, updateSelectedProject] = useState('');
    const [showProjectDropdown, setShowProjectDropdown] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [timerStarted, setTimerStarted] = useState(false);
    const timerRef = useRef(null);
    const startStopTimer = ()=>{
        if(timerStarted){
           clearInterval(timerRef.current);
           setTimerStarted(false);
           updateTaskList([...taskList, {
               taskName,
               projectName: selectedProject,
               minutes,
               hours,
               seconds 
           }])
           updateTaskName('');
           updateSelectedProject('');
           setSeconds(0);
           setMinutes(0);
           setHours(0);

           return;
        }
        setTimerStarted(true);
        timerRef.current=setInterval(() => {
            setSeconds((prevValue)=>{
                if(prevValue === 59){
                    setMinutes((prevMinutes)=>{
                        if(prevMinutes===59){
                            setHours(hours+1);  
                            return 0;
                        }
                        return prevMinutes+1;
                    });
                    return 0;
                }
                return prevValue+1
            });
        }, 1000);

    }

    return(
        <>
        <div className='timeTrackerContainer'>
            <input placeholder='What are you working on Today' value={taskName} onChange={(e)=>{updateTaskName(e.target.value)}}/>
            <button onClick={()=>setShowProjectDropdown((prevValue)=>!prevValue)}>{!!selectedProject ? selectedProject: 'Project'}</button>
            <span>{hours}:{minutes}:{seconds}</span>
            <button onClick={startStopTimer}>{timerStarted? 'STOP': 'START'}</button>
        </div>
        <div className='projectOptions'>
        {showProjectDropdown && (
            projectList.map(({name})=>{
                return (
                    <div onClick={()=>{updateSelectedProject(name); setShowProjectDropdown(false)}}>{name}</div>
                )
            })
        )}
        </div>
        <div className='taskContainer'>
            {taskList.map(({taskName, projectName, seconds, minutes, hours})=>{
                return(
                    <div>
                        {taskName} : {projectName} : {hours}hr : {minutes}min : {seconds}sec
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default TimeTraker;
