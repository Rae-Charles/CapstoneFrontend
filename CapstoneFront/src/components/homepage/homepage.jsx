import './homepage.css';
import axios from 'axios';
import React, { useState , useEffect} from 'react';
import './homepage.css'
import { useButtonProps } from '@restart/ui/esm/Button';


function HomePage(props){
    const [books, setBooks] = useState([])

    //useEffect determines the first thing that will run when the page loads
    useEffect(()=>{
        const getBooks = async () =>{
            let response = await axios.get('http://127.0.0.1:8000/api/books')
            setBooks(response.data)
        }
        getBooks()
    },[])


    // const addToCart = (books) =>{
    //     console.log(books)
    //     //post to shopping cart request will go here
    //     addToCart = async (books) => {
    //         var results = await axios ({
    //             method: "POST",
    //             url: "http://127.0.0.1:8000/api/shoppingcart/",
    //             data: {
    //                 user_id: 1,
    //                 book: 1,
    //                 quantity: +1,
    //             }
    //         })
    //         console.log(results.data)
    //     }
    // }

    // const deleteFromCart = (books) =>{
    //     console.log(books)
    //         //delete from shopping cart request will go here
    //         deleteFromCart = async (books) => {
    //             var results = await axios ({
    //                 method: "DELETE",
    //                 url: "http://127.0.0.1:8000/api/shoppingcart",
    //                 data: {
    //                     booksId: books.booksId,
    //                     quantity: books.booksQuantity - 1,
    //                     userId: books.userId
    //                 }
    //             })
    //             console.log(results.data)
    //         }
    //     }
    // }

    return (
        <div>
            <div className= "book">
                <div className="cover">
                    <center><h1>BookWorld Inventory</h1></center>
                    <table className="center">                      
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
                            {console.log("Books: ", books)}
                            {books.map((book, index) =>
                            <tr key={index}>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.genre}</td>
                                <td>{book.description}</td>
                                <td>{book.price}</td>
                                <button onClick={()=>{props.addToCart(book)}}>Add to Cart</button>
                        </tr>
                        )}
                        </tbody>
                    </table>
                </div>    
            </div>
        </div>
        )
    }              
                      
export default HomePage;