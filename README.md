## LESSONS TO COVER THIS ANGULAR E COMMERCE APP

1. Introduction
2. Installation of angular app
3. Installation of Postman app
4. Install Angular CLI
5. Create Angular app
    1. npm install -g @angular/cli - install globally
    2. ng version - check version og angular
    3. ng new angularEcommerce
    4. cd angularEcommerce
    5. ng serve -o - serve the command open inside the browser
6. Remove git folder from the current folder
    rm -rf .git
7. push the changes on the git 
8. Install bootstrap 5.2.1
    nmp i bootstrap@5.2.1
9. Add bootstrap.min.css and boostrap.bundle.min.js in index.html file


## STARTING OUR ECOMMERCE APP WITH ANGULAR 

1. Add Header
    1. Create Components
    2. create Navbar
    3. set defualt font-size, family etc in style.css file

2. List of Foods
    1. create food model - food.ts
    2. create data.ts
        1. Add sample food details
    3. Add images to assets folder
    4. Create Food Service - Provide sample data to home component
3. Search Option
    1. create Search component
    2. Add to home component
    3. set Header component as Child
    4. set Search component as parent
4. List of Tags
    1. create tag model tag.ts
    2. create sample tag data in data.ts 
    3. create tag component
    4. add methods in food service