describe("Тестирование авторизации", function () {
  it("Проверка правильного логина и пароля", function () {
    cy.visit("https://login.qa.studio/");
    cy.get("#mail").type("german@dolnikov.ru ");
    cy.get("#pass").type("iLoveqastudio1");
    cy.get("#loginButton").click();
    cy.contains("Авторизация прошла успешно");
    cy.reload();
  });
});

it("Проверка восстановление пароля", function () {
  cy.visit("https://login.qa.studio/");
  cy.get("#forgotEmailButton").click();
  cy.get("#mailForgot").type("german@dolnikov.ru");
  cy.get("#restoreEmailButton").click();
  cy.contains("Успешно отправили пароль на e-mail");
  cy.get("#exitMessageButton > .exitIcon");
  cy.reload();
});

it("Негативный кейс с правильным логином и неправильным паролем", function () {
  cy.visit("https://login.qa.studio/");
  cy.get("#mail").type("german@dolnikov.ru ");
  cy.get("#pass").type("iLoveqastudio");
  cy.get("#loginButton").click();
  cy.contains("Такого логина или пароля нет");
  cy.get("#exitMessageButton > .exitIcon");
  cy.reload();
});

it("Негативный кейс с неправильным логином и правильным паролем", function () {
  cy.visit("https://login.qa.studio/");
  cy.get("#mail").type("german@dolnikov.r ");
  cy.get("#pass").type("iLoveqastudio1");
  cy.get("#loginButton").click();
  cy.contains("Нужно исправить проблему валидации");
  cy.get("#exitMessageButton > .exitIcon");
  cy.reload();
});

it("Негативный кейс логин без @ и правильный пароль", function () {
  cy.visit("https://login.qa.studio/");
  cy.get("#mail").type("germandolnikov.ru ");
  cy.get("#pass").type("iLoveqastudio1");
  cy.get("#loginButton").click();
  cy.contains("Нужно исправить проблему валидации");
  cy.reload();
});

it("Негативный кейс на привидение к строчным буквам в логине", function () {
  cy.visit("https://login.qa.studio/");
  cy.get("#mail").type(" GerMan@Dolnikov.ru");
  cy.get("#pass").type("iLoveqastudio1");
  cy.get("#loginButton").click();
  cy.contains("Такого логина или пароля нет");
  cy.get("#exitMessageButton > .exitIcon");
  cy.reload();
});
