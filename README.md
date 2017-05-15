# errands_backend

Steps to get this project up an running:

Download or clone this repo. Once that is done make sure to be in the root directory and run `npm i`.
Next create a .env file in the root directory. The .env file should look like this.


```
 DB_HOST=<db host>
 DB_USER=<db user>
 DB_PASSWORD=<password for this db user>
 DB_NAME=<name of db>
 AUTH_SECRET=<anything at all>
```
This project is built against a mysql database.

To run the migrations and get the tables set up run the following command: `npm run latest`. NOTE: The db itself should be
created prior to running this command. This command only structures the tables for the db. 

Finally you can run the app with `npm start`.
