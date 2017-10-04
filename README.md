#PROJECT TWO

## LOCALIVIN
### An app linking intown Atlantans to events, large and small, happening in and around their neighborhoods. The app allows users to create accounts, view, suggest, edit, and delete events in their neighborhoods, and to suggest neighborhoods they'd like to see added to LOCALIVIN's database. A full-stack server application, LOCALIVIN was inspired my passion for local living and connecting Atlantans to each other.

## User Stories, Wireframes, and ERDs:
* [User Stories](https://trello.com/b/7sKf4hom/wdi-project-2)
* [Wireframes](https://marvelapp.com/2hfaaad)
* [ERDs](https://github.com/ebhinch/project_two/commit/728cfccbd859adbb2621e10c3c8b19853da824b8)

<img src="/public/images/wdi-project-2.png">

## LINKS TO APP
* [Deployed to Heroku](https://nameless-refuge-16584.herokuapp.com/) 
* [GitHub](https://github.com/ebhinch/project_two) 

## PORTFOLIO SITE LINK
* [Portfolio](http://administrator-horse-64080.bitballoon.com/)

## TECHNOLOGIES USED 
* OCALIVIN was built using NodeJS, Express, MongoDB, Mongoose, Materialize, Handlebars, Heroku, Google Fonts, CSS, JavaScript, jQuery, Trello, Marvel, draw.io, and more. It is a full CRUD app, using all seven RESTful routes in the "happening" controller and many of the routes in the admin and user controllers as well. 
* Styling was accomplished with Materialize, Google Fonts, Google Icons, and my own CSS stylesheet. Having never used Materialize before, this project allowed me to sharpen my skills using a front-end framework as well as using CSS to override Materialize when necessary. 

## APPROACH TAKEN
* As in my past projects and assignments, I focused a lot on organization and cleanliness in writing my code, including comments whenever helpful to ensure I'd always be able to understand my code and when / why I had done things how I have. 
* As far as functionality is concerened, I focused on creating an app that more than anything else is user-friendly. I don't want users to be confused and/or question how to use LOCALIVIN. Clean styling with bright, modern features, recognizable landmarks as images and easy-to-read text are all ways along with simple DOM graphics and text make LOCALIVIN an app that is appealing and attractive without also being cluttered or confusing.

## REACH GOALS
#### I reached my MVP goals early in the project process and decided then to focus my energy on completing some of the reach goals I'd stored in my Icebox. These included: 
* Suggesting new neighborhoods: I added the functionality for users to "suggest" new neigbhorhoods and then required an "admin" to go in and either "approve" or "reject" the new neighborhood. Using an "approved" Boolean, I was able to program approved neighborhoods to be added to the Neighborhood Index view and rejected ones to be deleted.
* Implementing Parallax: Relatively new to Materialize, I was excited to successfully add Parallax to my Index View. Adding this animation allowed me to brush up on my skills in both using a styling framework and further understanding JavaScript.
* Maximizing responsiveness: I implemented a hamburger menu to take the place of my default nav bar on mobile devices and small screens. I also set up the cards on my Neighborhood Index page such that cards will be shown four-across on large screens, two-across on medium screens and one-across on small ones. This optimizes the user experience to best suit the device the app is being viewed on.

## UNSOLVED PROBLEMS & TASKS FOR THE FUTURE
#### As any new developer will, I did encounter problems I was not able to solve. These problems included: 
* Adding a respective neighborhood show page to user show pages: I had really hoped to have a link showing the upcoming events occuring in a user's home neighborhood included on that user's show page. Unfortunately because the user model and neighborhood model are not connected, I was not able to figure out the relationship. 
* Working with dates: I had hoped to use the data type "Date" for my dates rather than "String." I had also hoped to include a calendar in my forms rather than having a user type a date in as a string. I know that dates are tedious to work with and am sure with more experience I can tackle this as well. 
*I'd like to add functionality to make events list in chronological order on the neighborhood show pages.

##RESOURCES
####I worked with the following resources and used these resources as guides:
* Materialize: I used small snippets of code from Materialize throughout my app...particularly with Parallax, cards and the hamburger nav
* Class notes 
* Classmate collaboration 

####Below are references to artwork and photos used:
*Parallax Image 1: Yo Yo Ferro
*Parallax Image 2: Atlanta Trails
*Parallax Image 3: Tiny Doors ATL