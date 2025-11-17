# Welcome to Flights Service

## Project Setup
- clone the project on your local
- execute `npm install` on the same path as your root directory of the download project
- Create a `.env' file in the root directory and add the following environment variable
    - `PORt = 3000`
-Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
    {
    "development": {
        "username": "YOUR_DB_LOGIN_NAME",
        "password": "YOUR_DB_PASSWORD",
        "database": "Flights_Search_DB",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
}
```
- Once you've added your db config as listed above,go to the src folder from your terminal and execute `npx sequelize db:create `