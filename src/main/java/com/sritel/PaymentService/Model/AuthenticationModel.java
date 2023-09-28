package com.sritel.PaymentService.Model;

public class AuthenticationModel {
    //Email and Password
    private String Email;
    private String password;

    //getters and setters
    public String getEmail(){ return Email; }

    public void setEmail(String Email){ this.Email = Email; }

    public String getPassword(){ return password; }

    public void setPassword(String password){ this.password = password; }
}
