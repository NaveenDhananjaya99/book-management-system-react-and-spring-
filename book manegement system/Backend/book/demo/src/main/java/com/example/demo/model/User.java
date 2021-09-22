package com.example.demo.model;

import javax.persistence.*;

@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "telephone")
    private String telephoneNo;

    @Column(name = "cart_details")
    private String cart;

  public User() {
  }

  public User(int id, String name, String email, String password, String telephoneNo, String cart) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.telephoneNo = telephoneNo;
    this.cart = cart;
  }

  public User(String name, String email, String password, String telephoneNo, String cart) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.telephoneNo = telephoneNo;
    this.cart = cart;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getTelephoneNo() {
    return telephoneNo;
  }

  public void setTelephoneNo(String telephoneNo) {
    this.telephoneNo = telephoneNo;
  }

  public String getCart() {
    return cart;
  }

  public void setCart(String cart) {
    this.cart = cart;
  }
}
