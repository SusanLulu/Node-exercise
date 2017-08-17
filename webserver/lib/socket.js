/*
* @Author: SusanLu
* @Date:   2017-08-16 20:59:33
* @Last Modified by:   SusanLu
* @Last Modified time: 2017-08-17 12:44:58
*/

'use strict';

var redis = require('./redis');

/**
 *  Subscribe the the `badge` channel
 */
redis.subscribe('badge');

/**
 *  Expose the client
 */
module.exports = redis;
