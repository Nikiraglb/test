/// <reference types="cypress" />

describe('The Internet functionality tests', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/');
  });

  it('.checkHeading() - проверить заголовок на главной странице', () => {
    cy.get('h1').should('contain', 'Welcome to the-internet');
    cy.get('h2').should('exist'); // Проверка наличия заголовка h2
    cy.getCookies().then((cookies) => {
      expect(cookies).to.have.length.above(0); // Проверка наличия cookies
      cookies.forEach(cookie => {
        expect(cookie).to.have.property('name').and.to.not.be.empty; // Проверка имени cookie
        expect(cookie).to.have.property('value').and.to.not.be.empty; // Проверка значения cookie
      });
    });
  });

  it('.checkLinkHref() - проверить наличие ссылки на страницу с аутентификацией', () => {
    cy.get('a').contains('Basic Auth')
      .should('have.attr', 'href', '/basic_auth')
      .and('have.text', 'Basic Auth'); // Проверка наличия ссылки с текстом
    cy.get('a').contains('Basic Auth').click(); // Переход по ссылке
    cy.url().should('include', '/basic_auth'); // Проверка URL
  });

  it('.basicAuth() - проверить базовую аутентификацию', () => {
    cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth');
    cy.get('p').should('contain', 'Congratulations! You must have the proper credentials.');
  });

  it('.addRemoveElements() - добавить и удалить элементы', () => {
    cy.get('a').contains('Add/Remove Elements').click();
    cy.get('button').contains('Add Element').click();
    cy.get('.added-manually').should('have.length', 1);
    cy.get('.added-manually').click();
    cy.get('.added-manually').should('have.length', 0);
  });

  it('.checkCheckbox() - отметить и снять галочку', () => {
    cy.get('a').contains('Checkboxes').click();
    cy.get('input[type="checkbox"]').first().check().should('be.checked');
    cy.get('input[type="checkbox"]').first().uncheck().should('not.be.checked');
  });
});
