# Social-Network-API

## Description
This project is a Social Network API built using NoSQL technologies. It enables users to interact with a social network platform by sharing thoughts, reacting to friends' thoughts, and managing friend lists. It uses Express.js for routing, MongoDB for the database, and Mongoose for the ODM.

## Screenshots of My Application

## Link to Deployed Application

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features
- User management (create, update, delete)
- Thought management (create, update, delete)
- Friend management (add, remove)
- Reaction management (create, delete)

## Installation
- Clone the repository
- Install dependencies
- Run database
- Start application using npm start

## Usage
- Ensure MongoDB is running on your local machine.
- Use Insomnia to test API routes
- Create, update, delete users and thoughts
- Add and remove friends, create and delete reactions

API Routes:

- /api/users: 

GET all users

GET a single user by _id

POST a new user

PUT to update a user

DELETE to remove a user



- /api/users/:userId/friends/:friendId:

POST to add a new friend

DELETE to remove a friend



- /api/thoughts:

GET all thoughts

GET a single thought by _id

POST to create a new thought

PUT to update a thought

DELETE to remove a thought



- /api/thoughts/:thoughtId/reactions:

POST to create a reaction

DELETE to remove a reaction

## Contributing
We are open to receiving community contributions to improve this project. If you would like to contribute, create a fork in the repository on GitHub, make a new branch for your enhancement (git checkout -b ), make your changes and ensure that the code functionality is up to par, commit your changes with clear and concise messages (git commit -m "message of what you did"), push your changes to your fork (git push origin <feature/branch-name>) and submit a pull request to the main repository main branch (please provide a detailed description of your changes in the pull request and explain goal of contribution).

## License:
This project is licensed under the MIT License.

## Acknowledgements
### Libraries and Frameworks

### Front End:
- Handlebars.js

### Back End:
- Express.js
- Sequelize
- pg
- dotenv
- node.js
- express-session

### Database:
- PostgreSQL

### Security:
- bcrypt