package com.example.demo.repository;


import com.example.demo.model.Books;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends JpaRepository<Books,Integer> {

    @Query("select u from Books u where u.id = ?1")
    Books SearchByID(int id);
}
