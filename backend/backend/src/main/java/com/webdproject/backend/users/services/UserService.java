package com.webdproject.backend.users.services;


import java.util.List;

import com.webdproject.backend.users.exceptionHandlers.InvalidCredentialsException;
import com.webdproject.backend.users.models.LoginModel;
import com.webdproject.backend.users.models.UserInfoModel;
import com.webdproject.backend.users.models.UserModel;

public interface UserService {

    public UserInfoModel createUser(UserModel userModel) throws InvalidCredentialsException;

    public UserInfoModel loginUser(LoginModel loginModel) throws InvalidCredentialsException;

    public UserInfoModel getUser(String token) throws InvalidCredentialsException;

    public UserInfoModel googleLogin(String fname, String lname, String profilePicture, String email)
            throws InvalidCredentialsException;

    public UserInfoModel addUserAdmin(String email, String email2) throws InvalidCredentialsException;

    public List<UserInfoModel> getAllUser() throws InvalidCredentialsException;

}
