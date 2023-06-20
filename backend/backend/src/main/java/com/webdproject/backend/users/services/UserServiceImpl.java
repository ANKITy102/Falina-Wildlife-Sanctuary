package com.webdproject.backend.users.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webdproject.backend.users.models.UserModel;
import com.webdproject.backend.users.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Override
    public UserModel createUser(UserModel userModel) {
        String hashedPassword = passwordEncoder.encode(userModel.getPassword());
        // System.out.println(hashedPassword);
        userModel.setPassword(hashedPassword);
        return this.userRepository.save(userModel);
    }
}
