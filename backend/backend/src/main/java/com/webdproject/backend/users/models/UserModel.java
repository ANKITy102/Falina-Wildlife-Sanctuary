package com.webdproject.backend.users.models;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "Users")
public class UserModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long userId;

    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String lastName;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = true)
    private String password;

    @Column(nullable = true)
    private String phoneNumber;

    @Column(nullable = true)
    private String profilePicture;

    @Column(nullable = false, columnDefinition = "boolean default false")
    private boolean admin;

    @Column(nullable = false)
    private LocalDate creationDate;

    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
    @JsonIgnore  
    private List<PackageModel> bookingTickets;

    public UserModel() {
        this.creationDate = LocalDate.now();
        this.bookingTickets = new ArrayList<>();
    }

    public UserModel(String firstName, String lastName, String email, String profilePicture) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.profilePicture = profilePicture;
    }

    public UserModel(String firstName, String lastName, String email, String password, String phoneNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
    }

    public boolean isAdmin() {
        return admin;
    }

    public void setCreationDate(LocalDate creationDate) {
        this.creationDate = creationDate;
    }

    public List<PackageModel> getBookingTickets() {
        return bookingTickets;
    }

    public void setBookingTickets(PackageModel bookingTickets) {
        this.bookingTickets.add(bookingTickets) ;
    }

    public void setAdmin(boolean admin) {
        this.admin = admin;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public LocalDate getCreationDate() {
        return creationDate;
    }

    public void setCreationDate() {
        if (this.creationDate == null)
            this.creationDate = LocalDate.now();
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getProfilePicture() {
        return profilePicture;
    }

    public void setProfilePicture(String profilePicture) {
        this.profilePicture = profilePicture;
    }

}
