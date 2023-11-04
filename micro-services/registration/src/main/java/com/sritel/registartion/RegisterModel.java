package com.sritel.registartion;

public class RegisterModel {

    //First Name Last Name
    private String firstName;

    private String lastName;

    //Email and Password
    private String email;
    private String password;

    private String contactNumber;




    //getters and setters

    public String getFirstName(){ return firstName; }

    public void setFirstName(String firstName){ this.firstName = firstName; }

    public String getLastName(){ return lastName; }

    public void setLastName(String lastName){ this.lastName = lastName; }

    public String getContactNumber(){ return contactNumber; }

    public void setContactNumber(String contactNumber){ this.contactNumber = contactNumber; }

    public String getEmail(){ return email; }

    public void setEmail(String Email){ this.email = email; }

    public String getPassword(){ return password; }

    public void setPassword(String password){ this.password = password; }
}
