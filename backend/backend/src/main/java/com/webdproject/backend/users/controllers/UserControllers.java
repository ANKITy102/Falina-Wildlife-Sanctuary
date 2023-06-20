package com.webdproject.backend.users.controllers;

import java.util.Vector;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.webdproject.backend.users.apimodels.APIReturnModel;
import com.webdproject.backend.users.models.LoginModel;
import com.webdproject.backend.users.models.UserModel;
import com.webdproject.backend.users.services.UserService;

@RestController
@RequestMapping("/user")
public class UserControllers {
    @Autowired
    private UserService userService;
    private APIReturnModel apiReturnModel;
    private Vector<UserModel> userVec;

    @GetMapping("/test")
    public String giveMessage() {
        String s = "hello";
        return s;
    }

    @PostMapping("/signup")
    public ResponseEntity<APIReturnModel> createUser(@RequestBody UserModel userModel) {
        apiReturnModel = new APIReturnModel();
        userVec = new Vector<>();
        System.out.println("hello");
        try {
            UserModel user = this.userService.createUser(userModel);
            userVec.add(user);
            apiReturnModel.setData(userVec);
            apiReturnModel.setStatus("Success");
            apiReturnModel.setMessage("Your data");
            apiReturnModel.setCount(userVec.size());
        } catch (Exception e) {
            e.printStackTrace();
            apiReturnModel.setStatus("fail");
            apiReturnModel.setMessage(e.getMessage());
            apiReturnModel.setCount(0);
        }
        return ResponseEntity.ok(apiReturnModel);
    }

    @PostMapping("/login")
    public ResponseEntity<APIReturnModel> loginUser(@RequestBody LoginModel loginModel) {

        apiReturnModel = new APIReturnModel();
        userVec = new Vector<>();
        System.out.println("hello");
        try {
            UserModel user = this.userService.loginUser(loginModel);
            userVec.add(user);
            apiReturnModel.setData(userVec);
            apiReturnModel.setStatus("Success");
            apiReturnModel.setMessage("Your data");
            apiReturnModel.setCount(userVec.size());
        } catch (Exception e) {
            e.printStackTrace();
            apiReturnModel.setStatus("fail");
            apiReturnModel.setMessage(e.getMessage());
            apiReturnModel.setCount(0);
        }
        return ResponseEntity.ok(apiReturnModel);
    }
}
