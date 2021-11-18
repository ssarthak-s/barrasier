import React, {useState } from "react";
import "./styles.css";
import Menu from './components/Menu';
import Projects from './components/Projects';
import TimeTraker from './components/TimeTracker'


const App = () => {

  const [selectedOption, updateSeletedOption] = useState(0);
  const [projectList, updateProjectList] = useState([]);

  const menuOptions =[
   { label: 'Time Traker',
      onClick : ()=>{updateSeletedOption(0)}  
  },
  { 
  label: 'Projects',
  onClick : ()=>{updateSeletedOption(1)}  
},
  ];
  const renderSelectedComponent = ()=>{
    if(selectedOption===1){
      return <Projects {...{projectList, updateProjectList}}/>  
    }
    return <TimeTraker projectList={projectList}/>
  }
  return (
    <div className="App">
      <Menu menuOptions={menuOptions} selectedOption={selectedOption}/>
      <div className='componentContainer'>
      {renderSelectedComponent()}
      </div>
    </div>
  );
};


export default App;
