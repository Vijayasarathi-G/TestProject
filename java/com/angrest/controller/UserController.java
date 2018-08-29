package com.angrest.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.angrest.bean.User;
import com.angrest.repository.UserRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200",allowedHeaders="*")
public class UserController {

	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("/users")
	public List<User> allUsers(){
		return userRepository.findAll();
	}
	
	@GetMapping("/user/{id}")
	public Optional<User> oneUsers(@PathVariable Long id){
		return userRepository.findById(id);
	}
	
	@GetMapping("/delete/{id}")
	public void deleteUsers(@PathVariable Long id){
		
		userRepository.deleteById(id);
	}
	
	@PostMapping("/createuser")
	public User createUsers(@RequestBody User user){
		return userRepository.save(user);
	}
	
	@PutMapping("/updateuser")
	public User updateUsers(@RequestBody User user){
		return userRepository.save(user);
	}
	
}
