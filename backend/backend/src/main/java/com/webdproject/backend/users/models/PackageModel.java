package com.webdproject.backend.users.models;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "bookings")
public class PackageModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long tickedId;

    @Column(nullable = false)
    private String firstName;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userId")
    @JsonIgnore
    private UserModel user;

    @Column(nullable = false)
    private String lastName;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String phoneNumber;

    @Column(nullable = false)
    private String package_tour;

    @Column(nullable = false)
    private String adults;

    @Column(nullable = false)
    private String childs;

    @Column(nullable = false)
    private String start_date;

    @Column(nullable = false)
    private String end_date;

    @Column(nullable = false)
    private String no_of_rooms;

    @Column(nullable = false)
    private String no_of_days;

    public PackageModel() {

        this.creationDate = LocalDate.now();
    }

    public PackageModel(long tickedId, String firstName, String lastName, String email, String phoneNumber,
            String package_tour, String adults, String childs, String start_date, String end_date, String no_of_rooms,
            String no_of_days, String fare) {
        this.tickedId = tickedId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.package_tour = package_tour;
        this.adults = adults;
        this.childs = childs;
        this.start_date = start_date;
        this.end_date = end_date;
        this.no_of_rooms = no_of_rooms;
        this.no_of_days = no_of_days;
        this.fare = fare;

    }

    public long getTickedId() {
        return tickedId;
    }

    public void setTickedId(long tickedId) {
        this.tickedId = tickedId;
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

    public String getPackage_tour() {
        return package_tour;
    }

    public void setPackage_tour(String package_tour) {
        this.package_tour = package_tour;
    }

    public String getAdults() {
        return adults;
    }

    public void setAdults(String adults) {
        this.adults = adults;
    }

    public String getChilds() {
        return childs;
    }

    public void setChilds(String childs) {
        this.childs = childs;
    }

    public String getStart_date() {
        return start_date;
    }

    public void setStart_date(String start_date) {
        this.start_date = start_date;
    }

    public String getEnd_date() {
        return end_date;
    }

    public void setEnd_date(String end_date) {
        this.end_date = end_date;
    }

    public String getNo_of_rooms() {
        return no_of_rooms;
    }

    public void setNo_of_rooms(String no_of_rooms) {
        this.no_of_rooms = no_of_rooms;
    }

    public String getNo_of_days() {
        return no_of_days;
    }

    public void setNo_of_days(String no_of_days) {
        this.no_of_days = no_of_days;
    }

    public LocalDate getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDate creationDate) {
        this.creationDate = creationDate;
    }

    public String getFare() {
        return fare;
    }

    public void setFare(String fare) {
        this.fare = fare;
    }

    @Column(nullable = false)
    private LocalDate creationDate;

    @Column(nullable = false)
    private String fare;

    public UserModel getUser() {
        return user;
    }

    public void setUser(UserModel user) {
        this.user = user;
    }

}
