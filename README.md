# TimeOff_App

TimeOff_App is a web application designed to simplify the process of managing vacations and time off for teams within a company. It provides a user-friendly interface for creating teams, managing team members, and tracking their time off.

## Development Status

Currently, TimeOff_App is in an advanced stage of development. The following functions are operational:

### Index Page:
- **Team Authentication:** Utilizing a unique code per team, team validation is enabled to grant access to the main functionalities of the app.
  
- **Team Creation:** Easily create a new team through the header button on the index page. Clicking on it generates a new validation key.

- The index page also features a carousel of testimonials, an app overview section, and a pricing section.

Upon accessing the dashboard using the team code, the following functions are available:

### Dashboard:
- **Team Member Visualization**
- **Calendar:** Displays assigned time off for team members, identified with previously chosen colors during member creation.
  
- **Member Creation:** Fill out a form to create a new team member, assigning a color and the number of days off for that member.
  
- **Member Deletion:** Delete a selected member from the team via a dropdown menu. Confirmation is required before deletion.
  
- **Add Time Off:** Add a new entry to the calendar, specifying start and end dates of the event, along with a reason.
  
- **Delete Time Off:** Remove an event from the calendar.

### Additional App Information:

- Data is hosted on an external server, and data updates are generated on the database.

## Getting Started

To start using the app:

1. Run the backend and frontend separately in different terminals using:

npm start-server
npm start-frontend


## Deployment

A deployed version is available at the following link: [TimeOff_App Deployment](https://time-off-ykex.vercel.app)

## Contributing

Contributions to TimeOff_App are welcome! If you have any ideas for improvements, new features, or bug fixes, feel free to submit a pull request or open an issue on the GitHub repository.
