
class LoginPage {
    visit() {
        cy.visit('/'); // Replace with your login page URL
   
};

registerUser(firstName, email) {
        cy.get('[data-qa="signup-name"]').type(firstName);
        cy.get('[data-qa="signup-email"]').type(email);
        cy.get('[data-qa="signup-button"]').click();
    }

    SignUpDetails(password) {
        cy.get('input[name="title"]').check('Mr');
        cy.get('[data-qa="password"]').type(password);
        cy.get('[data-qa="days"]').select('1');
        cy.get('[data-qa="months"]').select('January');
        cy.get('[data-qa="years"]').select('2000');
        cy.get('[data-qa="first_name"]').type('John');
        cy.get('[data-qa="last_name"]').type('Doe');
        cy.get('[data-qa="company"]').type('Example Company');
        cy.get('[data-qa="address"]').type('123 Main St');
        cy.get('[data-qa="country"]').select('United States');
        cy.get('[data-qa="state"]').type('California');
        cy.get('[data-qa="city"]').type('Los Angeles');
        cy.get('[data-qa="zipcode"]').type('90001');
        cy.get('[data-qa="mobile_number"]').type('+1234567890');
        cy.get('[data-qa="create-account"]').click();
    }
    login(){
          cy.fixture('savedUser.json').then((savedUser) => {
            if (!savedUser || !savedUser.email) {
                throw new Error('No saved user found. Run the registration test first or ensure savedUser.json exists.');
            }
            cy.log('Saved User: ' + savedUser.email);
            cy.get('[data-qa="login-email"]').should('be.visible').clear().type(savedUser.email);
            cy.get('[data-qa="login-password"]').should('be.visible').clear().type(savedUser.password || '');
            cy.get('[data-qa="login-button"]').click();
            cy.get('.shop-menu')
                .last()
                .should('be.visible')
                .should('contain', ' Logged in as ' + user.firstName);
        });
    }
};

export default new LoginPage();