# Full Stack open CI/CD

This repository is used for the CI/CD module of the Full stack open course

Fork the repository to complete course exercises

## Exercise 11.1

### Selected language: Python

### What are the specific tools for taking care of these steps in the ecosystem of the language you picked? 

### Linting

For linting I would use Flake8, as it's fast and has a low false positive rate, Flake8 is actually a combination of several other tools, mainly the Pyflakes static analysis tool, and the Pycodestyle (former pep8) code style checker. There are other options too, like Pylint.

### Testing

For testing I would use PyTest, it is an open-source Python-based testing framework that is generally all-purpose but especially for Functional and API testing with a simple syntax and rich plugins. There are other options like: Robot, Unittest, DocTest, Nose2 and Testify.

### Build

For building one option could be BuildMaster by using pip freeze you can list all your installed modules and their version and once the production build is completed, an "artifact" will be created ready for deployment.

## Commands

Start by running `npm install` inside the project folder

`npm start` to run the webpack dev server
`npm test` to run tests
`npm run eslint` to run eslint
`npm run build` to make a production build
`npm run start-prod` to run your production build
