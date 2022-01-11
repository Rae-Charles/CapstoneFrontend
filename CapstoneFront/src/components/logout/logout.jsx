// import React from 'react';
// import axios from 'axios';
// import { useState } from 'react';
// import './login.css'

// export default class Logout extends React.Component {

//     getUser = async () => {
//     const jwtToken = localStorage.getItem("token");
//     try {
//         var results = await axios({
//             method: 'DELETE',
//             url: 'https://localhost:44394/api/auth/',
//             headers: {Authorization: `Bearer ${jwtToken}`},
//             });
//         console.log(results.data)
//         this.setState({
//             user: results.data
//         })
        
//     } catch (e) {
//             console.log(e);
//         }    
//       }
    
//       logout = () => {
//         localStorage.clear();
//         window.location.href = "/"; 
//         ;
//     }
// }
