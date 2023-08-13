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
Once you have added your config db as listed above go to the src folder and execute `npx sequelize db:create`

 `npx sequelize db:migrate`
```

```



# DB design 
- Airplane table
- Flight
- Airport
- City

-A flight belongs to an airplane  but one airplane can be usued in multiple flilghts
-A city has smany airports sbut one city belonngsg to manny airports
-one airport can have many flights but a flight belongs to oone airport  











