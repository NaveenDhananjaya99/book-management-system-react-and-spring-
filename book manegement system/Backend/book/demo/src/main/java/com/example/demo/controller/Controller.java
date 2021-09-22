package com.example.demo.controller;


import com.example.demo.model.Books;
import com.example.demo.model.Login;
import com.example.demo.model.User;
import com.example.demo.repository.BookRepository;
import com.example.demo.repository.LoginRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.FileNotFoundException;
import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "/api/v1/")
public class Controller {



   @Autowired
     UserRepository userRepository;

    @Autowired
    BookRepository bookRepository;

    @Autowired
     LoginRepository loginRepository;



////////////////user controller/////////////////////////



    @GetMapping(path = "/user")
    public List<User>getAllUsers(){
        return userRepository.findAll();
    }

    @PostMapping("/user/add-user")
    public User newUser(@RequestBody User user){

        return userRepository.save(user);
    }



    @DeleteMapping(path = "/user/delete-user/{id}")
    public void deleteUSer(@PathVariable Integer id){
        userRepository.deleteById(id);
    }

    @GetMapping(path = "/user/getById/{id}")
    User FindUSerId(@PathVariable int id){
        return userRepository.SearchByID(id);
    }



////////////////////////////books controller////////////////////////////////////////



    @PostMapping(path = "/books")
    public List<Books>getAllBooks(){
        return bookRepository.findAll();
    }

    @PutMapping("/books/add-book")
    public Books newBook(@RequestBody Books book){

        return bookRepository.save(book);
    }

    @GetMapping(path = "/books/getById/{id}")
  Books FindUsingId(@PathVariable int id){
        return bookRepository.SearchByID(id);
    }

    @PutMapping(path = "/books/update-book")
   public Books updateBooks(@RequestBody Books book){
        return bookRepository.save(book);
    }

    @DeleteMapping(path = "/books/delete-book/{id}")
    public void deleteBook(@PathVariable Integer id){
          bookRepository.deleteById(id);
    }




    //////////////////////login///////////////////////////////////




    @PostMapping(path = "/login")
    String getLoginDetails(@RequestBody Login log) {
        try {
            Login log1 = loginRepository.chekUser(log.getUser_name());
            if (log.getUser_name().equals(log1.getUser_name())) {


                if (log.getPassword().equals(log1.getPassword())) {
                    return ("Login complete" + " " + log1.getUser_name());
                } else {
                    return "Login failed";
                }
            } else {
                System.out.println("Login failed" + " " + log1.getUser_name());
                return ("Login failed");
            }

        }catch (NullPointerException nullPointerException){

             return ("Login failed");
        }

    }


}

