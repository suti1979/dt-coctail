describe('Open app', () => {
  it('Can click on item', () => {
   cy.visit("/")
   cy.get(".container-grid > :nth-child(1)").click()
   cy.get(".container-grid > :nth-child(1)").should("have.class", "selected")
  })
})

describe("Change welcome screen", () => {
  it("Selected item", () => {
    cy.get("h3").should("have.text", "You have selected")
    cy.get("h1").should("have.text", "A1")
  })
})

describe("Close item", () => {
  it("Can click on close", () => {
    cy.get(".btn-close").click()
    cy.get(".container-grid > :nth-child(1)").should("not.have.class", "selected")
  })
})

describe("Search", () => {
  it("Search for ABC coctail", () => {
    cy.get(".search").type("ABC")
    cy.get(".container-grid").should("have.length", 1)
  })
})
