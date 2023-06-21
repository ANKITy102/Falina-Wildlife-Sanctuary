package com.webdproject.backend.users.authtoken;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import javax.crypto.spec.SecretKeySpec;
import java.security.Key;
import java.util.Date;

public class JwtUtil {

    private static final String SECRET_KEY = "2_91_a@#^kd283fd_$%@92913()1.khSec*292ret"; // Replace with your own  // secret key
    private static final long EXPIRATION_TIME = 86400000; // 1 day in milliseconds

    public static String generateToken(String userId) {
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + EXPIRATION_TIME);

        Key signingKey = new SecretKeySpec(SECRET_KEY.getBytes(), SignatureAlgorithm.HS512.getJcaName());

        return Jwts.builder()
                .setSubject(userId)
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(signingKey)
                .compact();
    }
}
