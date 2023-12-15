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
import Login from './components/login';
import RegForm from './components/RegForm';
import Timer from './components/Timer';
import { Route, Router,Link, Routes } from 'react-router-dom';
import LocalStorage from './components/LocalStorage';
import LocalDisplay from './components/LocalDisplay';
import REST_API_POSTMAN from './components/REST_API_POSTMAN';
import EmpData from './components/EmpData';
import EmpInsert from './components/EmpInsert';






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
      <IncDec /> 
      <SimpleStyle /> 
      <ArrayStudent />  
      <Login /> 
      <RegForm /> 
      <Timer /> */} 
      <Link to="/">HOME</Link>  
      <ul  className="nav navbar">
          <li className='nav-item'>
              <Link to="/Login" className='nav-link'>Login </Link>
          </li>
          <li className="nav-item">
            <Link to="/RegForm" className='nav-link'>Registration</Link>
          </li> 
          <li className='nav-item'>
            <Link to="/Employee" className='nav-link'>Employee Data</Link>
          </li> 
          <li className='nav-item' >
            <Link to="/LocalStorage" className='nav-link'>Local Storage</Link>
          </li> 
          <li className='nav-item'>
            <Link to="/LocalDisplay" className='nav-link'>Local Display </Link>
          </li>   

          <li className='nav-item'>
            <Link to="/REST_API_POSTMAN" className='nav-link'>REST_API_POSTMAN</Link>
          </li> 
          <li  className='nav-item'>
            <Link to="/EmpData" className='nav-link' >Get Employee Data</Link>
          </li>

          <li  className='nav-link'>
            <Link to="/EmpInsert" className='nav-link'>Insert Employee</Link>
          </li>
      </ul>

      <Routes>
        <Route path='/'  />
        <Route path='/Login' element={<Login/>} /> 
        <Route path='/RegForm' element={<RegForm/>} />
        <Route path='/Employee' element={<Employee />} /> 
        <Route path='/LocalStorage' element={<LocalStorage />} />
        <Route path='/LocalDisplay' element={<LocalDisplay />} />
        <Route path='/REST_API_POSTMAN' element={<REST_API_POSTMAN />} />
        <Route path='/EmpData' element={<EmpData />} /> 
        <Route path='/EmpInsert' element={<EmpInsert />} />
      
      </Routes>


    </div>  
   
    
  );
}

export default App;
