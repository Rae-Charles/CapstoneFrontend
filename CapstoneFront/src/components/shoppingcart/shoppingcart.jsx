import './shoppingcart.css';
import axios from 'axios';
import React, { useState , useEffect} from 'react';

// function ShoppingCart (props){

//     useEffect(()=>{
//         const getBooks = async () =>{
//             let response = await axios.get('http://127.0.0.1:8000/api/shoppingcart')
//             getBooks(response.data)
//         }
//         getBooks()
//     },[])
// }    


// function ShoppingCart (props){
    
//     useEffect(() =>{
//     getBooks();
//   },[props.toggle])

//   const getBooks = async () => {
//     var response = await axios ({
//         method: 'GET',
//         url : "http://127.0.0.1:8000/api/shoppingcart/",
//     })
//     console.log(response.data);
//     getBooks(response.data)
//   }

//   const handleSearch = () => {
//     books.filter(books => {
//       setFilteredBooks([]);
//       if(books.includes(userInput)) {  
//           setFilteredzBooks([books])
//           setUserInput("");
//       }
//       else {
//         setUserInput("");
//       }
//     });
//   }


function ShoppingCart(props){
    const [books, setBooks] = useState([])

    //useEffect determines the first thing that will run when the page loads
    ShoppingCart = async (user) => {
        console.log(user.id)

        const jwtToken=localStorage.getItem('token')    
        var results = await axios ({
            method : 'GET',
            url : `http://127.0.0.1:8000/api/shoppingcart/${user.id}`,
            // data : {
            //     userId: user.id,            }
            headers: {Authorization: `Bearer ${jwtToken}`},
        })
        console.log(results.data);
        this.setState({
            ShoppingCart: results.data
        })
    }

    return (
        <div>
            <div className= "book">
                <div className="cover">
                    <center><h1>Shopping Cart</h1></center>
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
                                <button onClick={()=>{props.deleteFromCart(book)}}>Delete</button>
                        </tr>
                        )}
                        </tbody>
                    </table>
                </div>    
            </div>
        </div>
        )
    }              
                      
export default ShoppingCart;