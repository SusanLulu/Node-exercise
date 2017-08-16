/*
* @Author: SusanLu
* @Date:   2017-08-12 21:16:59
* @Last Modified by:   SusanLu
* @Last Modified time: 2017-08-16 07:18:12
*/


'use strict';

var _ = require('underscore');
var model = require('../models/badges');

/*
*	Badges to models to be saved
 */
exports.save = function(req,res,next){
  var badges = _.clone(req.body);
  model.save(badges,function(err){
    if (err) return res.json(503,{ error:true });
    next();
    model.trim();
  });
};
/*
*	Badges to pub/sub socket in models
 */
exports.send = function(req,res,next){
   var badges = _.clone(req.body);
   model.send(badges,function(err){
   	if (err) return res.json(503,{ error:true });
   	res.json(200,{error: null});
   });
};

/**
 *  Get 10 badges from model
 */
exports.get = function(req,res){
  model.get(function(err,data){
    if (err) return res.json(503,{ error:true });
    res.json(200,data);
  })
}


