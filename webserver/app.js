/*
* @Author: SusanLu
* @Date:   2017-08-16 20:59:16
* @Last Modified by:   SusanLu
* @Last Modified time: 2017-08-16 22:15:25
*/

'use strict';

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

server.listen(3000,function(){
	console.log('Server is running on port %d',3000);
});

/**
 * Serve static assets out of public
 */
app.use(express.static('public'));

app.get('/',function(req,res){
	res.sendfile('./public/index.html');
});


