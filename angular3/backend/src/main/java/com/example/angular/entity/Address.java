package com.example.angular.entity;


import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Address {
    @Id
    @GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
    private Integer id;
    private String city;
    private String street;
    private String postCode;

    public Address() {
    }

    public Address(Integer id, String city, String street, String postCode) {
        this.id = id;
        this.city = city;
        this.street = street;
        this.postCode = postCode;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getPostCode() {
        return postCode;
    }

    public void setPostCode(String postCode) {
        this.postCode = postCode;
    }
}