/*
 * @Author: SusanLu
 * @Date:   2017-08-12 20:36:04
 * @Last Modified by:   SusanLu
 * @Last Modified time: 2017-08-16 19:49:35
 */

'use strict';

var express = require('express');
var app = express();
var badges = require('./controllers/badges');

app.use(express.json());

app.post('/', function(){badges.save, badges.trim, badges.send});

app.get('/badges',badges.get);

app.listen(8888,function(){
    console.log('server is listening on port %d', 8888);
});

