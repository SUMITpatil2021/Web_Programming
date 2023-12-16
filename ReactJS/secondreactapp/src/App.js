import logo from './logo.svg';
import './App.css';
import Home from './Components/home';
import { Route,Router,Link,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

    <Link to='/home' >Home</Link> 

    <ul className='nav navbar'> 
      <li className='nav-item'> 
        <Link to="/count"  className='nav-link'/>
        <Link to='/countDisplay' className='nav-link' />
      </li>
    </ul>

    <Routes>
      <Route  path='/home' elements='/Home' /> 
    
    </Routes>
    </div>
  );
}

export default App;
