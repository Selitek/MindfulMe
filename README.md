# Project Management for SE Teams

***

This repo will hold a web app to help software engineering teams organized their work and keep track of their progress.

## Proposed names:
- **Colony** - as in a colony of  ants that work together to achieve the same goal. Having that reference can also help with design elements. Inspiration came from this video —> https://youtu.be/vG-QZOTc5_Q?si=6lPbxxFiNOgx_yK9
- ?
- ?

## User stories

- user access the web app and gets prompted to either log in or register, 
- After having an account, they can either make a new project or join an existing one, maybe through an unique link the same way you'll join a discord server
- See project dashboard and customize view

**Project lead:**
- Can create projects
- Define objectives
- Define deadlines
- Update calendar
- Add/invite team members to the project
- Assign roles to team members
- Assign tasks to team members
- Edit/remove tasks?


**Team member:**
- Self-assigned tasks once they’re created by the lead engineer.
- Change their task progress (pending, in progress, paused, done)
- "my tasks" which would show a combined list of tasks from projects they are in
- ?

**Schemas to start with:**

1. user: username, email, password, projectsOwned
2. team: users, projects
3. project: owner, roles, tasks, status
4. task: user, objective, deadline, status
- in a new team schema these users can be stored in an array (members) and the project can be pushed to an array (projects). we could also store the role with the user
 

## Features and functionalities
MVC (https://developer.mozilla.org/en-US/docs/Glossary/MVC) 
- dashboard 
- get the server, log in, log out and sign up functions started
- get a database set up also
- auth service like next auth (if we use Next.js)

***

### Still cooking:
- Overall design of the app. for example: -how many pages are there gonna be? what would the landing page for unsigned user be like? what would it look like when they are signed in. 
- Front end folks can get together and work on the ui either by designing something on figma or taking some inspiration from a product already out there
- Then the backend can get together and figure out how to set it up and figure out potential routes and data

***

## Collaborators
    
- selina
- vinzoomer
- blankCanvas
- athen
- Dani T. 
- RealistChemist123
- Eddie
- Kingsford
- pixel class 27

Use this [tool](https://www.worldtimebuddy.com/?pl=1&lid=2964574,7114227,5,6,8&h=2964574&hf=1] to see everyones time zone.
