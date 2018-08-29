package com.angrest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.angrest.bean.Todo;

public interface TodoRepository extends JpaRepository<Todo, Long>{
	

}
