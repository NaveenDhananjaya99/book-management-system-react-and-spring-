package com.example.demo.model;


import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "books")
public class Books {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "book_name")
    private String bookName;

    @Column(name = "author")
    private String author;


    @Column(name = "releaseDate")
    private Date releaseDate;

    @Column(name = "description")
    private String description;

    @Column(name = "price")
    private String price;

    @Column(name = "quantity")
    private String quantity;

    public Books() {
    }

    public Books(int id, String bookName, String author, Date releaseDate, String description, String price, String quantity) {
        this.id = id;
        this.bookName = bookName;
        this.author = author;
        this.releaseDate = releaseDate;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
    }

    public Books(String bookName, String author, Date releaseDate, String description, String price, String quantity) {
        this.bookName = bookName;
        this.author = author;
        this.releaseDate = releaseDate;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public Date getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(Date releaseDate) {
        this.releaseDate = releaseDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }
}
