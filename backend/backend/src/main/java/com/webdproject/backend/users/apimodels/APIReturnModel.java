package com.webdproject.backend.users.apimodels;

import java.util.Vector;

public class APIReturnModel {
    private String status = "Failure";
    private Vector<?> data;
    private String message = "Something went wrong";
    private int count = 0;

    public APIReturnModel(String status, String message, Vector<?> data, int count) {
        this.status = status;
        this.message = message;
        this.data = data;
        this.count = count;
    }

    public APIReturnModel() {
        super();
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Vector<?> getData() {
        return data;
    }

    public void setData(Vector<?> data) {
        this.data = data;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }
}
