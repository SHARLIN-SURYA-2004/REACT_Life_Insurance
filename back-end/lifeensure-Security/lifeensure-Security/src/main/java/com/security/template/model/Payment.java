package com.security.template.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int id;
    private String name;
    private String email;
    private String paymentmethod;
    private String paymentAmount;

    public Payment()
    {
    }
    public Payment(int id, String name, String email, String paymentmethod, String paymentAmount) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.paymentmethod = paymentmethod;
        this.paymentAmount = paymentAmount;
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPaymentmethod() {
        return paymentmethod;
    }
    public void setPaymentmethod(String paymentmethod) {
        this.paymentmethod = paymentmethod;
    }
    public String getPaymentAmount() {
        return paymentAmount;
    }
    public void setPaymentAmount(String paymentAmount) {
        this.paymentAmount = paymentAmount;
    }
}
