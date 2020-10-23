const { Pool } = require('pg')
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, 
  ssl: true
});
const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path');
const { query } = require('express');
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .get('/cool', (req, res) => res.send(cool()))
  .get('/home', (req, res) => res.send(home()))
  .get('/times', (req, res) => res.send(showTimes()))

  // displays the daily jobs 
  .get('/daily', async (req, res) => {
    console.log("received request for daily jobs");

    try {
      const client = await pool.connect()
      const member = await client.query('SELECT * FROM Member');
      const params = { 'member': (member) ? member.rows : null };

      res.send(params);
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })

  //sends database data to display the weekly jobs 
  .get('/week', async (req, res) => {
    console.log("received request for weekly jobs");
    try {
      const client   = await pool.connect()
      const member   = await client.query('SELECT * FROM Member ORDER BY id');
      const job      = await client.query('SELECT * FROM Job');
      const breakfast= await client.query('SELECT * FROM Breakfast');
      const empty    = await client.query('SELECT * FROM EmptyDishwasher');
      const play     = await client.query('SELECT * FROM Playroom');
      const family   = await client.query('SELECT * FROM Familyroom');
      const outside  = await client.query('SELECT * FROM Outside');
      const bedroom  = await client.query('SELECT * FROM Bedroom');
      const dinner   = await client.query('SELECT * FROM Dinner');
      const clear    = await client.query('SELECT * FROM ClearWipe');
      const wash     = await client.query('SELECT * FROM WashDishes');

      const params = { 'member': (member)    ? member.rows    : null, 
                        'job'  : (job)       ? job.rows       : null, 
                    'breakfast': (breakfast) ? breakfast.rows : null, 
                      'empty'  : (empty)     ? empty.rows     : null,
                        'play' : (play)      ? play.rows      : null,
                       'family': (family)    ? family.rows    : null, 
                      'outside': (outside)   ? outside.rows   : null,
                      'bedroom': (bedroom)   ? bedroom.rows   : null,
                       'dinner': (dinner)    ? dinner.rows    : null, 
                       'clear' : (clear)     ? clear.rows     : null,
                        'wash' : (wash)      ? wash.rows      : null
                    };

      res.send(params);
      client.release();

    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })

  //sends database data to display the 2021 Come Follow Me lesson plan 
  .get('/cfmweek', async (req, res) => {
    console.log("received request for come follow me for week " + req.query.week);
    try {

      const client    = await pool.connect()
      const family    = await client.query('SELECT * FROM Family ORDER BY id');
      const dates     = await client.query('SELECT * FROM Dates WHERE week=' + req.query.week);
      const scriptures= await client.query('SELECT * FROM Scriptures WHERE week=' + req.query.week);
      const scriptLink= await client.query('SELECT * FROM scriptLink WHERE id=' + req.query.week);
      const business  = await client.query('SELECT * FROM business WHERE id=' + req.query.week);
      const oSong     = await client.query('SELECT * FROM oSong WHERE id=' + req.query.week);
      const cSong     = await client.query('SELECT * FROM cSong ORDER BY id');
      const music     = await client.query('SELECT * FROM musicLink ORDER BY id');
      const topic     = await client.query('SELECT * FROM Topic WHERE id=' + req.query.week);
      const background= await client.query('SELECT * FROM background ORDER BY id');
      const PRSLesson = await client.query('SELECT * FROM PRSLesson WHERE weekTaught=' + req.query.week);
      var   user   = await client.query("SELECT * FROM Users WHERE phone='" + req.query.phone + "'");
      if (user.rows == "" ) {
        var user = [{id: 5, fname: 'John', allowed: false}];
      }

      const params = { 'family': (family)    ? family.rows     : null, 
                        'dates': (dates)     ? dates.rows      : null, 
                   'scriptures': (scriptures)? scriptures.rows : null, 
                   'scriptLink': (scriptLink)? scriptLink.rows : null,
                    'business' : (business)  ? business.rows   : null,
                       'oSong' : (oSong)     ? oSong.rows      : null, 
                       'cSong' : (cSong)     ? cSong.rows      : null,
                        'music': (music)     ? music.rows      : null,
                        'topic': (topic)     ? topic.rows      : null, 
                  'background' : (background)? background.rows : null,
                   'PRSLesson' : (PRSLesson) ? PRSLesson.rows  : null,
                       'user'  : (user.rows) ? user.rows       : user 
                      //  'week'  : (week)      ? week.rows       : null
                    };

      res.send(params);
      client.release();

    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })

   //sends database data to display the 2021 Come Follow Me schedule  
  .get('/cfmyear', async (req, res) => {
    console.log("received request for come follow me for the year");
    try {

      const client    = await pool.connect()
      const dates     = await client.query('SELECT * FROM Dates ORDER BY week');
      const topic     = await client.query('SELECT * FROM Topic ORDER BY id');

      const params = {  'dates': (dates)     ? dates.rows      : null, 
                        'topic': (topic)     ? topic.rows      : null 
                    };

      res.send(params);
      client.release();

    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })

  //data for monthly jobs
  .get('/monthly', async (req, res) => {
    try { 
      console.log("received request for monthly jobs");

      const client = await pool.connect()
      const member = await client.query('SELECT * FROM Member');
      const job    = await client.query('SELECT * FROM Job');
      var date     = ['7th', '11th', '14th', '21st'];

      const params = { 'member': (member) ? member.rows : null, 
                        'job'  : (job)    ? job.rows    : null, 
                           date: date  };

      res.send(params);
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })

  //data for kids-points
  .get('/getPoints', async (req, res) => {
    try { 
      console.log("received request for getting kids points");

      const client = await pool.connect()
      const kids   = await client.query('SELECT * FROM Family  ORDER BY id');
      const point  = await client.query('SELECT * FROM Points');

      const params = { 'kids'  : (kids)   ? kids.rows   : null, 
                       'point' : (point)  ? point.rows  : null
                     };

      res.send(params);
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })

  //data for kids-points
  .get('/getPoints', async (req, res) => {
    try { 
      console.log("received request for getting kids points");

      const client = await pool.connect()
      const kids   = await client.query('SELECT * FROM Family  ORDER BY id');
      const point  = await client.query('SELECT * FROM Points');

      const params = { 'kids'  : (kids)   ? kids.rows   : null, 
                         'point' : (point)  ? point.rows  : null
                       };
  
      res.send(params);
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })

  //add for kids points
  .get('/addPoints', async (req, res) => {
    try { 
      console.log("received request for adding kids points");

      const client = await pool.connect()
      const member = await client.query("INSERT INTO Points (kids, points, notes) VALUES (" + req.query.child + ", " + req.query.points + ", '" + req.query.notes + "')");
      console.log("points added to the database");

      res.redirect('https://nates-apps.herokuapp.com/kid-points.html');
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })

  .get('/add', async (req, res) => {
    try { 
      console.log("received request for adding a job");
      console.log("req.query " + req.query.announceInput);
      console.log("week " + req.query.week);
      console.log("ip addressx-forward: " + req.headers['x-forwarded-for']);
      console.log("ip addressx-real: " + req.headers['x-real-ip']);
      console.log("filtered ip: " + req.ip.split(':').slice(-1)); 
      console.log("ip address: " + req.connection.remoteAddress); 
      var wifi = "73.98.191.136";
      var trac = "172.58.142.186";
      var moto = "172.58.142.186";
      var device = req.headers['x-forwarded-for'];

      const client   = await pool.connect()

      if (device == wifi || device == moto || device == trac) {
        const update   = await client.query("UPDATE business SET note ='" + sanitize(req.query.announceInput) + "' WHERE id=" + req.query.week);
        console.log('update was successful');
      }
      const business  = await client.query('SELECT * FROM business WHERE id=' + req.query.week);

      const params = { 'business': (business) ? business.rows : null };

      res.send(params);
      client.release();

    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })


  // gets the inventory database info  
  .get('/getInventory', async (req, res) => {
    console.log("received request to retrieve inventory");
    console.log("phone " + req.query.phone);
    try {

      const client = await pool.connect();
      const wood   = await client.query('SELECT * FROM Frame ORDER BY id');
      const stage  = await client.query('SELECT * FROM Stage ORDER BY id');
      const submit = await client.query("SELECT * FROM Success WHERE type='frame';");
      const reset  = await client.query("UPDATE Success SET success=FALSE WHERE type='frame';");
      var   user   = await client.query("SELECT * FROM Users WHERE phone='" + req.query.phone + "'");
      if (user.rows == "" ) {
        var user = [{id: 5, fname: 'John', allowed: false}];
      }

      const params = { 'wood': (wood)    ? wood.rows     : null, 
                      'stage': (stage)   ? stage.rows    : null, 
                     'submit': (submit)  ? submit.rows   : null,
                       'user': (user.rows) ?  user.rows  : user
                      };

      console.log('inventory information successfully retrieved');
      res.send(params);
      client.release();

    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })

  // update the inventory quantity numbers
  .get('/updateInventory', async (req, res) => {
    try { 
      console.log("received request to update the inventory");
      var date = getDate();
      console.log(date);

      var updates = [req.query.un, req.query.stainN, req.query.stainG, req.query.stainK, req.query.cN, req.query.cG, req.query.cK, req.query.slN, req.query.slG, req.query.slK, req.query.stapledN, req.query.stapledG, req.query.stapledK, req.query.dN, req.query.dG, req.query.dK, req.query.miniun, req.query.ministainN, req.query.ministainG, req.query.ministainK, req.query.minicN, req.query.minicG, req.query.minicK, req.query.minislN, req.query.minislG, req.query.minislK, req.query.ministapledN, req.query.ministapledG, req.query.ministapledK, req.query.minidN, req.query.minidG, req.query.minidK];

      const client   = await pool.connect()

      for (var i = 1; i < updates.length + 1; i++) {
        const check = await client.query("SELECT quantity FROM frame WHERE id=" + i);

        if (check.rows[0].quantity != updates[i - 1]) {
          var update1 = await client.query("UPDATE frame SET quantity =" + sanitize(updates[i - 1]) + ", dateupdated='" + date + "' WHERE id=" + i);
          console.log(i + ' updated from ' + check.rows[0].quantity + ' to ' + updates[i - 1] );
          const reset  = await client.query("UPDATE Success SET success=TRUE WHERE type='frame';");

        }
      }

      console.log('update was successful');

      res.redirect('https://nates-apps.herokuapp.com/inventory.html');
      client.release();

    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })

  //data for promises to covenant Israel
  .get('/israel', async (req, res) => {
    try { 
      console.log("received request for israel data");

      const client = await pool.connect()
      const data   = await client.query('SELECT * FROM Israel ORDER BY id');
      var   user   = await client.query("SELECT * FROM Users WHERE phone='" + req.query.phone + "'");
      if (user.rows == "" ) {
        var user = [{id: 5, fname: 'John', allowed: false}];
      }

      const params = { 'data' : (data) ? data.rows : null,
                      'user'  : (user.rows)  ?  user.rows  : user
                     };

      res.send(params);
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })

  //adding data to covenant Israel
  .get('/addIsrael', async (req, res) => {
    try { 
      console.log("received request for israel data");

      const client = await pool.connect()
      const data   = await client.query("INSERT INTO Israel (promise, scripture) VALUES ('" + req.query.note + "', '" + req.query.scripture + "')");

      const params = { 'data' : (data) ? data.rows : null
                     };

      res.redirect('https://nates-apps.herokuapp.com/Israel.html');
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })



  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  // takes the data to be inserted into the database and cleans it
  function sanitize(phrase) { 

    for (var i = 0; i < phrase.length; i++) {
      if (phrase[i] == "'") {
        phrase = phrase.slice(0, i) + "'" + phrase.slice(i);
        i++;
      }
    }
    return phrase;
  };

  function getDate() { 
    var date = new Date();
    return (date.getMonth() + 1) + " " + date.getDate() + " " + date.getFullYear();
    // return "September 5, 2020";
  };
