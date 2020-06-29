# LIRI-BOT

LIRI-NODE-APP

LIRI is like iPhone's SIRI.  However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _language_Interpretation and Recognition Interface.  LIRI will be a command line node app that takes in parameters and gives you back data.  LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

OVERVIEW: 

In this project we focused on using Node.js in the command line and taking parameters (process.argv)to call a function and display output to the console.

When running Node with following strings, Node takes the strings as an array, with spaces as the separator.
    The first item in the array is the Node.exe path
    Second item is the current directory
The LIRI app takes the third item of the array for the command, while the rest are used as arguments for API calls.

SOFTWARE USED:

NODE.JS - a JavaScript runtime built on Chrome's V8 JavaScript engine.
Axios
    Installation: node install axios
    Used for grabbing data from:
    OMDB API
    Bands In Town API
Node-Spotify-API
    Installation: npm install node-spotify-api
Spotify module
    "This is a universal wrapper/client for the Spotify Web API that runs on Node.js and the browser, using browserify/webpack/rollup.
Moment
    Moment.js module is used for formatting time.
    Installation: npm install moment
Dotenv
    A zero-dependency module for loading environment variables from .env into process.env.
    Installation: npm install dotenv
FS module
    "The fs module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions." (link)
    Installation: npm install fs
    var fs = require("fs")
Request
    "The request module is for making HTTP requests, it is really a wrapper around Node's built in http module."
    
Require module
    "This is a builtin for Node, require function is the easiest way to include modules that exist in separate files.  Functionality of require is that it reads a Javascript file, executes the file, and then proceeds to return the exports object.
    Installation: npm install require

Inquirer
    "Inquirer eases the process of asking end user questions, parsing, validating answers, managing hierarchical prompts and providing error feedback.
Bands In Town -Events module
    "This is a wrapper to use Bands in Town api, returns a random song/album/artist.

The "getMyInfo" object

The getMyInfo object contains multiple methods for the LIRI app to determine which command was entered and then calls that specific method to obtain and display specific information.
    processArgs method
        gets an array from [process.argv](https://nodejs.org/api/process.html#process_process_argv), which is a "property that returns an array containing the command line arguments passed when the Node.js process was launched."
    checkCommand method
        Uses the switch/case statement checks if the command argument matches an existing method and calls that method.
    concertThis method.
    spotifyThis method.
    movieThis method.
    doWhatItSays method.
    addToFile method.

LIRI is run in the command line.

    node liri.js concert-this <artist/band name here> runs the concertThis method along with the name of the artist or band as an argument. It gets info from the Bands In Town API using Axios and displays multiple show events.

        If no argument (Artist or Band) is entered, it will search using "George Strait" as a default value
        Save command and argument to addToFile method.
        Screenshot:
        
        <img src="liri-node-app/assets/Concert-This.png"><img>

    node liri.js movie-this <movie name here> runs the movieThis method using Axios and OMDB API.

        If a movie is entered, it returns the movie title, year, IMDB Rating, RT rating, country, language, plot, and actors.
        If no movie is entered, a default value of "Mr Nobody" is used.
        Save command and argument to addToFile method.
        Screenshot:

    node liri.js do-what-it-says runs the doWhatItSays method using the FS module to get a string from the random.txt file.

        The "," in the string will be used as a delimiter using `.split(",") and saves the string as two items in an array.
        The first item is used as the command and the second item is the query argument.
        The command and query argument are passed to the checkCommand method which then calls the appropriate method.
        Save command and argument to addToFile method.
        Screenshot:

    The addToFile method uses the FS module to append a string to the log.txt file.

        Moment.js is used to getthe current time and format it as [/DD/YYYY].
        Here's the heading of each appended string:
        [MM/DD/YYY] <command-name> <argument>
        Screenshot

    Log.txt file:
        log.txt