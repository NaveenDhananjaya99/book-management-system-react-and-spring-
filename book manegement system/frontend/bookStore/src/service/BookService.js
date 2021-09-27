import axios from 'axios'

const Book_API_BASE_URL="http://localhost:8080/api/v1/books";
const Book_API_BASE_URL_ADD="http://localhost:8080/api/v1/books/add-book";
const Book_API_BASE_URL_LOAD="http://localhost:8080/api/v1/books/getById";
const Book_API_BASE_URL_update="http://localhost:8080/api/v1/books/update-book";
 const Book_API_BASE_URL_DELETE="http://localhost:8080/api/v1/books/delete-book";
 const Book_API_BASE_URL_LOGIN="http://localhost:8080/api/v1/login";


 
class BookService {


    getLoginDetails(login){
        return axios.post(Book_API_BASE_URL_LOGIN,login);
    }

    getBook(){
        return axios.post(Book_API_BASE_URL);
    }

    createBook(book){
        return axios.post( Book_API_BASE_URL_ADD,book);
    }
      getDetailsUsingId(id){
        return axios.get(Book_API_BASE_URL_LOAD+'/'+id);
    }
    updateBook(book){
        return axios.put(Book_API_BASE_URL_update,book);
    }
    DeleteBook(id){
        return axios.delete(Book_API_BASE_URL_DELETE+'/'+id);
    }

}

export default new BookService()