import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NewUserLogin from './components/newuserlogin/newuserlogin';
import Login from './components/login/login';
import HomePage from './components/homepage/homepage';
// import About from './components/about/about';
// import Logout from '.components/logout/logout';


class App extends Component{
  state = {}

  componentDidMount(){
    const jwt = localStorage.getItem('token');
    try{
      // const user = jwtDecode(jwt);
      this.setState({
        user
      });
    } catch {
  }
}


render() {
  const user = this.state.user;
  return (
    <div >
        <Header />
      <Routes>
          <Route path="/" exact element={<NewUserLogin/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<HomePage/>} />
          {/* <Route path="/about" element={<About/>} /> */}
          {/* <Route path="/logout" element={<Logout />} /> */}
        </Routes>
    </div>
  );
}
}

export default App;        