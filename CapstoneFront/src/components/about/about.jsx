import React from 'react';
import './about.css';
import axios from 'axios';
import { render } from 'react-dom';

function About(props){
  console.log(props);

    return(
          <div className = "container">
              <h1>About BookWorld</h1>
              <br></br>
              <p> 
                  Here at Book World, we realized that shopping for books on platforms such as google or amazon can be daunting, especially
                  with the current pandemic reeking havoc on our society. So, we wanted to create a more user-friendly application for customers 
                  like you to shop for books. We got our start in the great state of Texas, in the city of San Antonio. 
                  We have a brick and mortar location to serve all your needs for acquiring books quickly at an afforable cost! Stop by and visit us at the address listed, or give us a call
                  at the listed phone number for more information.
              </p>
              <br></br>
              <br></br>
              <div className="ceo">
                <h3>CEO and Founder</h3>
                <h4>A Message From Our Founder</h4>
                  <p>
                    Jane Doe is our creater and founder here at BookWorld and she hopes that you have a great experience
                    while browsing through our online library. We hope to bring more features to our members soon, such as
                    a more convenient shopping experience by adding related-works, and a more streamline checkout process.
                  </p>
              </div>
              <br></br>
              <br></br>
              <br></br>
              <div className="address">
                  <h3>Physical Location of BookWorld Store:</h3>
                  Address: 123 Main St<br></br>
                  San Antonio, TX 78258<br></br>
                  <br></br>
                  Email: janedoe@bookworld.com<br></br>
                  Phone: 210-555-1234
              </div>
              </div>
    )
    };


export default About;


/* <h2 style="text-align:center">Our Book World Team</h2>
<div class="row">
  <div class="column">
    <div class="card">
      <img src="/w3images/team1.jpg" alt="Jane" style="width:100%"></img>
      <div class="container">
        <h2>Alice Doring</h2>
        <p class="title">CEO and Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>alicedoring@bookworld.com</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="/w3images/team2.jpg" alt="Mike" style="width:100%"></img>
      <div class="container">
        <h2>Micheal Cunningham</h2>
        <p class="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mikec@bookworld.com</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="/w3images/team3.jpg" alt="John" style="width:100%"></img>
      <div class="container">
        <h2>John Smith</h2>
        <p class="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>johnsmith@bookworld.com</p>
      </div>
    </div>
  </div>
</div> */