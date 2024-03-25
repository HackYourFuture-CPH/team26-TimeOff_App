# TimeOff_App
## When are my coworkers going on vacation?

TimeOff_App is a web application designed to simplify the process of managing vacations and time off for teams within a company. It provides a user-friendly interface for creating teams, managing team members, and tracking their time off.

## Development Status

Currently, TimeOff_App is in the early stages of development. The primary functionalities implemented so far include:

- **Authentication Page:** Users can access the authentication page, which serves as the entry point to the application.
  
- **Team Creation:** Users can create a new team, which is automatically assigned a unique secret code.

- **Code Validation:** The application validates the secret code entered by users to grant access to the corresponding team.

Please note that additional features and functionalities are planned for future development.

## User Flow

The typical user flow within the application involves the following steps:

1. **Accessing the Index Page:** Users navigate to the index page of the application.

2. **Authentication:** Users can authenticate themselves using their unique secret code to access their team's information.

3. **Creating a New Team:** Users have the option to create a new team. Upon creation, each team is assigned a secret code for authentication.

4. **Managing Team Members:** Once inside a team, users can add and manage team members. Each team member can have a first name, last name, and optional color.

5. **Tracking Time Off:** Users can specify time off for team members, including a date range and optional description.

## Out of Scope (or For Later)

User authentication is intentionally left out of the initial development scope. Instead, the unique secret team code serves as an authentication mechanism. 

## Open Questions

While the core functionalities have been implemented, there are still some open questions and considerations for future development:

- **Code Generation:** Determining the best method for generating secret, unique codes for each team.
  
- **Displaying Vacation Time:** How to effectively present team members' vacation time within the application.

## Getting Started

To get started with TimeOff_App, follow these steps:

1. Clone the repository to your local machine.
2. Install any necessary dependencies.
3. Run the application locally to explore the current functionalities.

## Contributing

Contributions to TimeOff_App are welcome! If you have any ideas for improvements, new features, or bug fixes, feel free to submit a pull request or open an issue on the GitHub repository.


