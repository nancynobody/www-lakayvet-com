Lakay Vèt
===================

Welcome! laksdmalkdmalksdm alskdmalksdmalkdm alksdm

Getting Started
-------------
Javascript blablablabla

> **Software Stack:**

>  - Server Platform: [Heroku](https://dashboard.heroku.com/apps) running
 - Node.js Web Application Framework: [Express.js](https://expressjs.com/en/api.html)
 - Application Builder: [Gulp.js](http://gulpjs.com/)
 - Database: Mongoose
 - Styling: [AirBnB](https://github.com/airbnb/javascript)


----------

Development
-------------

**Step 0: IDE Setup**
**Step 1: Clone the Repo**
**Step 2: Install Node.js**
**Step 3: NPM Install Dependencies**
**Step 4: Run the App Locally**

Monitoring and Maintenance
-------------
**Daily: Clone the Repo**
**Weekly: IDE Setup**
**Monthly: Install Node.js**
**Occasionally: NPM Install Dependencies**


----------


Commands Cheatsheet
-------------------
**Links**
https://secret-plateau-56358.herokuapp.com/
https://git.heroku.com/secret-plateau-56358.git


**Quick References**

**Cheatsheet**
--------------

**Database - Mongoose / Mongo**
    $ mongo ds153652.mlab.com:53652/lakay_vet -u <dbuser> -p <dbpassword>

**Heroku**
Run the node app locally

    $ heroku local

To run a specific environment

    $ heroku local -e .env.dev

View Heroku Logs

    $ heroku logs

Setup Maintenance and Error pages
https://devcenter.heroku.com/articles/error-pages#customize-pages

**Gulp**
Gulp is used to "build" and minify files prior to launch. Simply cd
to the directory where the gulpfile exists and type gulp if you make
changes to CSS or things like that so that they can be re-built.

    $ gulp

**Other Configs**
Set NODE_ENV to development (or update .env file) when working in development
versions so emails, and things don't get sent externally while testing.

List config vars

    $ heroku config
    $ heroku config:set NODE_ENV=development


**Git**
Update Bitbucket Repo

    $ git add .
    $ git commit -m "some message about the changes you made"
    $ git push origin master

Update Heroku Repo

    $ git push origin master

Push changes to Heroku

    $ git push heroku master
Open the app online

    $ heroku open

Use this to take it offline

    $ heroku ps:scale web=0
    $ heroku maintenance:on
