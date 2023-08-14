//imp videos
mvc architecture  --abhay redkar 
 
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
git add .

git commit --ammend
git pull
reolve conflict 
git commit resolved
git pull alredy up to date
git push

--wese pull ka kaam hota he kisi ne change kiya he online but humare local m to pehle se tha update nhi hua
to hum git pull krenge update ho jayengi saari files

----note -- internship pe ye nhi bolna he ki airline project banaye ye bolenge ki microservice project banaya he airline following the mvc architecture it will give me great good impression and this also dont tell in startup intyernship 
---this thing only taught in companies

--flights means schedule but there can be 4 5 flights with same plane 
--whimical pe disign prepare waste time go to lucidchart
-- it is generally recommended that each Service should have their own databasess different have thier seperate databases
-- model number can be same but regitration id ex- bajaj same model
-- squilize-cli
--in mysql very hectic task to crate table by squilize cli it is easy
--naming convention for models
 npx sequelize model:generate --name City --attributes  name:String  --.it create two files 
 but it is not gone in mymysql database yet for that we have to sync it 
 ..run migration update it automatically without pulling it from github this is the best good feature 
 --does not add in mysql becuaswe it gives us second chance to are all the tables correct and do you want update also more
 do you want more changes here
--sequelize is very helpful 
npx sequelize db:migrate
==hume ye dekhna he ki tools kaam kese krte hein detail me baad me seekhh lenge 
comapny me jab jaroorat hogi

--created repository


------------------------
implementing CRUD Api
--i updated more feautres in city repostiory 
ex-get city and update city 
-

--> stuck on throw new error


