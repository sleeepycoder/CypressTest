import {
    user
} from '../fixtures/userData.js';
import LoginPage from '../pages/LoginPage.js';
describe('Register User', () => {

    before(() => {
        cy.visit('/'); // Replace with your registration page URL
    })
    it('should register a new user and Delete Account', () => {
        cy.get("a[href='/login']").should("be.visible").click();
        LoginPage.registerUser(user.firstName, user.email);
        LoginPage.SignUpDetails(user.password);
        cy.get('[data-qa="account-created"]').should('be.visible').should('contain', 'Account Created!');
        cy.get('[data-qa="continue-button"]').click();
        cy.get('.shop-menu').last().should('be.visible').should('contain', ' Logged in as ' + user.firstName);
        cy.get('.shop-menu').find('a').contains('Delete Account').click();
        cy.get('[data-qa="account-deleted"]').should('be.visible').should('contain', 'Account Deleted!');
        cy.get('[data-qa="continue-button"]').click();
    });
});