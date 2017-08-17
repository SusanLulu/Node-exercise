/*
* @Author: SusanLu
* @Date:   2017-08-16 22:22:32
* @Last Modified by:   SusanLu
* @Last Modified time: 2017-08-16 22:51:49
*/

'use strict';

var axon = require('axon');
var socket = axon.socket('sub');

socket.connect(8001);

socket.on('error',function(err) {
	throw err;
});

module.exports = socket;
