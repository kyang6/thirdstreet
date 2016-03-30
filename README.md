# Resume Builder 

## Developers
Stanford Silicon Classroom |  Email: kyang6@stanford.edu  |  GitHub: github.com/kyang6


## Description
This application facilitates the creation of Resumes for students. Each student can create an account and dynamically add in skills, experiences, education, projects, activities, and awards. After filling in all desired fields the website will generate a pdf resume that has the students credentials. Each student can be put under a team and can add events to the team page. These events include a description and an image. Some sample events can be milestones, celebrations, daily posts.

## How to Use

### How to Create a Student
To create an account visit https://asbthirdstreet.herokuapp.com/users/sign_up. Fill in the
credentials and click sign-up. After signing up visit https://asbthirdstreet.herokuapp.com/ students/new to start a student account. After creating a student account there will be no need to go through these steps again.

### How to Edit a Student
To edit a student first log in using the “Sign In” button located on the top right of the header. After logging in use the “My Profile” button also on the top right of the header. Click the “Edit” button, this will bring you to the edit page where the Student’s profile can be edited. After finishing editing click “Update Student” to save changes.

### How to Download a Resume
To download a resume first log in using the “Sign In” button located on the top right of the header. After logging in use the “My Profile” button also on the top right of the header. All the profiles linked to the current logged in user will be displayed. To download a resume click the blue “Generate PDF” button. If the current logged in user is the admin, then my profile will display every resume.

### How to Create a Team
To create a team first log in, then go to https://asbthirdstreet.herokuapp.com/teams/new. After creating a team take note of what the team id is. This is found at the end of the team page https://asbthirdstreet.herokuapp.com/teams/2 - for example this team would have the id 2. When creating/editing a student make sure their team id is the same as the team they are in. This allows the student to show up under the team page.

### How to Add Events to Teams
To add an event to each team page first sign in. After go to the team page, scroll all the way down, and click edit. Here click “Add Event” and type up a description and add an image.


## Tech Stack
Ruby version: ruby 2.0.0p645  
Rails version: Rails 4.2.4  
Authentication: Devise  
Roles: CanCanCan  
Admin Panel: RailsAdmin   
Form: simple_form  
Embedded form elements: cocoon  
Frontend: bootstrap and Haml  
Database Development: sqlite  
Database Production: pq  
Deploy: Heroku


## TODO
### Bugs
-Teams can be edited by anyone logged in
-AWS doesn't return the correct photo

### Improvements
-custom URL slugs
-dynamic team updates


Please send bugs to kyang6@stanford.edu


