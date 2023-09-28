package com.sritel.sritelpayment.Model;

public class RegisterModel {
    //Email and Password
    private String Email;
    private String password;
    private String firstName;
    private String lastName;
    private String contactNumber;

    //getters and setters
    public String getEmail(){ return Email; }

    public void setEmail(String Email){ this.Email = Email; }

    public String getPassword(){ return password; }

    public void setPassword(String password){ this.password = password; }

    public String getFirstName(){ return firstName; }

    public void setFirstName(String firstName){ this.firstName = firstName; }

    public String getLastName(){ return lastName; }

    public void setLastName(String lastName){ this.lastName = lastName; }

    public String getContactNumber(){ return contactNumber; }

    public void setContactNumber(String contactNumber){ this.contactNumber = contactNumber; }
}
