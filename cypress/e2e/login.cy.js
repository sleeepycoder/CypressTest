import { user } from '../fixtures/userData.js';
import LoginPage from '../pages/LoginPage.js';
describe('Register User', () => {
  before(() => {
    cy.intercept('GET', 'https://automationexercise.com/api/getUserDetailByEmail').as(
      'getUserDetailByEmail'
    );
  });
  beforeEach(() => {
    cy.visit('/'); // Replace with your registration page URL
  });

  it('should register a new user and preserve their data', () => {
    cy.get("a[href='/login']").should('be.visible').click();
    LoginPage.registerUser(user.firstName, user.email);
    cy.contains('Enter Account Information', { timeout: 20000 }).should('be.visible');
    LoginPage.SignUpDetails(user.password);
    cy.get('[data-qa="account-created"]')
      .should('be.visible')
      .should('contain', 'Account Created!');
    cy.get('[data-qa="continue-button"]').click();
    // save user to localStorage and to fixture for future tests
    cy.saveUserToLocal({ firstName: user.firstName, email: user.email, password: user.password });
    cy.get('.shop-menu').find('a').contains('Logout').click();
  });

  it('should login with the saved user data', () => {
    cy.get("a[href='/login']").should('be.visible').click();
    LoginPage.login();
    cy.get('.shop-menu').find('a').contains('Logout').should('be.visible');
  });

  it('should fail to login with invalid credentials', () => {
    cy.get("a[href='/login']").should('be.visible').click();
    LoginPage.invalidLogin('invalid@example.com', 'wrongpassword');
    cy.contains('Your email or password is incorrect!', { timeout: 20000 }).should('be.visible');
  });
});
