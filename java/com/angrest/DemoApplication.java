package com.angrest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.angrest.bean.User;
import com.angrest.repository.UserRepository;

@SpringBootApplication(scanBasePackages="com.angrest")
@EnableJpaRepositories
public class DemoApplication implements CommandLineRunner{

	@Autowired
	private UserRepository userRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		userRepository.save(new User("Vijay", "Sarathi"));
		userRepository.save(new User("Vijay1", "Sarathi1"));
		userRepository.save(new User("Vijay2", "Sarathi2"));
		userRepository.save(new User("Vijay3", "Sarathi3"));
		
	}
}
