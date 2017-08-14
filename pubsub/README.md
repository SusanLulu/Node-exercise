# Pub sub server

### 1-0 create folder & initiate
```
mkdir pubsub
npm init
npm install express redis axon underscore --save
```

### 1-1 change express version
```
vi package.json
//express: ^3.0.0

npm install

//check express version
cat node_modules/express/package.json
```

### 1-2 create .gitignore
```
vi .gitignore
//node_modules
```
### 1-3 app.js
### 1-4 controllers/badges.js 
- require models/badges
- Badges to pub/sub socket in models

### 1-5 models/badges.js 
- require lib/redis
- Save badges to database

### 1-6 lib/redis.js

### 1-7  install Redis
mac 下安装可以使用 homebrew，homebrew 是 mac 的包管理器

```
 brew install redis
 npm install redis
```
-----------------------------
### 1-8  RUN (In terminal, open 4 tabs and dont close any one)

###### tab1: for Redis server(initiate from local)

``` 
redis-server /usr/local/etc/redis.conf
```
###### tab2: check Redis if running
```
redis-cli
```

 ###### will see sth like this:
 > redis-cli 
 >  
 > 127.0.0.1:6379 >

###### tab3: run Node 

```
node app
```

###### tab4: insert data into redis
```
curl -X POST http://localhost:8000 \
-H "content-type: application/json" \
-d '[{"badge_id":"foo bar badge"}]'
```

--------------------
### 1-9 update Redis data
###### tab2-- "redis-cli"tab and add code after ">"

> redis-cli 
>  
> 127.0.0.1:6379 >
 

- check Redis data:
`LRANGE badges 0 -1`

- delete data from Redis:
`LPOP badges`











###### Reference:
1. [redis github](https://github.com/NodeRedis/node_redis)
- [redis install reference/](http://www.runoob.com/redis/redis-install.html)
- [redis homepage/](http://try.redis.io) 
- [redis quickstart 1/](http://www.yiibai.com/redis/redis_quick_guide.html)
- [redis quickstart 2/](http://www.epubit.com.cn/article/200)
- [redis quickstart 3/](http://blog.jobbole.com/tag/redis/)
