
import './App.css';
import './component.css';
import './7.1 Grid.css';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookComponent from './components/BookComponent';

import Header from './components/HeaderComponent';
import Footer from './components/Footer';
import BookHomeComponent from './components/BookHomeForAdmin';
import UpdateBookComponent from './components/UpdateBookComponent';
import AddBook from './components/AddBook';
import LoginComponent from './components/LoginComponent';






function App() {
  return (
    <div >
    <Router>
        
          
            
              
                 <div className="container">
                   <Switch>

                     <Route path="/"  exact component={LoginComponent}></Route>
                     <Route path="/user"  exact component={BookComponent}></Route>
                     <Route path="/book-admin" component={BookHomeComponent}></Route>
                     <Route path="/update/:id"   component={UpdateBookComponent}></Route>
                     <Route path="/add-book" component={AddBook}></Route>
                     <Route path="/login" component={LoginComponent}></Route>
                   {/*   <Route path="/employee" component={EmployeeComponent}></Route>
                     <Route path="/add-employee" component={CreateNewEmployeeComponent}></Route>
                      */}

                     
                    {/*  <EmployeeComponent /> */}
                   </Switch>
                
                 </div>
             <Footer/>
           
           
     </Router>
 </div>
  );
}

export default App;
