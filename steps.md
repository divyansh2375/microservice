We will be making 1 microservice first - search service
First i have to install dependency 
npm init 
1.npm i express
2.npm i body-parser  (ye tab use kiya tha jab postman me wo body ka data console log nhi ho pa rha tha )
3.npm i nodemon
we make src folders and .gitignore
we run npm init and git status
git add .
git commit -m"First commit FOr setup"
git push u origin link se pehele repo banai baha se copy link
folder will not show to usme code likhoge they weill be visible 
Always do commit by commit
package.json me jake script start = npx nodemon src/index.js
we should protect enviornment variables dotenv node me he package asani se ho jata he isse
.env
body parser
sequalize - easy kr degA Kaam -- its not an orm it if manyy dbms
sequalize cli 
mysql2
msql install 
npx sequelize init ---folders created
pg npm
-- seeder folder means? -- if you want to add dummy data 
sab folder ko src me kr do
now add database and sql password in config.json
npx sequelize db:create after going to src
--you can see this now in mysql cmd there show databases it is added
-- we need to add .env and src/config/config.json in gitignore
we made a read me file and push it to github commit-6 
--but now some commit remaining and want to add in commit-6 then just git ammend
git commit --ammend
