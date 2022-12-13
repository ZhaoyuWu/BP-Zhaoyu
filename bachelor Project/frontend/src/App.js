import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import React, {Component, useEffect, useState} from 'react';
import {Route,Routes} from "react-router-dom"
import Homepage from "./pages/Homepage";
import Navbar from "./Navbar";
import Myprofile from "./pages/Myprofile";
import Search from "./pages/Search";
import Course from "./pages/Course";
import Like from "./pages/Like";

function App() {
  //那个页面默认显示 所以默认为login页面
  const [currentForm, setCurrentForm] = useState('login');

  //切换表单 toggle form
  const toggleForm = (formName) => {
    //这是一个setCurrentForm Hook抓取表单的名称 现在我们需要使用这个函数并将其传递给我们当前的表单
    setCurrentForm(formName);
  }

  return (
    <div className="App">

        { currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />}:


      <div className="container">
        <Navbar/>
        {/*this is a nevigationbar component*/}
        <Routes>
          <Route path= "/homepage" element= {<Homepage/>} />
          <Route path= "/course" element= {<Course/>} />
          <Route path= "/like" element= {<Like/>} />
          <Route path= "/search" element= {<Search/>} />
          <Route path= "/myprofile" element= {<Myprofile/>} />
        </Routes>

      </div>


    </div>
  );
}

export default App;
