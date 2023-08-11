<!-- /
    -src/
          index.js  //server
          models/
          controllers/
          middlewares/
          services/ 
          utils/
          config/
          repository/
    -tests/ [later]
    -static/
    -temp/ -->








# WELCOME TO FLIGHTS SERVICE

# PROJECT SETUP -
- clone the project on your local
- execute `npm install`
- create `.env`file in the root repository  with port `PORT = 3000`
- inside src/config create a file named `config.json`and write following code
```


{
  "development": {
    "username": <Your-sql-username>,
    "password": "Your-sql-password",
    "database": "Flight_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}


```
















