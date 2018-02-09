//Dependancies
//Must include the path package to get the correct file path for html.

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Routes

module.exports = function (app){
    // Get requests for when users visit a page.
    // In each route the user is shown the html page content.

    app.get("/home" , function(req,res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    app.get("/survey", function(req,res){
        res.sendFile(path.join(__dirname,"../public/survey.html"));
    });

    //If no matching route is found, default to the home page

};
