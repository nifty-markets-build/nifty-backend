# nifty-backend

Dependencies:
-express
-helmet
-knex
-sqlite3
-bcryptjs
-jsonwebtoken
-dotenv
-cross-env
-cors

Users Endpoints

| Method | Endpoint | Requires | Description |
| ------ |:--------:|:--------:| -----------:|
| GET    | /users   | nothing | shows users for troubleshooting |
| POST   | /users/register | username, password, first name, last name, email | Adds a new user. |
| POST   | /users/login | username, password | Logs in a user. |
| DELETE | /users/:id | user ID | Deletes the user. |
| PUT    | /users/:id | user ID | Updates the user. |


Items Endpoints

| Method | Endpoint | Requires | Description |
| ------ |:--------:|:--------:| -----------:|
| GET    | /items/:userId | user ID | Fetches the user's items. |
| POST   | /items/:userId | user ID | Creates an item. |
| DELETE | /items/:userId/:id | user ID, item ID | Deletes the item. |
| PUT    | /items/:userId/:id | user ID, item ID | Updates the item. |
