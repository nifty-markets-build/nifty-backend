# nifty-backend

Dependencies:
* express
* helmet
* knex
* sqlite3
* bcryptjs
* jsonwebtoken
* dotenv
* cross-env
* cors

Users Endpoints

| Method | Endpoint | Requires | Description | Returns |
| ------ |:--------:|:--------:|:-----------:| -------:|
| GET    | /users   | nothing | shows users for troubleshooting | Provides an array of users. |
| GET    | /users/:userId   | user ID | fetches a specific user | Returns a single user. |
| POST   | /users/register | username, password, first name, last name, email | Adds a new user. | Returns the registered user. |
| POST   | /users/login | username, password | Logs in a user. | Returns a logged in message, JWT token and the userId. |
| DELETE | /users/:id | user ID | Deletes the user. | Count of deleted users. |
| PUT    | /users/:id | user ID | Updates the user. | Count of updated users. |


Items Endpoints

| Method | Endpoint | Requires | Description | Returns |
| ------ |:--------:|:--------:|:-----------:| -------:|
| GET    | /items   | nothing  | Fetches all items in marketplace. | All items in marketplace. |
| GET    | /items/item/:itemId   | item ID  | Fetches single item from marketplace. | Item from marketplace. |
| GET    | /items/:userId | user ID | Fetches the user's items. | All the users items. |
| POST   | /items/:userId | user ID | Creates an item. | Returns the created item. |
| DELETE | /items/:userId/:id | user ID, item ID | Deletes the item. | Count of deleted items. |
| PUT    | /items/:userId/:id | user ID, item ID | Updates the item. | Count of updated items. |

Transaction Endpoints

| Method | Endpoint | Requires | Description | Returns |
| ------ |:--------:|:--------:|:-----------:| -------:|
| GET    | /transactions/:userId   | nothing | shows users for troubleshooting | Array of user transactions. |
| POST   | /transactions/:userId | username, password, first name, last name, email | Adds a new user. | Returns new transaction. |
