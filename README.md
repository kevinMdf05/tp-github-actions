# TP GitHub Actions - CI/CD

Ce repository est un TP sur les GitHub Actions et le CI/CD.

## Structure du projet

```
.
├── .github/workflows/
│   ├── github-actions-demo.yml   # Workflow demo avec des echos
│   ├── app.yml                   # CI pour les tests Python (pytest)
│   ├── cypress-tests.yml         # CI pour les tests Cypress e2e
│   └── ci-cd.yml                 # Pipeline CI/CD complet
├── calculator.py                 # Fonction moyenne en Python
├── test_calculator.py            # Tests unitaires pytest
├── job.py                        # Script Python simple
├── app.js                        # Application Express
├── server.js                     # Point d'entrée du serveur
├── app.test.js                   # Tests Jest/Supertest
├── cypress/
│   └── e2e/sample_spec.cy.js     # Tests Cypress e2e
├── cypress.config.js             # Configuration Cypress
└── package.json
```

## Installation

```bash
npm install
```

## Lancer l'application

```bash
npm start
```

Le serveur demarre sur http://localhost:3000

## Lancer les tests

### Tests Python (pytest)
```bash
pip install pytest
pytest test_calculator.py -v
```

### Tests Jest (unitaires/integration)
```bash
npm test
```

### Tests Cypress (e2e)
```bash
npm start &
npx cypress run
```

## Pipeline CI/CD

Le pipeline GitHub Actions (`ci-cd.yml`) execute automatiquement a chaque push :

1. **Tests Python** : lance pytest sur calculator.py
2. **Tests Jest** : tests d'integration du serveur Express
3. **Tests Cypress** : tests e2e de l'interface web (apres Jest)
