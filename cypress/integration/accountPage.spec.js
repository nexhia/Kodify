import axios from "axios";

describe("Account page", () => {
  beforeEach(() => {
    cy.visit("/account?userId=1");
  });

  it("has header of Account Page", () => {
    cy.get("h1").should("contain.text", "Account Page");
  });

  it("has a button labelled Back that takes user back to Home Page", () => {
    cy.get("a.btn.btn-primary").should("contain.text", "Back");
  });

  //   it("displays name", async () => {
  //     const response = await axios.get(
  //       "http://jsonplaceholder.typicode.com/users"
  //     );
  //     const users = response.data;

  //     cy.get("tbody")
  //       .children("tr")
  //       .each((el, index) => {
  //         const user = users[index];

  //         cy.wrap(el)
  //           .children("td")
  //           .should("contain", `${user.name}`);
  //       });
  //   });

  it("should have copyright for the current year should be displayed at the bottom", () => {
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
