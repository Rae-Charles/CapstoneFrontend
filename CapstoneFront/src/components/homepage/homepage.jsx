import './homepage.css';
import axios from 'axios';
import React, { useState , useEffect} from 'react';
import './homepage.css'


function HomePage(){
    const [books, setBooks] = useState([])

    //useEffect determines the first thing that will run when the page loads
    useEffect(()=>{
        getBooks()
    },[])

    const getBooks = async () =>{
        let response = await axios.get('http://127.0.0.1:8000/api/books')
        setBooks(response.data)
    }

    const addToCart = (books) =>{
        console.log(books)
        //post to shopping cart request will go here
    }

    return (
        <div>
            <div className= "container">
                <div className="card">
                    <center><table className="table">
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Genre</th>
                            <th>Description</th>
                            <th>Price</th>
                        </tr>     
                        </thead>
                        <tbody>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Genre</th>
                            <th>Description</th>
                            <th>Price</th>
                        </tr>        
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Genre</th>
                            <th>Description</th>
                            <th>Price</th>
                        </tr>        
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Genre</th>
                            <th>Description</th>
                            <th>Price</th>
                        </tr>                                                        
                        </tbody>      
                    </table></center>
                </div>    
            </div>
        </div>
        )
    }
                 
                      
export default HomePage;