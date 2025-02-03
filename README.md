## Coding Challenge by Filipe Abreu

This repository contains two applications

```
/api
/app
```

The `/api` app is an Apollo Server to serve the GraphQL API to the web application
The `/app` app is a React application using Apollo Client to query the GraphQL API

### Starting applications

You must have a NodeJS version running in your machine to be able to run these applications. Version 22+ recommended.

Clone this repository locally with: 

```
git clone https://github.com/filabreu/taller-coding-challenge.git
```

Go to the `/api` folder and install node packages dependencies

```
cd api
npm install
```

Start the GraphQL server with:

```
npm start
```

Go to the `/app` folder and install node packages dependencies

```
cd ../app
npm install
```

### Considerations

This was an interesting challenge, covering full-stack skills. Yet, the time was short to setup both back-end and front-end applications, plus cover all the project requirements.

I would consider this to be a take home challenge that should take about 4 hours to complete, about 2 hours for back-end and 2 hours for front-end, to be able to be done in a confortable setting (no time pressure).

Given that, I considered to make some compromises to be able to deliver the most in the given time:

- The GraphQL server is not using a databse to persist data, data is only kept in application memor;
  - Since the GraphQL server is not persisting data in a database, if the GraphQL server is restarted, the created data will be lost (Salons data is already pre-seeded);
- The GraphQL server is not very well organized, since I have put the schema and all resolvers in the main file;
- I wasn't able to cover all the logic, to update and delete the appointments were not covered in the solution;
- Good things to have, like a proper page styling and form validations could also not be delivered at the given time for the challenge;

Yet I hope this challenge can show my skills and that those fits the needs for yopur team.


