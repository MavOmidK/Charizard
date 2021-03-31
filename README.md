# Charizard #
Frontend Ionic Mobile App to be used for the LHL Hockey fantasy hockey community

Created 20201-03-22

Angular
Ionic
	- So everyone can use the app
GitHub
	- Web hook to trigger CI/CD
Jenkins
	- Master on Own Computer
	- Slave on DigitalOcean server
Heroku backend?
	- To host the Backend API and the MongoDB
	- Jenkins slave calls scraper/functionality for filling the DB every day
Backend
	- Node Express Mongoose

# Functionality/Pages #

## Rule Book Page ##
- Show the LHL Rulebook
- Must be signed by everyone before the season starts
- Takes notes of those who have signed it and those remaining

## Money Overview Page ##
- Tracks those who have given the entree fee and those who have not
- Will automatically send emails to members who have not paid yet
- Tracks overall money given, amount spend, prizes, and money remaining

## Prospect Tracker ##
- Shows stats of every teams prospects with Games Played being the most important stat
- Ranks prospects based off of dobberhockey's prospect/players rankings
- DM's manager in discord once player has hit 80, 81, and 82 games for Skaters and 39, 40, and 41 games for Goalies

## DB Collections ##
- Teams
  {_id, teamName, ownerName, email}
- Players
  {_id, nhlid, teamName, fullName, age, position}
- Prospects
  {_id, pros_fullname, pros_gamesPlayed, pros_gamesRemaining}
  
