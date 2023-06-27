package com.webdproject.backend.users.services;

import java.security.Key;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webdproject.backend.users.exceptionHandlers.InvalidCredentialsException;
import com.webdproject.backend.users.models.ContactModel;
import com.webdproject.backend.users.models.EmailDto;
import com.webdproject.backend.users.models.UserModel;
import com.webdproject.backend.users.repository.ContactRepository;
import com.webdproject.backend.users.repository.UserRepository;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Service
public class ContactServiceImpl implements ContactService {
    private static final String SECRET_KEY = "2_91_a@#^kd283fd_$%@92913()1.khSec*292ret";
    @Autowired
    private ContactRepository contactRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public boolean saveQuery(ContactModel contactModel) {
        System.out.println(contactModel.getEmail());
        if (contactModel.getEmail() == null || contactModel.getEmail() == "" || contactModel.getName() == null
                || contactModel.getName() == "" || contactModel.getQuery() == null || contactModel.getQuery() == null) {
            throw new InvalidCredentialsException("Please fill all the fields.");
        }
        this.contactRepository.save(contactModel);
        return true;
    }

    @Override
    public List<ContactModel> getAllQueries(String token) {
        if (token == null) {
            throw new InvalidCredentialsException("Please Login");
        }
        System.out.println(token);
        String extractedToken = token;
        if (extractedToken.startsWith("Bearer ")) {
            extractedToken = extractedToken.substring(7);
        }

        // Verify and decode the token
        Key key = Keys.hmacShaKeyFor(SECRET_KEY.getBytes());
        System.out.println(key);
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(extractedToken)
                .getBody();

        // Retrieve the user ID from the claims
        String userId = claims.getSubject();
        System.out.println(userId);
        // Retrieve the user data based on the user ID
        UserModel user = this.userRepository.findByEmail(userId);
        System.out.println(user);
        if (user == null) {
            throw new InvalidCredentialsException("Something went wrong.");

        }
        if (!(user.isAdmin())) {
            throw new InvalidCredentialsException("Something went wrong.");
        }
        List<ContactModel> queries = this.contactRepository.findAll();
        System.out.println(queries);
        return queries;
    }

    @Override
    public boolean deleteQuery(EmailDto email, ContactModel contactModel) {
        UserModel user = this.userRepository.findByEmail(email.getUserEmail());
        if (user == null) {
            throw new InvalidCredentialsException("Something went wrong.");

        }
        if (!(user.isAdmin())) {
            throw new InvalidCredentialsException("Something went wrong.");
        }
        this.contactRepository.delete(contactModel);
        return true;
    }
}
