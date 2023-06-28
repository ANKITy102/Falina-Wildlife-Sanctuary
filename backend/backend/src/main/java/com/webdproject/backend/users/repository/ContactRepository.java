package com.webdproject.backend.users.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.webdproject.backend.users.models.ContactModel;

public interface ContactRepository extends JpaRepository<ContactModel,Long> {
    ContactModel findById(long userId);
}
