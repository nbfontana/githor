# githor
GitHub's profile collector made with Angular :octocat:

# Implementation

In this project I made use of NodeJS with NPM, Webpack to bundle and serve the application with webpack-dev-server in dev environment, and Angular 4+. I also made use of Angular Material components for better UI, and some custom SCSS scripts.

**Features**:

*Users - /users - *List Github Users with pagination and filters*
* The user can find a Github User by it's username or (login)
* The user can find Github Users based on location (Brazil is set as default if it's empty)
* The user can open a specific Github on the web
* The user is able to make comments over a Github User (wich is being saved in the LocalStorage)
* The user is able to list all public Github User repositories
* A 404 panda is visible if the search doesn't return any value at all

*Repositories - /repositories *List repositories of a specific Github User with pagination*
* The user is able to see all public repositories of a specific Github User
* The user is able to paginate over the repositories

**Details**

* I've made use of a Guard over the /repositories route, that way the user isn't able to navigate directly to the page without passing the the needed data to it.
* If the user types a incorrect base url like 'https://githor.herokuapp.com/#/blabla' he's redirected to 'https://githor.herokuapp.com/#/page-not-found' but if he types only the subroute incorrectly, like 'https://githor.herokuapp.com/#/app/ussssers', he will get a default route for that.
* Some components were created to help the main screens, like 'githor-loading' and 'github-user-card'. Some of them are dumb components wich are only responsible of emiting an event to the parent component so it can implement as it desires.
* The final bundle is made with an CLI AOT Build and has async routes, for better performance. 

# Installation

You need NodeJS with NPM and the [HerokuCLI](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up) to publish the app if you want to.

First of all, install all dependencies:
```
npm i -d
``` 
Then, run the development server:
```
npm run server
``` 
And if you want to build AOT for production, just call:
```
npm run build
``` 
You also have the option to run both the build and the server with flags for **Development**, **Production** and **Homologation**, all you need to do is add ':[flag]' after the script with a valid flag. Example:
```
npm run build:dev
npm run build:prod
npm run build:hml
``` 

If you want to test the app you can run one of those
```
npm run test
npm run test:watch
npm run test:prod // To run with PanthomJS in production linux environment (not recommended)
npm run e2e
``` 

You can find those and more scripts in the **package.json** file.

Enjoy ;)
