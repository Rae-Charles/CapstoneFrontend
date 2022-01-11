import React, { Component } from 'react';
import axios from 'axios';
import './login.css'


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: "",
            password: ""
         }
    }

    handleChange = event => {    
        this.setState({     
            [event.target.name] : event.target.value        
        });
    }

    handleSubmit = async event => {
        event.preventDefault();
        console.log("I made it this far!")
                
        await axios ({
            method:'POST',
            url:"http://127.0.0.1:8000/api/auth/login/",
            data:{          
                "username": this.state.username,
                "password": this.state.password,                               
            }
            }).then(res => {
                console.log(res);
                console.log(res.data);
                localStorage.setItem("token", res.data.access);
            });

        window.location="/homepage"
    };

    render() { 
        return ( 
            <div className="container">
            <body>
                <div className="login">
                <center><h3>Login</h3></center>
                <form onSubmit={this.handleSubmit}>
                <center><label for="username">User Name:</label><input name="username" type="text" value={this.state.username} onChange={this.handleChange}></input></center>
                <center><label for="password">Password:</label><input name="password" type="password" value={this.state.password} onChange={this.handleChange}></input></center>
                <center><button type="submit">Login</button></center>
                </form>
                </div>
            </body>
        </div>
         );
    }
}
 
export default Login;