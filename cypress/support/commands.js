// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {
  cy.get('input[name="email"]').type(email);
  cy.get('input[name="password"]').type(password);
  cy.get('button[type="submit"]').click();
});

// Save a user object (e.g. { firstName, email }) to localStorage
Cypress.Commands.add('saveUserToLocal', (user) => {
  if (!user) return cy.log('saveUserToLocal: no user provided');
  return cy
    .window()
    .then((win) => {
      win.localStorage.setItem('testUser', JSON.stringify(user));
    })
    .then(() => {
      // also persist to a fixture file so data survives between tests
      return cy.writeFile('cypress/fixtures/savedUser.json', user);
    });
});

// Retrieve the saved user object: try localStorage first, then fallback to savedUser.json
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
