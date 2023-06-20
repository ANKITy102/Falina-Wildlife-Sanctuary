package com.webdproject.backend.users.services;

import com.webdproject.backend.users.exceptionHandlers.InvalidCredentialsException;
import com.webdproject.backend.users.models.LoginModel;
import com.webdproject.backend.users.models.UserModel;

public interface UserService {

    public UserModel createUser(UserModel userModel) throws InvalidCredentialsException;

    public UserModel loginUser(LoginModel loginModel) throws InvalidCredentialsException;

}
