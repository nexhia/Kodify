import axios from "axios";

describe("The home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should have the title Home Page", () => {
    cy.get("h1").should("contain.text", "Home Page");
  });

  it("should display a welcome message ", () => {
    cy.get("body").should("have.text", "Welcome");
  });

  it("should display the users name and email address", async () => {
    const response = await axios.get(
      "http://jsonplaceholder.typicode.com/users"
    );
    const users = response.data;

    cy.get("tbody")
      .children("tr")
      .each((el, index, list) => {
        const user = users[index];

        cy.wrap(el)
          .children("td")
          .should("contain", user.name);

        cy.wrap(el)
          .children("td")
          .should("contain", user.email);
      });
  });

  it("should link to the account page for that specific user", async () => {
    const response = await axios.get(
      "http://jsonplaceholder.typicode.com/users"
    );
    const users = response.data;

    cy.get("tbody")
      .children("tr")
      .each((el, index, list) => {
        const user = users[index];

        cy.wrap(el)
          .children("td>a")
          .should("have.attr", "href", `/account?userId=${user.id}`);
      });
  });

  it("email should be a mailto link", () => {
    cy.contains("tbody>tr>td", "@").should("have.attr", "href");
  });

  it("should have copyright for the current year should be displayed at the bottom", () => {
    const currentYear = Cypress.moment().format("YYYY");
    cy.contains("body", "© " + currentYear);
  });
});

//1. Page 1 should be the home page
//    1. The home page should have the title "Home Page" √
//    2. The home page should display a welcome message √
//    3. The home page should display a list of users from the users service
//        1. Each user row should display the user's `name` and `email` address √
//            1. The name should link to the account page for that specific user √
//            2. The email should be a mailto link √
// 3. A copyright for the current year should be displayed at the bottom of all pages
