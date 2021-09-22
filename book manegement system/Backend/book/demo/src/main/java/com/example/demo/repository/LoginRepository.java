package com.example.demo.repository;

import com.example.demo.model.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginRepository extends JpaRepository<Login,Integer> {

    @Query("select u from Login u where u.user_name=?1")
    Login chekUser(String username);


}
