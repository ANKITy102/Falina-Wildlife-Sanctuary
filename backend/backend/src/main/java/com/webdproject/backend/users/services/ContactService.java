package com.webdproject.backend.users.services;

import com.webdproject.backend.users.exceptionHandlers.InvalidCredentialsException;
import com.webdproject.backend.users.models.ContactModel;

public interface ContactService {
    public boolean saveQuery(ContactModel contactModel) throws InvalidCredentialsException;

}
