let assert = require("assert");
//let _ = require("underscore")._;

class MembershipApplication {

  constructor(firstName, lastName, email, age, height, weight) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.height = height;
    this.weight = weight;
  }
  toString = () => {
    return console.log(this);
  };
  emailIsValid = () => {
        return this.email && this.email.length > 5 && this.email.indexOf("@") > -1 && this.email.indexOf(".") > -1 && (this.email.length - this.email.lastIndexOf(".") - 1) > 1;
  };

  heightIsValid = () => {
    return this.height && this.height > 60 && this.height < 75;
  };
  weightIsValid = () => {
    return this.weight && this.weight > 100 && this.weight < 300;
  };
  ageIsValid = () => {
    return this.age && this.age < 100 && this.age > 15;
  };
  firstNameIsValid = () => {
    return this.firstName && this.firstName.length > 1 && this.firstName.length < 20;
  };
  lastNameIsValid = () => {
    return this.lastName && this.lastName.length > 1 && this.lastName.length < 20;
  };
  isValid = () => {
    return this.emailIsValid() && this.heightIsValid() && this.weightIsValid() && this.ageIsValid() && this.firstNameIsValid() && this.lastNameIsValid();
  };
}

module.exports = MembershipApplication;