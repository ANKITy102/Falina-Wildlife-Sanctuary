package com.webdproject.backend.users.services;

import java.security.Key;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webdproject.backend.users.exceptionHandlers.InvalidCredentialsException;
// import com.webdproject.backend.users.models.EmailDto;
import com.webdproject.backend.users.models.PackageModel;
import com.webdproject.backend.users.models.UserModel;
import com.webdproject.backend.users.repository.PackageRepository;
import com.webdproject.backend.users.repository.UserRepository;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Service
public class PackageServiceImpl implements PackageService {
    private static final String SECRET_KEY = "2_91_a@#^kd283fd_$%@92913()1.khSec*292ret";

    @Autowired
    private PackageRepository packageRepo;

    @Autowired
    private UserRepository userRepository;

    @Override
    public PackageModel bookTicket(PackageModel packageInfo, String token) {
        // TODO Auto-generated method stub
        if (token == null) {
            throw new InvalidCredentialsException("Please Login");
        }
        String extractedToken = token;
        if (extractedToken.startsWith("Bearer ")) {
            extractedToken = extractedToken.substring(7);
        }
        System.out.println(extractedToken);
        // Verify and decode the token
        Key key = Keys.hmacShaKeyFor(SECRET_KEY.getBytes());
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(extractedToken)
                .getBody();

        // Retrieve the user ID from the claims
        String userId = claims.getSubject();
        System.out.println(userId);
        // Retrieve the user data based on the user ID
        UserModel savedUser = userRepository.findByEmail(userId);
        if (savedUser == null) {
            throw new InvalidCredentialsException("Please login.");
        }

        if (packageInfo.getFirstName() == null || packageInfo.getLastName() == null || packageInfo.getEmail() == null
                || packageInfo.getPhoneNumber() == null || packageInfo.getPackage_tour() == null
                || packageInfo.getAdults() == null || packageInfo.getChilds() == null
                || packageInfo.getStart_date() == null || packageInfo.getEnd_date() == null
                || packageInfo.getNo_of_days() == null || packageInfo.getNo_of_rooms() == null
                || packageInfo.getFare() == null) {
            throw new InvalidCredentialsException("Please fill all the fields.");
        }

        savedUser.setBookingTickets(packageInfo);
        packageInfo.setUser(savedUser);
        PackageModel savedPackage = this.packageRepo.save(packageInfo);
        return savedPackage;

    }

    @Override
    public List<PackageModel> getUserTicket(String token) {
        // TODO Auto-generated method stub
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
            throw new InvalidCredentialsException(" May be you are not logged in.");
        }
        List<PackageModel> getTickets = savedUser.getBookingTickets();
        return getTickets;

    }
    public List<PackageModel> getAllTickets(String token){
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
         UserModel savedUser = userRepository.findByEmail(userId);
        if (savedUser == null) {
            throw new InvalidCredentialsException(" May be you are not logged in.");
        }
        if(!savedUser.isAdmin()){
            throw new InvalidCredentialsException("Not allowed.");
        }
        List<PackageModel> allTickets = packageRepo.findAll();
        return allTickets;
    }
}


