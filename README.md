# nifty-backend

Dependencies:
-Express
-Helmet
-Knex
-Sqlite3
-Bcryptjs
-Jsonwebtoken
-Dotenv
-Cross-env

| Method | Endpoint | Requires | Description |
| ------ |:--------:|:--------:| -----------:|
| GET    | /users   | nothing | shows users for troubleshooting |
| POST   | /users/register | username, password, first name, last name, email | Adds a new user. |
| POST   | /users/login | username, password | Logs in a user. |
| DELETE | /users/:id | user ID | Deletes the user. |
| PUT    | /users/:id | user ID | Updates the user. |