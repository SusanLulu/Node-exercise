# Pub sub server

##### 1-0 create folder & initiate
```
mkdir pubsub
npm init
npm install express redis axon underscore --save
```

##### 1-1 change express version
```
vi package.json
//express: ^3.0.0
npm install
//check express version
cat node_modules/express/package.json
```

##### 1-2 create .gitignore
```
vi .gitignore
//node_modules
```
##### 1-3 app.js
##### 1-4 controllers/badges.js 
- require models/badges.js; 
- Badges to pub/sub socket in models
##### 1-5 models/badges.js 
- require redis
- Save badges to database
##### 1-6 lib/redis.js

