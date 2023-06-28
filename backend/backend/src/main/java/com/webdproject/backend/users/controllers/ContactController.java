package com.webdproject.backend.users.controllers;

import java.util.List;
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
import com.webdproject.backend.users.models.ContactModel;
import com.webdproject.backend.users.services.ContactService;

@CrossOrigin("*")
@RestController
@RequestMapping("/contact")
public class ContactController {

    @Autowired
    private ContactService contactService;
    private APIReturnModel apiReturnModel;
    private Vector<Boolean> contactVec;
    private Vector<List<ContactModel>> queryLists;

    @PostMapping("/")
    public ResponseEntity<APIReturnModel> saveQuery(@RequestBody ContactModel contactModel) {
        apiReturnModel = new APIReturnModel();
        contactVec = new Vector<>();
        try {
            boolean respon = this.contactService.saveQuery(contactModel);
            contactVec.add(respon);
            apiReturnModel.setData(contactVec);
            apiReturnModel.setStatus("Success");
            apiReturnModel.setMessage("Your data");
            apiReturnModel.setCount(contactVec.size());
        } catch (Exception e) {
            e.printStackTrace();
            apiReturnModel.setStatus("fail");
            apiReturnModel.setMessage(e.getMessage());
            apiReturnModel.setCount(0);
        }
        return ResponseEntity.ok(apiReturnModel);

    }

    @GetMapping("/getqueries")
    public ResponseEntity<APIReturnModel> getAllQueries(@RequestHeader String token) {
        List<ContactModel> queryList = null;
        apiReturnModel = new APIReturnModel();
        queryLists = new Vector<>();
        try {
            System.out.println("now in get qurei");
            queryList = this.contactService.getAllQueries(token);
            queryLists.add(queryList);
            apiReturnModel.setData(queryLists);
            apiReturnModel.setStatus("Success");
            apiReturnModel.setMessage("Your data");
            // apiReturnModel.setCount(contactVec.size());
        } catch (Exception e) {
            // TODO: handle exception
            e.printStackTrace();
            apiReturnModel.setStatus("fail");
            apiReturnModel.setMessage(e.getMessage());
            apiReturnModel.setCount(0);
        }
        return ResponseEntity.ok(apiReturnModel);

    }

}
