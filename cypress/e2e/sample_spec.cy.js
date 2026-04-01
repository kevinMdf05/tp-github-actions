describe('Page d\'accueil', () => {
  it('devrait afficher le message de bienvenue', () => {
    cy.visit('/')
    cy.contains('Bienvenue')
  })

  it('devrait retourner un status 200', () => {
    cy.request('/').its('status').should('eq', 200)
  })
})
