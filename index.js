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
                   'PRSLesson' : (PRSLesson) ? PRSLesson.rows  : null 
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
      var date = ['7th', '11th', '14th', '21st'];

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
      // const point  = await client.query('SELECT * FROM Points');

      // const params = { 'member': (member) ? member.rows : null, 
      //                  'point' : (point)  ? point.rows  : null
      //                };

      // res.send(params);
      res.redirect('https://nate-node.herokuapp.com/kid-points.html');
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
    try {

      const client = await pool.connect();
      const wood   = await client.query('SELECT * FROM Frame ORDER BY id');
      const stage  = await client.query('SELECT * FROM Stage ORDER BY id');
        // const scriptures= await client.query('SELECT * FROM Scriptures WHERE week=' + req.query.week);
        // const scriptLink= await client.query('SELECT * FROM scriptLink WHERE id=' + req.query.week);
        // const business  = await client.query('SELECT * FROM business WHERE id=' + req.query.week);
        // const oSong     = await client.query('SELECT * FROM oSong WHERE id=' + req.query.week);
        // const cSong     = await client.query('SELECT * FROM cSong ORDER BY id');
        // const music     = await client.query('SELECT * FROM musicLink ORDER BY id');
        // const topic     = await client.query('SELECT * FROM Topic WHERE id=' + req.query.week);
        // const background= await client.query('SELECT * FROM background ORDER BY id');
        // const PRSLesson = await client.query('SELECT * FROM PRSLesson WHERE weekTaught=' + req.query.week);

      const params = { 'wood': (wood)    ? wood.rows     : null, 
                      'stage': (stage)   ? stage.rows    : null 
        //              'scriptures': (scriptures)? scriptures.rows : null, 
        //              'scriptLink': (scriptLink)? scriptLink.rows : null,
        //               'business' : (business)  ? business.rows   : null,
        //                  'oSong' : (oSong)     ? oSong.rows      : null, 
        //                  'cSong' : (cSong)     ? cSong.rows      : null,
        //                   'music': (music)     ? music.rows      : null,
        //                   'topic': (topic)     ? topic.rows      : null, 
        //             'background' : (background)? background.rows : null,
        //              'PRSLesson' : (PRSLesson) ? PRSLesson.rows  : null 
                        //  'week'  : (week)      ? week.rows       : null
                      };
  
      console.log('inventory information successfully retrieved');
      res.send(params);
      client.release();

    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })

  // update the inventory numbers
  .get('/updateInventory', async (req, res) => {
    try { 
      console.log("received request to update the inventory");
      console.log(Date());
      var date = getDate();
      console.log(date);

      const client   = await pool.connect()

      const check1 = await client.query("SELECT quantity FROM frame WHERE id=1");
      console.log('check1 ' + check1);
      console.log('check2 ' + check1.rows.quantity);
      console.log('check3 ' + check1.rows[0].quantity);
      if (check1 != req.query.un) {
        const update1 = await client.query("UPDATE frame SET quantity =" + sanitize(req.query.un) + ", dateupdated='" + date + "' WHERE id=1");
        console.log('un updated');
      }
      // const update2 = await client.query("UPDATE frame SET quantity ='" + sanitize(req.query.pN) + "' WHERE id=2");
      // const update3 = await client.query("UPDATE frame SET quantity ='" + sanitize(req.query.pG) + "' WHERE id=3");
      // const update4 = await client.query("UPDATE frame SET quantity ='" + sanitize(req.query.pK) + "' WHERE id=4");
      const update5 = await client.query("UPDATE frame SET quantity ='" + sanitize(req.query.stainN) + "' WHERE id=5");
      const update6 = await client.query("UPDATE frame SET quantity ='" + sanitize(req.query.stainG) + "' WHERE id=6");
      const update7 = await client.query("UPDATE frame SET quantity ='" + sanitize(req.query.stainK) + "' WHERE id=7");
      const update8 = await client.query("UPDATE frame SET quantity ='" + sanitize(req.query.cN) + "' WHERE id=8");
      const update9 = await client.query("UPDATE frame SET quantity ='" + sanitize(req.query.cG) + "' WHERE id=9");
      const update10 = await client.query("UPDATE frame SET quantity ='" + sanitize(req.query.cK) + "' WHERE id=10");
      const update11 = await client.query("UPDATE frame SET quantity ='" + sanitize(req.query.slN) + "' WHERE id=11");
      const update12 = await client.query("UPDATE frame SET quantity ='" + sanitize(req.query.slG) + "' WHERE id=12");
      const update13 = await client.query("UPDATE frame SET quantity ='" + sanitize(req.query.slK) + "' WHERE id=13");
      const update14 = await client.query("UPDATE frame SET quantity ='" + sanitize(req.query.stapledN) + "' WHERE id=14");
      const update15 = await client.query("UPDATE frame SET quantity ='" + sanitize(req.query.stapledG) + "' WHERE id=15");
      const update16 = await client.query("UPDATE frame SET quantity ='" + sanitize(req.query.stapledK) + "' WHERE id=16");
      const update17 = await client.query("UPDATE frame SET quantity ='" + sanitize(req.query.dN) + "' WHERE id=17");
      const update18 = await client.query("UPDATE frame SET quantity ='" + sanitize(req.query.dG) + "' WHERE id=18");
      const update19 = await client.query("UPDATE frame SET quantity ='" + sanitize(req.query.dK) + "' WHERE id=19");
      const update20 = await client.query("UPDATE frame SET quantity ='" + sanitize(req.query.miniun) + "' WHERE id=20");
      // const update21 = await client.query("UPDATE frame SET quantity ='" + sanitize(req.query.minipN) + "' WHERE id=21");
      // const update22 = await client.query("UPDATE frame SET quantity ='" + sanitize(req.query.minipG) + "' WHERE id=22");
      // const update23 = await client.query("UPDATE frame SET quantity ='" + sanitize(req.query.minipK) + "' WHERE id=23");
      const update24 = await client.query("UPDATE frame SET quantity ='" + sanitize(req.query.ministainN) + "' WHERE id=24");
      const update25 = await client.query("UPDATE frame SET quantity ='" + sanitize(req.query.ministainG) + "' WHERE id=25");
      const update26 = await client.query("UPDATE frame SET quantity ='" + sanitize(req.query.ministainK) + "' WHERE id=26");
      const update27 = await client.query("UPDATE frame SET quantity ='" + sanitize(req.query.minicN) + "' WHERE id=27");
      const update28 = await client.query("UPDATE frame SET quantity ='" + sanitize(req.query.minicG) + "' WHERE id=28");
      const update29 = await client.query("UPDATE frame SET quantity ='" + sanitize(req.query.minicK) + "' WHERE id=29");
      const update30 = await client.query("UPDATE frame SET quantity ='" + sanitize(req.query.minislN) + "' WHERE id=30");
      const update31 = await client.query("UPDATE frame SET quantity ='" + sanitize(req.query.minislG) + "' WHERE id=31");
      const update32 = await client.query("UPDATE frame SET quantity ='" + sanitize(req.query.minislK) + "' WHERE id=32");
      const update33 = await client.query("UPDATE frame SET quantity ='" + sanitize(req.query.ministapledN) + "' WHERE id=33");
      const update34 = await client.query("UPDATE frame SET quantity ='" + sanitize(req.query.ministapledG) + "' WHERE id=34");
      const update35 = await client.query("UPDATE frame SET quantity ='" + sanitize(req.query.ministapledK) + "' WHERE id=35");
      const update36 = await client.query("UPDATE frame SET quantity ='" + sanitize(req.query.minidN) + "' WHERE id=36");
      const update37 = await client.query("UPDATE frame SET quantity ='" + sanitize(req.query.minidG) + "' WHERE id=37");
      const update38 = await client.query("UPDATE frame SET quantity ='" + sanitize(req.query.minidK) + "' WHERE id=38");

      console.log('update was successful');

      // const business  = await client.query('SELECT * FROM business WHERE id=' + 47);

      // const params = { 'business': (business) ? business.rows : null };

      res.redirect('https://nate-node.herokuapp.com/inventory.html');
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
    // return (date.getMonth() + 1) + " " + date.getDate() + " " + date.getFullYear();
    return "September 3, 2020";
  };
