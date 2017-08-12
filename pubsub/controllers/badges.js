/*
* @Author: SusanLu
* @Date:   2017-08-12 21:16:59
* @Last Modified by:   SusanLu
* @Last Modified time: 2017-08-12 23:13:32
*/


'use strict';

/*
*	Badges to models to be saved
 */
exports.save = function(req,res,next){
  var badges = req.body;
  model.save(badges,function(err){
    if (err) return res.json(503,{ error:true });
  });
};
/*
*	Badges to pub/sub socket in models
 */
exports.send = function(){

};


