package com.webdproject.backend.users.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webdproject.backend.users.exceptionHandlers.InvalidCredentialsException;
import com.webdproject.backend.users.models.LoginModel;
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

        if(userModel.getFirstName()==null || userModel.getLastName()==null || userModel.getPassword()==null || userModel.getEmail()==null || userModel.getPhoneNumber()==null){
            throw new InvalidCredentialsException("Please fill in all the fields");
        }
         if (userRepository.existsByEmail(userModel.getEmail())) {
            throw new InvalidCredentialsException("Email already exists");
        }

        // Check if the phone number already exists
        if (userRepository.existsByPhoneNumber(userModel.getPhoneNumber())) {
            throw new InvalidCredentialsException("Phone number already exists");
        }
        String hashedPassword = passwordEncoder.encode(userModel.getPassword());
        // System.out.println(hashedPassword);
        userModel.setPassword(hashedPassword);
        return this.userRepository.save(userModel);
    }

    @Override
    public UserModel loginUser(LoginModel loginModel) {

        UserModel user = userRepository.findByEmail(loginModel.getEmail());
        if (user != null && passwordEncoder.matches(loginModel.getPassword(), user.getPassword())) {
            // Password matches, user is authenticated
            return user;
        } else {
            // Invalid credentials
            throw new InvalidCredentialsException("Invalid email or password");
        }
    }
}
