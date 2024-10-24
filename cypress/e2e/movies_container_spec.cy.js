describe('Movie Container', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies", {
      statusCode: 200,
      fixture: "movie_posters"
    });

    cy.visit('http://localhost:3000');
  });

  it("It loads all the movie posters onto the site", () => {
    cy.get('h1').should('contain', 'rancid tomatillos');
    cy.get('#search-input').should('exist')
    cy.get('.mcard-container').children().should('have.length', 4);
    cy.get('.mcard-container').children().each((element) => {
      cy.wrap(element).find('img').should('exist');
      cy.wrap(element).find('[aria-label="up vote button"]').should('exist');
      cy.wrap(element).find('[aria-label="down vote button"]').should('exist');
      cy.wrap(element).find('.vote-container').should('exist');
      cy.wrap(element).find('p').should('exist');
    });
  });

  it("It accurately loads all the data inside of the response", () => {
    cy.fixture('movie_posters').then((data) => {
      cy.get('.mcard-container').children().each((element, index) => {
        cy.wrap(element).find('p').should('contain', `${data[index].vote_count}`);
      });
    });
  });

  it("can increase the upvotes of a movie rating", () => {
    cy.fixture('movie_posters').then((data) => {
      cy.intercept("PATCH", `https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/${data[0].id}`, {
        statusCode: 200,
        fixture: "up_vote_patch"
      });
      cy.fixture('up_vote_patch').then((up_vote_data) => {
        cy.get(':nth-child(1) > .vote-container > [aria-label="up vote button"]').click();
        cy.get(':nth-child(1) > .vote-container > p').should('contain', `${up_vote_data.vote_count}`);
      });
    });
  });

  it("can decrease the upvotes of a movie rating", () => {
    cy.fixture('movie_posters').then((data) => {
      cy.intercept("PATCH", `https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/${data[0].id}`, {
        statusCode: 200,
        fixture: "down_vote_patch"
      });
      cy.fixture('down_vote_patch').then((down_vote_patch) => {
        cy.get(':nth-child(1) > .vote-container > [aria-label="down vote button"]').click();
        cy.get(':nth-child(1) > .vote-container > p').should('contain', `${down_vote_patch.vote_count}`);
      });
    });
  });

  it("can filter movies based on search", () => {
    cy.get('#search-input').type('p');
    cy.get('.mcard-container').children().should('have.length', 2);

    cy.get(':nth-child(1) > .mcard-image')
    .should('have.attr', 'alt', 'Parasite poster');

    cy.get(':nth-child(2) > .mcard-image')
    .should('have.attr', 'alt', 'Pulp Fiction poster');

    cy.get('#search-input').type('u');
    cy.get('.mcard-container').children().should('have.length', 1);

    cy.get(':nth-child(1) > .mcard-image')
    .should('have.attr', 'alt', 'Pulp Fiction poster');

    cy.get('#search-input').clear()
    cy.get('.mcard-container').children().should('have.length', 4);


  })
  it("can go to movie details page", () => {
    cy.get(':nth-child(1) > .mcard-image').click()
    cy.url().should('eq', 'http://localhost:3000/155');
  })
});




describe('Sad Paths', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it("will not load any movie posters for our sad path", () => {
    cy.intercept("GET", "https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies", {
      statusCode: 500,
    });

    cy.get('h1').should('contain', 'rancid tomatillos');
    cy.get('#search-input').should('exist')
    cy.get('.mcard-container').children().should('have.length', 0);
  });

  it("can handle sad path for movie upvote when the API server is down", () => {
    cy.intercept("GET", "https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies", {
      statusCode: 200,
      fixture: "movie_posters"
    });

    cy.fixture('movie_posters').then((data) => {
      cy.intercept("PATCH", `https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/${data[0].id}`, {
        statusCode: 500,
      });

      cy.get(':nth-child(1) > .vote-container > [aria-label="up vote button"]').click();
      cy.get(':nth-child(1) > .vote-container > p').should('contain', `${data[0].vote_count}`);
    });
  });

  it("can handle sad path for movie downvote when the API server is down", () => {
    cy.intercept("GET", "https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies", {
      statusCode: 200,
      fixture: "movie_posters"
    });

    cy.fixture('movie_posters').then((data) => {
      cy.intercept("PATCH", `https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/${data[0].id}`, {
        statusCode: 500,
      });

      cy.get(':nth-child(1) > .vote-container > [aria-label="down vote button"]').click();
      cy.get(':nth-child(1) > .vote-container > p').should('contain', `${data[0].vote_count}`);
    });
  });

  it("It wont filter with no cards on screen", () => {
    cy.get('#search-input').type('p');
    cy.get('.mcard-container').children().should('have.length', 0);
  });
});
