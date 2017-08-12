/*
* @Author: SusanLu
* @Date:   2017-08-12 20:36:04
* @Last Modified by:   SusanLu
* @Last Modified time: 2017-08-12 21:06:05
*/

'use strict';

var express = require('express');
var app = express();
var badges = require('./controllers/badges');

app.use(express.json);

app.post('/', badges.save, badges.send);

app.listen(8000);
