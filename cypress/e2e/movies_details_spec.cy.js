describe('Movie Details', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies", {
      statusCode: 200,
      fixture: "movie_posters"
    })
    cy.fixture(`movie_posters`).then((movie_data)=>{
      cy.intercept("GET", `https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/${movie_data[0].id}`, {
        statusCode: 200,
        fixture: "movie_details"
      })
    })

    cy.visit('http://localhost:3000')
    cy.get(':nth-child(1) > .mcard-image').click()
  })

  it("Should load a single home button & can be clicked ", () => {
    cy.get('.home-button')
      .should("exist")
      .click()
    cy.get('.mcard-container').children().should('have.length', 4);
    cy.get('h1').should('contain', 'rancid tomatillos')
  });

  it("Home button works Happy", () => {
    cy.get('.home-button > img').click()
    cy.url().should('eq', 'http://localhost:3000/');
  })

  it("Should load a single movies details", () => {
    cy.fixture(`movie_details`).then((movie_details)=>{
      cy.get('.mdetails-backdrop').should("exist")
      cy.get('.mdetails-title')
        .should("exist")
        .should("contain",`${movie_details.title}`)
      cy.get('.mdetails-genre').should('have.length', movie_details.genre_ids.length);
      cy.get('.mdetails-genres').children()
        .each((element,index) =>{
          cy.wrap(element).should("contain",movie_details.genre_ids[index])
        })
      cy.get('.mdetails-overview').should("contain",movie_details.overview)
      })
    })

})


describe('Sad Paths', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies", {
      statusCode: 200,
      fixture: "movie_posters"
    })
    cy.fixture(`movie_posters`).then((movie_data)=>{
      cy.intercept("GET", `https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/${movie_data[0].id}`, {
        statusCode: 500,
        body:{
          error: "server can not be reached"
        }


      })

    })

    cy.visit('http://localhost:3000')
    cy.get('h1').should('contain', 'rancid tomatillos')
    cy.get(':nth-child(1) > .mcard-image').click()


  })

  it("Should load a error message", () => {
    cy.get('h2').should('contain', 'Error: Failed to fetch movie details')
  })

  it("Should load a single home button & can be clicked ", () => {
    cy.get('.home-button')
      .should("exist")
      .click()
    cy.get('.mcard-container').children().should('have.length', 4);
    cy.get('h1').should('contain', 'rancid tomatillos')
  });

  it("Home button works sad", () => {
    cy.get('.home-button > img').click()
    cy.url().should('eq', 'http://localhost:3000/');
  })

})

