import logo from './logo.svg';
import './App.css';
import ClassComp from './components/ClassComp';
import FunComp from './components/FunComp';
import PropFunComp from './components/PropFuncComp';
import ArrayofNames from './components/ArrayofNamesProps';
import Employee from './components/Employee';
import WelcomeState from './components/welcpmeState';
import ChangePara from './components/ChangePara';
import IncDec from './components/IncDec';
import SimpleStyle from './components/SimpleStyle';
import ArrayStudent from './components/ArrayStudent';


function App() {
  return (
    <div >
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> 
        <h1> Hello Sumit </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>   
        
      </header> 
      <ClassComp/>
      <FunComp /> 
      <PropFunComp  num="5" /> 
      <ArrayofNames names={["Sumit","Kunal"]} />  
      <Employee empid="21" ename="Sumit" salary="50000" />  
      <WelcomeState /> 
      <ChangePara /> 
      <IncDec /> */}
      <SimpleStyle /> 
      <ArrayStudent names={["sumit","kunal","shubham","supriya"]}/>


    </div>  
   
    
  );
}

export default App;
