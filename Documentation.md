# SoftUni-React-Project
Vista Madridista Website Documentation

Project Overview

Vista Madridista is a platform dedicated to fans of Real Madrid, providing a space for users to engage with each other through posts, comments, and likes.

The website offers various sections including match information, player statistics, and league tables.

# Features

 ## Home Page
   
   ### Guest:
   
   Site summary with a sign-up button.
   
   Access to all football-related information.

   ### Logged User:

  Posts feed for users.
  
  Liking, commenting, editing, deleting posts.

  Linking photos to posts.
  
 ## Login
 
   Allows users to log in to their accounts.

 ## Register
 
   Enables new users to create accounts.

 ## Profile
 
   Profile page for logged-in users displaying user information.

 ## Fixtures
 
   Lists of all Real Madrid matches of the current season with results for past matches.
   
   Each fixture includes a "Details" button leading to a modal with detailed match statistics.
   
   Individual fixture pages are accessible through /fixtures/:fixtureID.

 ## Players
 
   Lists players sorted by their positions.
   
   "Details" button for each player leading to a modal with detailed statistics of player performance.
   
   Individual player pages are accessible through /players/:playerID.

 ## La Liga
 
   Provides the current La Liga table.

 ## Champions League
 
   Offers information about all groups in the Champions League.

# Project Architecture

## Frontend

### React: 

Used for building the user interface.

## State Management

Utilizes React Context for managing the global state.

## Routing

React Router for handling navigation between different pages.

## API Integration

Fetches football-related information from Football-API such as fixtures, players, and other relevant data.

## Authentication

Manages user authentication using tokens.

## Backend

### SoftUni Practice Server:

Handles CRUD operations.

Stores user information, posts, likes, comments and other relevant data.

## External APIs

### Football-API:

Retrieves real-time football information for fixtures and player statistics.
