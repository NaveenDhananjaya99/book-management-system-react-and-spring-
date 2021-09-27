import React, { Component } from 'react'
import BookService from '../service/BookService'
import Header from './HeaderComponent';

export default class BookHomeComponent extends Component {
    constructor(props){
     super(props)

     this.state={
         
        book:[]
     }

   
    }

  

    componentDidMount(){
        BookService.getBook().then((res)=>{

           this.setState({book: res.data});

        });
    }
  
    

    updateBook(id){

       this.props.history.push(`/update/${id}`);

    }

    deleteBook(id){
   BookService.DeleteBook(id).then((res)=>{
    window.location.reload();
     });
   } 



    render() {
        return (
            
            <div>
               <Header/>
                <h2 className="text-center m-5">Book List</h2>

             
       
                <div className="row">
                <div className=" table-responsive">
                    <table className="table table-striped table-bordered table-dark">

                        <thead>

                            <tr>
                                <th><h5>Book Name</h5></th>
                                <th> <h5>Author</h5></th>
                               
                                <th> <h5>Release Date</h5></th>
                                <th> <h5>Description</h5></th>
                                <th> <h5>Price</h5></th>
                                <th> <h5>Quantity</h5></th>
                                <th> <h5>Delete/Update</h5></th>
                            </tr>

                        </thead>

                        <tbody>

                           {
                               this.state.book.map(
                                   book=>
                                   <tr key={book.id}>

                                       <td>{book.bookName}</td>
                                       <td>{book.author}</td>
                                       <td>{book.releaseDate}</td>
                                       <td>{book.description}</td>
                                       <td>{book.price}</td>
                                       <td>{book.quantity}</td>
                                       
                                       <td><button onClick={()=>this.updateBook(book.id)} className="btn btn-success" >update</button> 
                                       <button onClick={()=>this.deleteBook(book.id)} className="btn btn-danger"style={{marginLeft:"10px"}}>delete</button>
                                        </td>
                                       
                                   </tr>
                               )
                           }

                        </tbody>

                    </table>
                  </div>
                </div>
                
            </div>
        )
    }
}
