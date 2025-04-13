package com.backend.service;

import java.util.List;

import com.backend.exception.UserException;
import com.backend.modal.User;

public interface UserService {
	
	public User findUserById(Long userId) throws UserException;
	
	public User findUserProfileByJwt(String jwt) throws UserException;
	
	public List<User> findAllUsers();

}