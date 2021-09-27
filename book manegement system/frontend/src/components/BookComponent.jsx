import React, { Component } from 'react'
import BookService from '../service/BookService'
import HeaderUserComponent from './HeaderUser';

 class BookComponent extends Component {
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
    
      
    
  
  
    render() {
        return (
            <div>
              <HeaderUserComponent/>



                    <div className="row">
                   { this.state.book.map(
                                   book=>
                        <div className="col span-1-of-3"  key={book.id}>
                            <div className="card  package"style={{width: '18rem'}}>
                                <img src="https://dummyimage.com/300" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                 <h5 className="card-title">{book.bookName}</h5>
                                 <p className="card-text">{book.description}</p>
                           </div>
                                <div className="card-body">
                                    <ul>
                                        <li><i className="ion-ios-checkmark-empty icon-small"> </i>Price : {book.price} </li>
                                        <li><i className="ion-ios-checkmark-empty icon-small"> </i>release date :{book.releaseDate}
                                        </li>
                                        <li><i className="ion-ios-checkmark-empty icon-small"> </i>Price : {book.author} </li>
                                        
                                    </ul>
                                </div>
                                <div className="overview">
                                    <h3>Buy it now</h3>

                                    <div className="form-quntity">
                                        <form action="#" method="POST">
                                            <label htmlFor="quantity"style={{color: 'white'}}> Quantity</label>

                                            <div className="quntity-selector">
                                            <div className=""><input type="text" /></div>

                                            </div>
                                            <div ><input type="submit" name="3month" value="Buy" className="btn btn-success"/></div>

                                        </form>

                                    </div>
                                </div>

                            </div>
                        </div>


                   )} 


                    </div> 


                
            </div>
        )
    }
}

export default BookComponent;
