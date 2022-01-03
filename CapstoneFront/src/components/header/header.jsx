import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import axios from 'axios';
import { Navbar, Nav, Dropdown, NavItem, NavLink, NavbarBrand, NavDropdown } from 'react-bootstrap';


function Header(){
    let user = JSON.parse(localStorage.getItem('user-info'))
    console.warn(user)
    return (
        <div class="navbar">
        <a class="active" href="/homepage">Home</a>
        <a href="/login" > Login </a>
        <a href="/" > New User </a>
        <a href="/about" > About Us </a>
        </div>
    );
}

export default Header;