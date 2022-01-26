# Front-End Developer Challenge - NBA Directory

The NBA Directory is a simple web app built in Angular 13 that:

1. Lists All NBA Teams
1. Provides a detailed view of a team including Players

### Run the Angular App

In the root directory, run:

- `npm install`
- `npm start`

You can validate the app is up and running by navigating to ``http://localhost:4200``.

There are two RESTful mock endpoints available to you:
- `GET` : `http://localhost:8080/teams/` - Lists a high level view of all the teams.
- `GET` : `http://localhost:8080/players/` - Lists a high level view of all the players in the league.

These mocks are stored in the `app/mock` folder. For this exercise there will be no need to touch this folder.

## Challenges:

1. Improve the page to provide the city & division of the teams. 

1. When clicking a team, provide team details including logo and members (players) on the team.

1. Provide a way to display all players and sort them by height or weight.

1. Can you think of ways to improve either the front-end or back-end of this application?
