import React, { Component } from 'react'
import BookService from '../service/BookService';
import Header from './HeaderComponent';

export default class AddBook extends Component {
    constructor(props){
        super(props)

        this.state={

         id: this.props.match.params.id,
         BookName:' ',
         Author:' ',
         ReleaseDate:' ',
         Description:'',
         Price:'',
         Quantity:''
        }

        this.changeBookNameHandler =this.changeBookNameHandler.bind(this);
        this.changeAuthorHandler =this.changeAuthorHandler.bind(this);
        this.changeReleaseDateHandler =this.changeReleaseDateHandler.bind(this);
        this.changeDescriptionHandler =this.changeDescriptionHandler.bind(this);
        this.changePriceHandler =this.changePriceHandler.bind(this);
        this.changeQuantityHandler =this.changeQuantityHandler.bind(this);


        this.saveBook =this.saveBook.bind(this);
        
    }

   saveBook=(e)=>{

        e.preventDefault();
         let Book= {bookName:this.state.BookName,author:this.state.Author,releaseDate:this.state.ReleaseDate,description:this.state.Description,price:this.state.Price,quantity:this.state.Quantity}
      console.log(Book);
         BookService.updateBook(Book).then(res=>{
            this.props.history.push('/Book-admin'); 
        });
    
       }
    
       changeBookNameHandler=(event)=>{
            this.setState({BookName: event.target.value});
       
    }

    changeAuthorHandler=(event)=>{
        this.setState({Author: event.target.value});
    }

    changeReleaseDateHandler=(event)=>{
      this.setState({ReleaseDate: event.target.value});
     
   }




   changeDescriptionHandler=(event)=>{
    this.setState({Description: event.target.value});
   
 }



 changePriceHandler=(event)=>{
  this.setState({Price: event.target.value});
 
}

changeQuantityHandler=(event)=>{
  this.setState({Quantity: event.target.value});
 
}

   cancel(){
    
     this.props.history.push('/Book-admin'); 
   }


 

    render() {
        return (
            <div >
                 <Header/>
               <div className="container" style={{margin:"50px"}}>
                   <div className="row">

                       <div className="card col-md-6 offset-md-3 offset-md-3" style={{ backgroundColor:"#212121",color:"#eee"}}>

                           <h2 className="text-center m-5">Add New Book</h2>

                           <div className="card-body">

                               <form >
                                   <div className="form-group gap-3 d-grid">
                                       <label htmlFor="BookName"> Book Name</label>
                                       <input type="text" placeholder="Book Name" name="BookName"
                                        className="form-control" onChange={this.changeBookNameHandler}/>
                                   </div>

                                   <div className="form-group gap-3 d-grid">
                                       <label htmlFor="Author"> Author</label>
                                       <input type="text" placeholder="Author" name="Author"
                                        className="form-control"  onChange={this.changeAuthorHandler}/>
                                   </div>

                                   <div className="form-group gap-3 d-grid">
                                       <label htmlFor="ReleaseDate"> ReleaseDate</label>
                                       <input type="date" placeholder="ReleaseDate" name="ReleaseDate"
                                        className="form-control"  onChange={this.changeReleaseDateHandler}/>
                                   </div>

                                   <div className="form-group gap-3 d-grid">
                                       <label htmlFor="Description"> Description</label>
                                       <input type="Description" placeholder="Description" name="Description"
                                        className="form-control"  onChange={this.changeDescriptionHandler}/>
                                   </div>


                                   <div className="form-group gap-3 d-grid">
                                       <label htmlFor="Price"> Price</label>
                                       <input type="Price" placeholder="Price" name="Price"
                                        className="form-control"  onChange={this.changePriceHandler}/>
                                   </div>


                                   <div className="form-group gap-3 d-grid">
                                       <label htmlFor="Quantity"> Quantity</label>
                                       <input type="number" placeholder="Quantity" name="Quantity"
                                        className="form-control"  onChange={this.changeQuantityHandler}/>
                                   </div>

                                   <button className="btn btn-danger float-end mt-3 " onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>cancel</button>
                                   <button className="btn btn-success float-end mt-3" onClick={this.saveBook}>Save</button>
                                   
                                   
                                  

                               </form>


                           </div>

                       </div>
                   </div>
               </div>
            </div>
        )
    }
}
