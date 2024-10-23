describe('Movie Container', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies", {
      statusCode: 200,
      fixture: "movie_posters"
    })

    cy.visit('http://localhost:3000')
  })

  it("It loads all the movie posters onto the site", () => {
    cy.get('h1').should('contain', 'rancid tomatillos')
    cy.get('.mcard-container').children().should('have.length', 4);
    cy.get('.mcard-container').children().each((element) => {
      cy.wrap(element).find('img').should('exist');
      cy.wrap(element).find('img[src="/static/media/arrow-down.1bd8a9c560b9a6b094e2b12a96f8dd7a.svg"').should('exist');
      cy.wrap(element).find('img[src="/static/media/arrow-up.8b5475792128aa2b7b3ac73b0746c23f.svg"]').should('exist')
      cy.wrap(element).find('.vote-container').should('exist')
      cy.wrap(element).find('p').should('exist');
    });
  });

  it("It accurately loads all the data inside of the response", () =>{
    cy.fixture('movie_posters').then((data) => {
      cy.get('.mcard-container').children().each((element, index) => {
        cy.log('Element index:', index);
        cy.wrap(element).find('p').should('contain', `${data[index].vote_count}`)
      });
    })
  })

})

describe('Sad Paths', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it("will not load any movies posters for our sad path", () => {
    cy.intercept("GET", "https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies", {
      statusCode: 500,
    })

    cy.get('h1').should('contain', 'rancid tomatillos')
    cy.get('.mcard-container').children().should('have.length', 0);
  });


})