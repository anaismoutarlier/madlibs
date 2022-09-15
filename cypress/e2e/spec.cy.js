describe("Mad Libs Main Page", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");

    cy.get(".App")
      .should("be.visible")
      .within(() => {
        cy.get("input").should("have.length", 11);
        cy.get("#submit-button")
          .should("contain.text", "SUBMIT")
          .should("be.disabled");
      });
  });

  it("Fill inputs and submit", () => {
    const valueMap = {
      name1: 1,
      adj1: 2,
      animal1: 3,
      color1: 4,
      place1: 5,
      animal2: 6,
      adj2: 7,
      animal3: 8,
      adj3: 9,
      verb1: 10,
      room1: 11,
    };

    for (const key in valueMap) {
      cy.get(`input#${key}`).type(valueMap[key]);
    }

    cy.get("#submit-button").should("be.enabled");
  });

  it("show story on button click", () => {
    cy.get("#submit-button").click();

    cy.get("div.story-result").should("be.visible")
  })
});
