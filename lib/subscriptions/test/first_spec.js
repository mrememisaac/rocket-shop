const assert = require("assert");
const MembershipApplication = require("../models/membership_application");
describe("Membership application requirements", function(){
  let application;
  let message;
  before(function(){
    //arrange the data here
    application = new MembershipApplication(
      "Test",
      "User",
      "john.doe@happymen.com",
      30,
      66,
      101,
    );
    message = "Not valid";
  });
  describe("Application valid if ... ", function(){
    it("all tests passed", function(){
      assert(application.isValid(), message);
    });
    it("email is 4 or more characters and contains an @", function () {
      assert(application.emailIsValid(), message);
    });
    it("height is between 60 and 75 inches", function () {
      assert(application.heightIsValid(), message);
    });
    it("weight is between 100 and 300 pounds", function () {
      assert(application.weightIsValid(), message);
    });
    it("age is between 16 and 99 years inclusive ", function () {
      assert(application.ageIsValid(), message);
    });
    it("first name is greater than 1 character and less than 25 character", function () {
      assert(application.firstNameIsValid(), message);
    });
    it("last name is greater than 1 character and less than 25 character", function () {
      assert(application.lastNameIsValid(), message);
    });
  });  
});