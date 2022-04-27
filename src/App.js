import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from './front/home';
import data from './back/data/data';

function App() { 
  const {produtItem}=data;
  return (
    <div>
    <Router>
       <Home/> 
    </Router>
    </div>
  );
}

export default App;
