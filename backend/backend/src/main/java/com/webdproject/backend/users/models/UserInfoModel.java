package com.webdproject.backend.users.models;

import java.time.LocalDate;

public class UserInfoModel {
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private String token;
    private String profilePicture;
    private boolean admin;
    private LocalDate date;

    public boolean isAdmin() {
        return admin;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public void setAdmin(boolean admin) {
        this.admin = admin;
    }

    public UserInfoModel(String firstName, String lastName, String email, String profilePicture, boolean admin) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.profilePicture = profilePicture;
        this.admin = admin;
    }

    public UserInfoModel(String firstName, String lastName, String email, String phoneNumber, String token,
            String profilePic, boolean admin) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.token = token;
        this.profilePicture = profilePic;
        this.admin = admin;
    }

    public UserInfoModel(String firstName, String lastName, String email, LocalDate date, boolean admin) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.admin = admin;
        this.date = date;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getProfilePicture() {
        return profilePicture;
    }

    public void setProfilePicture(String profilePicture) {
        this.profilePicture = profilePicture;
    }

}
