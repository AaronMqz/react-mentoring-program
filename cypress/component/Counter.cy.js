import Counter from "../../src/components/Counter/Counter";

describe("Counter Test with Cypress:", () => {
  it("1. That component renders initial value provided in props", () => {
    cy.mount(<Counter initialValue={100} />);
    cy.get("label").contains(100);
  });

  it("2. That a click event on 'decrement' button decrements the displayed value", () => {
    cy.mount(<Counter initialValue={100} />);
    cy.get("div").contains("Decrement").click();
    cy.get("label").contains(99);
  });

  it("3. That a click event on 'increment' button decrements the displayed value", () => {
    cy.mount(<Counter initialValue={100} />);
    cy.get("div").contains("Increment").click();
    cy.get("label").contains(101);
  });
});
