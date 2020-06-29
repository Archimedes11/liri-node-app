require("dotenv").config(); // imports dotenv
var fs = require("fs"); // imports filesystem
var axios = require("axios"); // Make XMLHttpRequests from the browser
var moment = require("moment"); // time formatter
var keys = require("./keys.js"); // imports keys.js files
var Spotify = require('node-spotify-api'); //spotify api npm
var spotify = new Spotify(keys.spotify); //access to spotify keys