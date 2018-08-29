package com.angrest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.angrest.bean.User;

public interface UserRepository extends JpaRepository<User, Long>{
	

}
