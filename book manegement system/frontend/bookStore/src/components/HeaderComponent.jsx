import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class Header extends Component {
    constructor(props){
        super(props)

        this.state={
           
           
          
        }

    

     

          
         
    }
    
 
   
    render() {
        return (
            <div style={{backgroundColor: "black",width:"101.3rem" ,marginLeft:"-7.5rem"}} >
                <header >

                    <nav className="navbar navbar-expand-md navbar-dark  p-3" style={{backgroundColor: "black"}}>
                        <div><h1 className="navbar-text hero-text me-5 ms-3 h1 ">Book Store</h1></div>
                        <div><h1 className="navbar-text h1 ms-5 ">Admin panel</h1></div>
                        <ul>
                           
                            <Link className={"navbar-brand  mt-n1 me-5 ms-3"  }    to={{pathname: '/book-admin'}}>Home</Link>
                            <Link  className={"navbar-brand  mt-n1 me-5 ms-3"  }to={{pathname: '/add-book'}}>Add Book</Link>
                          
                        </ul>

                    </nav>
                </header>
            </div>
        )
    }
}
