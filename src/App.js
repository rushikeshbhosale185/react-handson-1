
import { useState } from 'react';
import './App.css';
import ClassComponent from './Components/ClassComponent';
import FunctionalComponent from './Components/FunctionalComponent';

function App() {
  const [functionData,setFunctionData] = useState(false);
  const [classData,setClassData] = useState(false);
  const changeFn = ()=>{
    setFunctionData(!functionData);
  }
  const changeCls = ()=>{
    setClassData(!classData);
  }
  return (
    <div className="App">
        <h1>Styling using Functional and Class Components</h1><br></br>
        <button className='btn-fn' onClick={changeFn}>Click Here to see the Styling in Functional Component</button><br/><br/>
        <button className='btn-cls' onClick={changeCls}>Click Here to see the Styling in Class Component</button>
        <div className='flex-box'>
          { functionData && <FunctionalComponent/> }
          { classData && <ClassComponent/> }
        </div>
    </div>
  );
}

export default App;
