# Time_Off_App
When are my coworkers going on vacation?

In big companies, figuring out when to take a vacation can get tricky since you have to work around everyone else's time off. Spreadsheets can help do the job, but honestly, they're not the best at giving you a clear picture of who's off when.

## Let's consider what this app could do and the user flow:
User goes to the index page
User can either create a new team or go to a team with a secret code
Creating a new team will automatically assign that team with a secret, unique code
On the team page the user can add team members
Each team member can have a first name, last name and an optional color
For each member the user can specify time off
Time off is specified as a date range and with an optional description

#Out of scope (or for later):
User authentication is intentionally left out of the list. The unique, secret team code will act as an authentication mechanism.

Open questions:
How do we generate a secret, unique code per team?
How do we show team member's vacation time?
