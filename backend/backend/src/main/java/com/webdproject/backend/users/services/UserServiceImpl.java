package com.webdproject.backend.users.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webdproject.backend.users.models.UserModel;
import com.webdproject.backend.users.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;

    @Override
     public UserModel createUser(UserModel userModel) {
        return this.userRepository.save(userModel);
    }
}
