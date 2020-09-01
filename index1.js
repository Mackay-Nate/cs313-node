var path = require('path');
var express = require('express');
var app = express();

// Used for the database
const { Pool } = require('pg')
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, 
  ssl: true
});

// const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

// We are going to use sessions
var session = require('express-session')

// set up sessions
app.use(session({
  secret: 'my-super-secret-secret!',
  resave: false,
  saveUninitialized: true
}))

// Because we will be using post values, we need to use the body parser middleware
app.use(express.json() );       // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies

app.set('port', (process.env.PORT || 5000));

// We have html and js in the public directory that need to be accessed
app.use(express.static(path.join(__dirname, 'public')))

// This shows how to use a middleware function for all requests (it is defined below)
// Because it comes after the static function call, we won't see it log requests
// for the static pages, only the ones that continue on passed that (e.g., /logout)
app.use(logRequest);

// Setup our routes
app.post('/login', handleLogin);
app.post('/logout', handleLogout);

// This method has a middleware function "verifyLogin" that will be called first
app.get('/getServerTime', verifyLogin, getServerTime);

// Start the server
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});



/****************************************************************
 * These methods should likely be moved into a different module
 * But they are here for ease in looking at the code
 ****************************************************************/

// Checks if the username and password match a hardcoded set
// If they do, put the username on the session
async function handleLogin(request, response) {
  var result = {success: false};
  console.log('line 64: success stored as failure, 68 next');

  // We should do better error checking here to make sure the parameters are present
  // async function data(req, res) {
    console.log('line 68: async, 70 next');
    try {
      console.log('line 70: inside try, 72 next');
      const client = await pool.connect()
      console.log('line 72: inside try, 74 next');
      const result = await client.query('SELECT * FROM secure');
      console.log('line 74: inside try, 76 next');
      const results = { 'result': (result) ? result.rows : null};
      console.log('line 76: inside try, 77 next');
      console.log('line 77, 78 next' + result[0]);
      console.log('line 78, next 81' + result.length);

      for (var i = 0; i < result.length; i++) { 
        console.log('line 81; inside for loop, ? next');
        if (request.body.username == result[0] && request.body.password == result[0]) {
      		request.session.user = request.body.username;
          result = {success: true};
      }
      client.release();
  	}

  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }


	response.json(result);
}

// If a user is currently stored on the session, removes it
function handleLogout(request, response) {
	var result = {success: false};

	// We should do better error checking here to make sure the parameters are present
	if (request.session.user) {
		request.session.destroy();
		result = {success: true};
	}

	response.json(result);
}

// This function returns the current server time
function getServerTime(request, response) {
	var time = new Date();
	
	var result = {success: true, time: time};
	response.json(result); 
}

// This is a middleware function that we can use with any request
// to make sure the user is logged in.
function verifyLogin(request, response, next) {
	if (request.session.user) {
		// They are logged in!

		// pass things along to the next function
		next();
	} else {
		// They are not logged in
		// Send back an unauthorized status
		var result = {success:false, message: "Access Denied"};
		response.status(401).json(result);
	}
}

// This middleware function simply logs the current request to the server
function logRequest(request, response, next) {
	console.log("Received a request for: " + request.url);

	// don't forget to call next() to allow the next parts of the pipeline to function
	next();
}