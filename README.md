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

## What alternatives are there to set up the CI besides Jenkins and GitHub Actions?

- Drone.io
- Atlassian Bamboo
- CircleCI
- Travis CI
- BuildMaster
- Buddy

## Would this setup be better in a self-hosted or a cloud-based environment? Why? What information would you need to make that decision?

I would choose a cloud-based environment, it has several advantages such as:

- The implementation of CI/CD can be significantly faster and more customizable for users thanks to the steps and integrations that already exist in cloud-based solutions.

- Building proper infrastructure for a self-hosted solution, such as a modern data center, can take months. Hardware also has to be replaced every few years to meet performance and security requirements.

- In most cases, self-hosted CI/CD tools come with new hiring needs. Cloud-based services offer a high level of support and onboarding assistance, so you do not have to worry about having to boost your headcount.

- Network administration, reporting, and migrating data from the previous platform are all time-consuming tasks, and all make the installation of a self-hosted system a much longer process.

- In case of an on-premise system, recovering from downtime, backtracking codes, fixing bugs, and other blocks in the CI/CD pipeline mechanics usually require more time, resources, and personnel.


## Commands

Start by running `npm install` inside the project folder

`npm run dev` to run the webpack dev server.
`npm test` to run tests
`npm run eslint` to run eslint
`npm run build` to make a production build
`npm run start` to run your production build
