var express = require('express');
var puppyRouter = express.Router(); 

puppyRouter.route('/')
.get(function(req, res) {
    res.send("hello from the puppy router");
});

module.exports = puppyRouter; 