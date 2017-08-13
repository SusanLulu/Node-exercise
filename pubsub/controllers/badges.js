/*
* @Author: SusanLu
* @Date:   2017-08-12 21:16:59
* @Last Modified by:   SusanLu
* @Last Modified time: 2017-08-13 15:25:41
*/


'use strict';

var _ = require('undersocre');
var model = require('../models/badges');

/*
*	Badges to models to be saved
 */
exports.save = function(req,res,next){
  var badges = _.clone(req.body);
  model.save(badges,function(err){
    if (err) return res.json(503,{ error:true });
    next();
  });
};
/*
*	Badges to pub/sub socket in models
 */
exports.send = function(){

};


