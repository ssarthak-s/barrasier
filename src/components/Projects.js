
import React, {useState} from 'react';


const Projects = ({projectList, updateProjectList})=>{

    const [newProjectInput, updateInput] = useState('');
    const addProject = ()=>{
        updateProjectList([...projectList, {name: newProjectInput}])
        updateInput('');
    }

    return (
        <>
        <div>
            <input placeholder='New project name' value={newProjectInput} onChange={(e)=>{updateInput(e.target.value)}}/>
            <button onClick={addProject}>Add Project</button>
        </div>
        <div className='projectContainer'>
            {projectList.map(({name})=>(
                <div className='projectName'>{name}</div>
            ))}
        </div>
        </>

    )
}

export default Projects;