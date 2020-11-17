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
    it("email is 6 or more characters and contains an @", function () {
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
  describe("Application invalid if ...", function(){
    it("email does not contain @", function(){
      const application = MembershipApplication.objectConstructor({
        email: "abcde.co"
      });
      assert(!application.emailIsValid());
    });
    it("email is less than 6 characters", function () {
      const application = MembershipApplication.objectConstructor({
        email: "d@d.c"
      })
      assert(!application.emailIsValid(), message);
    });
    it("email extension is less than 2 characters  ", function () {
      const application = MembershipApplication.objectConstructor({
        email: "ab@cd.e"
      })
      assert(!application.emailIsValid(), message)
    });
    it("email has no extension  ", function () {
      const application = MembershipApplication.objectConstructor({
        email: "ab@cdef"
      });
      assert(!application.emailIsValid(), message);
    });
    it("height is less than 60", function () {
      const application = MembershipApplication.objectConstructor({
        height: 59
      });
      assert(!application.heightIsValid(), message);
    });
    it("height is greater than 75", function () {
      const application = MembershipApplication.objectConstructor({
        height: 76
      });
      assert(!application.heightIsValid(), message);
    });
    it("weight is less than 100 pounds", function () {
      const application = MembershipApplication.objectConstructor({
        weight: 99
      });
      assert(!application.weightIsValid(), message);
    });
    it("weight is greater than 300 pounds", function () {
      const application = MembershipApplication.objectConstructor({
        height: 301
      });
      assert(!application.weightIsValid(), message);
    });
    it("age is less than 16", function () {
      const application = MembershipApplication.objectConstructor({
        age: 15
      });
      assert(!application.ageIsValid(), message);
    });
    it("age is greater than 99", function () {
      const application = MembershipApplication.objectConstructor({
        age: 100
      });
      assert(!application.ageIsValid(), message);
    });
    it("first name is less than 1 character ", function () {
      const application = MembershipApplication.objectConstructor({
        firstName: ""
      });
      assert(!application.ageIsValid(), message);
    });
    it("first name greater than 25 characters ", function () {
      const application = MembershipApplication.objectConstructor({
        firstName: "abcdefghijklmnopqurstuvwxyz"
      });
      assert(!application.ageIsValid(), message);
    });
    it("last name is less than 1 character", function () {
      const application = MembershipApplication.objectConstructor({
        lastName: ""
      });
      assert(!application.ageIsValid(), message);
    });
    it("last name is greater than 25 characters ", function () {
      const application = MembershipApplication.objectConstructor({
        lastName: "abcdefghijklmnopqurstuvwxyz"
      });
      assert(!application.ageIsValid(), message);
    });
  })
});