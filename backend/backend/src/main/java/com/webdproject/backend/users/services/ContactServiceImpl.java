package com.webdproject.backend.users.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webdproject.backend.users.exceptionHandlers.InvalidCredentialsException;
import com.webdproject.backend.users.models.ContactModel;
import com.webdproject.backend.users.repository.ContactRepository;

@Service
public class ContactServiceImpl implements ContactService {

    @Autowired
    private ContactRepository contactRepository;

    public boolean saveQuery(ContactModel contactModel) {
        System.out.println(contactModel.getEmail());
        if (contactModel.getEmail() == null || contactModel.getEmail() == "" || contactModel.getName() == null
                || contactModel.getName() == "" || contactModel.getQuery() == null || contactModel.getQuery() == null) {
            throw new InvalidCredentialsException("Please fill all the fields.");
        }
        this.contactRepository.save(contactModel);
        return true;
    }
}
