# SoftUni-React-Project

Vista Madridista Website Documentation

Project Overview
Vista Madridista website is a platform dedicated to fans of Real Madrid, providing a space for users to engage with each other through posts, comments, and likes. The site offers various sections including match information, player statistics, and league tables.

Features

1. Home Page:
   Guest:
   Site summary with a sign-up button.
   Overview of the website's features.

Logged User:
Posts feed for logged-in users with all CRUD operations available.

2. Login:
   Allows users to log in to their accounts.

3. Register:
   Enables new users to create accounts.

4. Profile:
   Profile page for logged-in users displaying user information.

5. Fixtures:
   Lists of all Real Madrid matches for the current season with results.
   Each fixture includes a "Details" button leading to a modal with timeline events, statistics, team squads, and player scores.
   Individual fixture pages accessible through /fixtures/:fixtureID.

6. Players:
   Lists players sorted by their positions.
   "Details" button for each player leading to a modal with detailed statistics of the performance of the player.
   Individual player pages accessible through /players/:playerID.

7. La Liga:
   Provides the current La Liga table.

8. Champions League:
   Offers information about all groups in the Champions League.

Project Architecture

Frontend:

React: Used for building the user interface.

State Management:

Utilizes React Context for managing the global state.

Routing:

React Router for handling navigation between different pages.

API Integration:

Fetches football-related information from Football-API such as fixtures, players, and other relevant data.

Authentication:

Manages user authentication using tokens.

Backend:

SoftUni Practice Server:
Handles CRUD operations.
Stores user information, posts, and other relevant data.

External APIs:

Football-API: Retrieves real-time football information for fixtures and player statistics.
