package com.webdproject.backend.users.controllers;

import java.util.List;
import java.util.Vector;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.protobuf.Api;
import com.webdproject.backend.users.apimodels.APIReturnModel;
import com.webdproject.backend.users.models.EmailDto;
import com.webdproject.backend.users.models.PackageModel;
import com.webdproject.backend.users.models.UserInfoModel;
import com.webdproject.backend.users.services.PackageServiceImpl;

@CrossOrigin("*")
@RestController
@RequestMapping("/package")
public class PackageController {

    @Autowired
    private PackageServiceImpl packageService;
    private PackageModel packageModel;
    private APIReturnModel apiReturnModel;
    private Vector<PackageModel> packageVec;
    private Vector<List<PackageModel>> ticketList;

    @GetMapping("/")
    public String testFunc() {
        return "hi working";
    }

    @PostMapping("/")
    public ResponseEntity<APIReturnModel> savedTicket(@RequestBody PackageModel packageInfo) {
        apiReturnModel = new APIReturnModel();
        packageVec = new Vector<>();
        try {
            PackageModel savedTicket = this.packageService.bookTicket(packageInfo);
            packageVec.add(savedTicket);
            apiReturnModel.setData(packageVec);
            apiReturnModel.setStatus("Success");
            apiReturnModel.setMessage("Your data");
            apiReturnModel.setCount(packageVec.size());
        } catch (Exception e) {
            e.printStackTrace();
            apiReturnModel.setStatus("fail");
            apiReturnModel.setMessage(e.getMessage());
            apiReturnModel.setCount(0);
        }
        return ResponseEntity.ok(apiReturnModel);
    }

    @GetMapping("/bookedtickets")
    public ResponseEntity<APIReturnModel> userTicket(@RequestBody EmailDto userEmail) {
        apiReturnModel = new APIReturnModel();
        ticketList = new Vector<>();
        try {
            List<PackageModel> savedTicket = this.packageService.getUserTicket(userEmail);
            ticketList.add(savedTicket);
            apiReturnModel.setData(packageVec);
            apiReturnModel.setStatus("Success");
            apiReturnModel.setMessage("Your data");
            apiReturnModel.setCount(packageVec.size());
        } catch (Exception e) {
            e.printStackTrace();
            apiReturnModel.setStatus("fail");
            apiReturnModel.setMessage(e.getMessage());
            apiReturnModel.setCount(0);
        }
        return ResponseEntity.ok(apiReturnModel);
    }
}
