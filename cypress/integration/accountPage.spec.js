import axios from "axios";

describe("Account page", () => {
  xit("has header of Account Page", () => {
    cy.visit("/account?userId=1");
    cy.get("h1").should("contain.text", "Account Page");
  });

  xit("has a button labelled Back that takes user back to Home Page", () => {
    cy.visit("/account?userId=1");
    cy.get("a.btn.btn-primary").should("contain.text", "Back");
  });

  it("displays users name", () => {
    var users = require("../fixtures/users.json");

    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      cy.visit(`/account?userId=${user.id}`);
      cy.get("tr").should("contain", user.name);
    }
  });

  it("displays email which is a mailto link", () => {
    var users = require("../fixtures/users.json");

    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      cy.visit(`/account?userId=${user.id}`);
      cy.get("tr")
        .contains(user.email)
        .should("have.attr", "href", `mailto:${user.email}`);
    }
  });

  it("displays users phone", () => {
    var users = require("../fixtures/users.json");

    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      cy.visit(`/account?userId=${user.id}`);
      cy.get("tr").should("contain", user.phone);
    }
  });

  it("displays users website", () => {
    var users = require("../fixtures/users.json");

    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      cy.visit(`/account?userId=${user.id}`);
      cy.get("tr").should("contain", user.website);
    }
  });

  it("displays link to google maps with their location", () => {
    var users = require("../fixtures/users.json");

    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      cy.visit(`/account?userId=${user.id}`);
      cy.get("tr").should("have.attr", "href", "www.google.com/maps");
    }
  });

  xit("should have copyright for the current year should be displayed at the bottom", () => {
    cy.visit("/account?userId=1");
    const currentYear = Cypress.moment().format("YYYY");
    cy.contains("body", "© " + currentYear);
  });
});

// 2. Page 2 should be the account page
//     1. The account page should have the title "Account Page" √
//     2. The account page should the following user information
//         1. Name
//         2. Email (Should be a mailto link)
//         3. Phone
//         4. Website (Should be a link to the site)
//         5. A link to google maps with their location
//     3. There should be a button labeled "Back" which takes the user back to the home page √
// 3. A copyright for the current year should be displayed at the bottom of all pages √
