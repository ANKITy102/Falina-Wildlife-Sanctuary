package com.webdproject.backend.users.services;

import java.security.Key;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webdproject.backend.users.authtoken.JwtUtil;
import com.webdproject.backend.users.exceptionHandlers.InvalidCredentialsException;
import com.webdproject.backend.users.models.LoginModel;
import com.webdproject.backend.users.models.UserInfoModel;
import com.webdproject.backend.users.models.UserModel;
import com.webdproject.backend.users.repository.UserRepository;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class UserServiceImpl implements UserService {
    private static final String SECRET_KEY = "2_91_a@#^kd283fd_$%@92913()1.khSec*292ret";

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Override
    public UserInfoModel createUser(UserModel userModel) {

        if (userModel.getFirstName() == null || userModel.getLastName() == null || userModel.getPassword() == null
                || userModel.getEmail() == null || userModel.getPhoneNumber() == null) {
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
        UserModel savedUser = this.userRepository.save(userModel);

        String token = JwtUtil.generateToken(savedUser.getEmail());

        // savedUser.setToken(token);
        UserInfoModel userInfo = new UserInfoModel(savedUser.getFirstName(), savedUser.getLastName(),
                savedUser.getEmail(), savedUser.getPhoneNumber(), token);
        return userInfo;

    }

    @Override
    public UserInfoModel loginUser(LoginModel loginModel) {

        UserModel savedUser = userRepository.findByEmail(loginModel.getEmail());
        if (savedUser != null && passwordEncoder.matches(loginModel.getPassword(), savedUser.getPassword())) {
            // Password matches, user is authenticated
            String token = JwtUtil.generateToken(savedUser.getEmail());
            UserInfoModel userInfo = new UserInfoModel(savedUser.getFirstName(), savedUser.getLastName(),
                    savedUser.getEmail(), savedUser.getPhoneNumber(), token);
            return userInfo;
        } else {
            // Invalid credentials
            throw new InvalidCredentialsException("Invalid email or password");
        }
    }

    @Override
    public UserInfoModel getUser(String token) {
        if (token == null) {
            throw new InvalidCredentialsException("Please Login");
        }
        String extractedToken = token;
        if (extractedToken.startsWith("Bearer ")) {
            extractedToken = extractedToken.substring(7);
        }

        // Verify and decode the token
        Key key = Keys.hmacShaKeyFor(SECRET_KEY.getBytes());
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(extractedToken)
                .getBody();

        // Retrieve the user ID from the claims
        String userId = claims.getSubject();

        // Retrieve the user data based on the user ID
        UserModel savedUser = userRepository.findByEmail(userId);
        if (savedUser == null) {
            throw new InvalidCredentialsException("User not found. Please login.");
        }
        String senToken = "";
        UserInfoModel userInfo = new UserInfoModel(savedUser.getFirstName(), savedUser.getLastName(),
                savedUser.getEmail(), savedUser.getPhoneNumber(), senToken);
        return userInfo;
    }

    @Override
    public UserInfoModel googleLogin(String fname, String lname, String email, String profilePicture) {

        UserModel userModel = new UserModel(fname, lname, email, profilePicture);
        UserModel isExist = this.userRepository.findByEmail(email);
        if (isExist == null || isExist.getFirstName() == null || isExist.getLastName() == null
                || isExist.getProfilePicture() == null) {
            this.userRepository.save(userModel);
        }
        UserInfoModel userInfo = new UserInfoModel(fname, lname, email, profilePicture);
        return userInfo;
    }
}
