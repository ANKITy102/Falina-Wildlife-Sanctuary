package com.webdproject.backend.users.services;

import java.util.List;

import com.webdproject.backend.users.exceptionHandlers.InvalidCredentialsException;
import com.webdproject.backend.users.models.ContactModel;
import com.webdproject.backend.users.models.EmailDto;

public interface ContactService {
    public boolean saveQuery(ContactModel contactModel) throws InvalidCredentialsException;

    public List<ContactModel> getAllQueries(String token) throws InvalidCredentialsException;

    public boolean deleteQuery(EmailDto email, ContactModel contactModel) throws InvalidCredentialsException;
}
