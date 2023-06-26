package com.webdproject.backend.users.models;

public class EmailDto {
    private String userEmail;

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }
    public EmailDto(){
        
    }
    public EmailDto(String userEmail) {
        this.userEmail = userEmail;
    }
    
}
