# MVC-Tech-Blog
Model View Controller

##Technologies Used
express handlebars
mysql2
sequelize
dotenv
bcrypt
express-session
connect-session-sequelize

## User Story
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions

## Acceptance Criteria
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
    <!-- create moustache homepage
    display info from api get route for existing blog posts
    display navigation links to homepage and dashboard
    have log in button  -->


WHEN I click on the homepage option
THEN I am taken to the homepage
    <!-- button -->
        <!-- change document location to / -->

WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
<!-- 2 Buttons -->

WHEN I choose to sign up
THEN I am prompted to create a username and password
    <!-- Create log in page -->
    <!-- Use input fields and event listeners. Store variables in session -->

WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
    <!-- Create submit button -->
    <!-- add an event listener -->
    <!-- Use text from input fields -->

WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
    <!-- Use session. This only applies if the session has expired. -->

WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
    <!-- Once logged in, change document location to homepage -->

WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
    <!-- homepage will fetch an api/blogs GET request, and publish info using express and handlebars -->

WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
    <!-- create blog post partial -->
    <!-- upon click of blog post, display blog post partial with the post title, contents, post creator's name, and the date displayed in place of the moustaches-->
    <!-- Comment input box -->
        

WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
    <!-- Comment submit button -->
        <!-- fetch api/comments/put request -->
        <!-- update comments display of blog partial on display -->
    <!-- Clear button for comment input field -->

WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
    <!-- Dashboard button -->
        <!-- Wil display blog posts user has already created, as well as a new blog post button -->

WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
    <!-- new blog post button -->
    <!-- will remove 'hidden' class from blogpost input fields and buttons -->

WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
    <!-- 'leave comment' button -->
        <!-- fetch api/comments put request -->
        <!-- refreshes page, which automatically updates the comments section -->

WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
    <!-- clicking on a blog post, will take you to it's partial -->
    <!-- clicking on a ... button will ask user if they want to delete or update post -->
        <!-- delete will delete post and take user back to homepage -->
        <!-- update will take you to create-blog-post partial with filled out input fields -->

WHEN I click on the logout option in the navigation
THEN I am signed out of the site
    <!-- log out button -->
WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts
    <!-- if session is over, view only. remove event listeners from submit buttons. -->