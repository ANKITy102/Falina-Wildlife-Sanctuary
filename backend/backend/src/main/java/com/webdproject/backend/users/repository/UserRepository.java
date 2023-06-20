package com.webdproject.backend.users.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.webdproject.backend.users.models.UserModel;

public interface UserRepository extends JpaRepository<UserModel, Long> {
    UserModel findById(long userId);

    UserModel findByEmail(String email);

    boolean existsByPhoneNumber(String phoneNumber);

    boolean existsByEmail(String email);
}
