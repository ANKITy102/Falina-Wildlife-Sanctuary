package com.webdproject.backend.users.controllers;

import java.util.Vector;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.webdproject.backend.users.apimodels.APIReturnModel;
import com.webdproject.backend.users.models.EmailDto;
import com.webdproject.backend.users.models.LoginModel;
import com.webdproject.backend.users.models.MyVariables;
import com.webdproject.backend.users.models.UserInfoModel;
import com.webdproject.backend.users.models.UserModel;
import com.webdproject.backend.users.services.UserService;
import com.google.api.client.http.javanet.NetHttpTransport;
// import io.jsonwebtoken.lang.Collections;

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken.Payload;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.gson.GsonFactory;
import java.util.Collections;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/user")
public class UserControllers {

    @Autowired
    private UserService userService;
    private APIReturnModel apiReturnModel;
    private Vector<UserInfoModel> userVec;

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
            UserInfoModel user = this.userService.createUser(userModel);
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
            UserInfoModel user = this.userService.loginUser(loginModel);
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

    @GetMapping("/getuser")
    public ResponseEntity<APIReturnModel> getUserInfo(@RequestHeader("token") String token) {

        apiReturnModel = new APIReturnModel();
        userVec = new Vector<>();
        try {
            UserInfoModel user = this.userService.getUser(token);
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

    @PostMapping("/addadmin")
    public ResponseEntity<APIReturnModel> addAdmin(@RequestHeader String idTokenString,
            @RequestBody EmailDto userEmail) {

        apiReturnModel = new APIReturnModel();
        userVec = new Vector<>();
        MyVariables variables = new MyVariables();
        try {

            String CLIENT_ID = variables.getClient_id();
            List<String> audience = Collections.singletonList(CLIENT_ID);
            NetHttpTransport transport = new NetHttpTransport();
            JsonFactory jsonFactory = new GsonFactory();

            GoogleIdTokenVerifier verifier = new GoogleIdTokenVerifier.Builder(transport, jsonFactory)
                    .setAudience(audience)
                    .build();
            GoogleIdToken idToken = verifier.verify(idTokenString);

            Payload payload = idToken.getPayload();

            String email = payload.getEmail();
            String email2 = userEmail.getUserEmail();
            UserInfoModel user = this.userService.addUserAdmin(email, email2);
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

    @GetMapping("/google-login")
    public ResponseEntity<APIReturnModel> handleGoogleLogin(@RequestHeader String idTokenString) {
        apiReturnModel = new APIReturnModel();
        userVec = new Vector<>();
        MyVariables variables = new MyVariables();
        try {
            String CLIENT_ID = variables.getClient_id();
            System.out.println(CLIENT_ID);
            List<String> audience = Collections.singletonList(CLIENT_ID);
            NetHttpTransport transport = new NetHttpTransport();
            JsonFactory jsonFactory = new GsonFactory();

            GoogleIdTokenVerifier verifier = new GoogleIdTokenVerifier.Builder(transport, jsonFactory)
                    .setAudience(audience)
                    .build();
            GoogleIdToken idToken = verifier.verify(idTokenString);

            Payload payload = idToken.getPayload();

            String email = payload.getEmail();
            String fname = (String) payload.get("given_name");
            String lname = (String) payload.get("family_name");
            String pictureUrl = (String) payload.get("picture");
            UserInfoModel user = this.userService.googleLogin(fname, lname, email, pictureUrl);
            userVec.add(user);
            apiReturnModel.setData(userVec);
            apiReturnModel.setStatus("Success");
            apiReturnModel.setMessage("Your data");
            apiReturnModel.setCount(userVec.size());

        } catch (Exception e) {
            // Error occurred during token verification
            // Handle the error appropriately
            e.printStackTrace();
            apiReturnModel.setStatus("fail");
            apiReturnModel.setMessage(e.getMessage());
            apiReturnModel.setCount(0);
        }
        return ResponseEntity.ok(apiReturnModel);
    }

    @GetMapping("/getallusers")
    public ResponseEntity<List<UserInfoModel>> getallUser() {
        apiReturnModel = new APIReturnModel();
        userVec = new Vector<>();
        List<UserInfoModel> userList = null;
        try {
            userList = this.userService.getAllUser();
        } catch (Exception e) {
            ResponseEntity.internalServerError();
        }
        return ResponseEntity.ok(userList);
    }
}
