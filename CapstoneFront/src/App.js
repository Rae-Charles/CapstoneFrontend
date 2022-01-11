import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import NewUserLogin from './components/newuserlogin/newuserlogin';
import Login from './components/login/login';
import HomePage from './components/homepage/homepage';
import About from './components/about/about';
import jwtDecode from 'jwt-decode';
import ShoppingCart from './components/shoppingcart/shoppingcart';
// import Logout from './components/logout/logout';


class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
        user: '',
        books: [],
        shoppingCart: [],
        toggle:false
    }
}

  componentDidMount(){
    const jwt = localStorage.getItem('token');
    try {
      const user = jwtDecode(jwt);
      this.setState({user});

    } catch (error) {
      console.log(error);
  }
}

  getUser = async () => {
    const jwtToken = localStorage.getItem("token");
    try {
        var results = await axios({
            method: 'GET',
            // url: 'https://localhost:44394/api/auth/login',
            url: 'http://127.0.0.1:8000/api/auth/login/',
            headers: {Authorization: `Bearer ${jwtToken}`},
        });
        console.log(results.data)
        this.setState({
            user: results.data
        })
    } catch (e) {
        console.log(e);
    }    
  }

  logout = () => {
    localStorage.clear();
    window.location.href = "/";
}


  render() {
    const user = this.state.user;
    return (
      <div >
          <Header />
        <Routes>
            <Route path="/" exact element={<NewUserLogin/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/homepage" element={<HomePage/>} />
            <Route path="/shoppingcart" element={<ShoppingCart/>} />
            <Route path="/about" element={<About/>} />
            {/* <Route path="/logout" element={<Logout />} /> */}
          </Routes>
      </div>
    );
  }
  }

export default App;        