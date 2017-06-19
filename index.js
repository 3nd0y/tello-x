//var bodyParser = require('body-parser');
var express = require('express');
var app = express();
//var hbs = require('express-handlebars');
var mongoose = require('mongoose');
var mongodb = require('mongodb');
var mlaburi = 'mongodb://admin:admin@ds143231.mlab.com:43231/user_account/';

mongoose.connect(mlaburi);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('mongo connected'); 

  var kittySchema = mongoose.Schema({
    name: String,
    
  });

  kittySchema.methods.speak = function(){
    var greeting = this.name
    ? "Meow name is " + this.name
    : "I dont have a name";
    console.log(greeting);
  }

  var Kitten = mongoose.model('Kitten',kittySchema);
  var silence = new Kitten({
    name: 'SILENCE'
    
  }); //propertis

  console.log(silence.name + '\n' + silence.date);
  //silence.speak();
  silence.save(function(err,fluffy){
    if(err) console.error(err);
    silence.speak();
  });

  db.close();

});
