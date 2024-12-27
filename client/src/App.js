import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import bootstrap from 'bootstrap'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from './components/navbar';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import Signup from './components/Signup';
import CreatePost from './components/CreatePost';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
    <Routes>
  
    <Route path='/' element={<Home/>} />

    <Route path='/signin' element={<Login/>} />

    <Route path='/profile' element={<Profile /> } />

    <Route path='/signup' element={<Signup/>} />
    <Route path='/createpost' element={<CreatePost/>} />

   </Routes>
   
   </BrowserRouter>
  );
}

export default App;
