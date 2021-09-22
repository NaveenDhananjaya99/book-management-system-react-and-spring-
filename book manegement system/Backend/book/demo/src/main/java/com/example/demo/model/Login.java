package com.example.demo.model;


import javax.persistence.*;

@Entity
@Table(name = "login_details")
public class Login {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    @Column(name = "user_name")
    private String user_name;

    @Column(name = "password")
    private  String password;


    public Login() {
    }

    public Login(int id, String user_name, String password) {
        this.id = id;
        this.user_name = user_name;
        this.password = password;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
