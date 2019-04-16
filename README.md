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
| GET    | /users   |username, password, first name, last name, email| Adds a new users. |

POST /users/register

POST /users/login

DELETE /users/:id

PUT /users/:id
