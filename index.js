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
      // console.log(Date());
      var date = getDate();
      console.log(date);
      var updates = [req.query.un ,req.query.stainN ,req.query.stainG ,req.query.stainK ,req.query.cN ,req.query.cG ,req.query.cK ,req.query.slN ,req.query.slG ,req.query.slK ,req.query.stapledN ,req.query.stapledG ,req.query.stapledK ,req.query.dN ,req.query.dG ,req.query.dK ,req.query.miniun ,req.query.ministainN ,req.query.ministainG ,req.query.ministainK ,req.query.minicN ,req.query.minicG ,req.query.minicK ,req.query.minislN ,req.query.minislG ,req.query.minislK ,req.query.ministapledN ,req.query.ministapledG ,req.query.ministapledK ,req.query.minidN ,req.query.minidG ,req.query.minidK ];


      const client   = await pool.connect()

      for (var i = 1; i < updates.length; i++) {
        const check = await client.query("SELECT quantity FROM frame WHERE id=" + i);
        console.log("i= " + i);
        console.log("check " + check.rows[0] + check.rows[0].quantity);
        if (check.rows[0].quantity != updates[i]) {
          var update1 = await client.query("UPDATE frame SET quantity =" + sanitize(updates[i - 1]) + ", dateupdated='" + date + "' WHERE id=" + i);
          console.log( i + ' updated from ' + check.rows[0].quantity + ' to ' + updates[i - 1] + );
        }


      }
      // console.log('check3 ' + check1.rows[0].quantity);
      // if (check1.rows[0].quantity != req.query.un) {
      //   const update1 = await client.query("UPDATE frame SET quantity =" + sanitize(req.query.un) + ", dateupdated='" + date + "' WHERE id=1");
      //   console.log('un updated');
      // }
      // if (check5.rows[0].quantity != req.query.stainN) {
      //   const update5 = await client.query("UPDATE frame SET quantity =" + sanitize(req.query.stainN) + ", dateupdated='" + date + "' WHERE id=5");
      // }
      // if (check6.rows[0].quantity != req.query.stainG) { 
      //   const update6 = await client.query("UPDATE frame SET quantity =" + sanitize(req.query.stainG) + ", dateupdated='" + date + "' WHERE id=6");
      // }
      // if (check7.rows[0].quantity != req.query.stainK) {
      //   const update7 = await client.query("UPDATE frame SET quantity =" + sanitize(req.query.stainK) + ", dateupdated='" + date + "' WHERE id=7");
      // }
      // if (check8.rows[0].quantity != req.query.cN) {
      //   const update8 = await client.query("UPDATE frame SET quantity =" + sanitize(req.query.cN) + ", dateupdated='" + date + "' WHERE id=8");
      // }
      // if (check9.rows[0].quantity != req.query.cG) {
      //   const update9 = await client.query("UPDATE frame SET quantity =" + sanitize(req.query.cG) + ", dateupdated='" + date + "' WHERE id=9");
      // }
      // if (check10.rows[0].quantity != req.query.cK) {
      //   const update10 = await client.query("UPDATE frame SET quantity =" + sanitize(req.query.cK) + ", dateupdated='" + date + "' WHERE id=10");
      // }
      // if (check11.rows[0].quantity != req.query.slN) {
      //   const update11 = await client.query("UPDATE frame SET quantity =" + sanitize(req.query.slN) + ", dateupdated='" + date + "' WHERE id=11");
      // }
      // if (check12.rows[0].quantity != req.query.slG) {
      //   const update12 = await client.query("UPDATE frame SET quantity =" + sanitize(req.query.slG) + ", dateupdated='" + date + "' WHERE id=12");
      // }
      // if (check13.rows[0].quantity != req.query.slK) {
      //   const update13 = await client.query("UPDATE frame SET quantity =" + sanitize(req.query.slK) + ", dateupdated='" + date + "' WHERE id=13");
      // }
      // if (check14.rows[0].quantity != req.query.stapledN) {
      //   const update14 = await client.query("UPDATE frame SET quantity =" + sanitize(req.query.stapledN) + ", dateupdated='" + date + "' WHERE id=14");
      // }
      // if (check15.rows[0].quantity != req.query.stapledG) {
      //   const update15 = await client.query("UPDATE frame SET quantity =" + sanitize(req.query.stapledG) + ", dateupdated='" + date + "' WHERE id=15");
      // }
      // if (check16.rows[0].quantity != req.query.stapledK) {
      //   const update16 = await client.query("UPDATE frame SET quantity =" + sanitize(req.query.stapledK) + ", dateupdated='" + date + "' WHERE id=16");
      // }
      // if (check17.rows[0].quantity != req.query.dN) {
      //   const update17 = await client.query("UPDATE frame SET quantity =" + sanitize(req.query.dN) + ", dateupdated='" + date + "' WHERE id=17");
      // }
      // if (check18.rows[0].quantity != req.query.dG) {
      //   const update18 = await client.query("UPDATE frame SET quantity =" + sanitize(req.query.dG) + ", dateupdated='" + date + "' WHERE id=18");
      // }
      // if (check19.rows[0].quantity != req.query.dK) {
      //   const update19 = await client.query("UPDATE frame SET quantity =" + sanitize(req.query.dK) + ", dateupdated='" + date + "' WHERE id=19");
      // }

      // if (check20.rows[0].quantity != req.query.miniun) {
      //   const update20 = await client.query("UPDATE frame SET quantity =" + sanitize(req.query.miniun) + ", dateupdated='" + date + "' WHERE id=20");
      // }
      // if (check24.rows[0].quantity != req.query.ministainN) {
      //   const update24 = await client.query("UPDATE frame SET quantity =" + sanitize(req.query.ministainN) + ", dateupdated='" + date + "' WHERE id=24");
      // }
      // if (check25.rows[0].quantity != req.query.ministainG) {
      //   const update25 = await client.query("UPDATE frame SET quantity =" + sanitize(req.query.ministainG) + ", dateupdated='" + date + "' WHERE id=25");
      // }
      // if (check26.rows[0].quantity != req.query.ministainK) {
      //   const update26 = await client.query("UPDATE frame SET quantity =" + sanitize(req.query.ministainK) + ", dateupdated='" + date + "' WHERE id=26");
      // }
      // if (check27.rows[0].quantity != req.query.minicN) {
      //   const update27 = await client.query("UPDATE frame SET quantity =" + sanitize(req.query.minicN) + ", dateupdated='" + date + "' WHERE id=27");
      // }
      // if (check28.rows[0].quantity != req.query.minicG) {
      //   const update28 = await client.query("UPDATE frame SET quantity =" + sanitize(req.query.minicG) + ", dateupdated='" + date + "' WHERE id=28");
      // }
      // if (check29.rows[0].quantity != req.query.minicK) {
      //   const update29 = await client.query("UPDATE frame SET quantity =" + sanitize(req.query.minicK) + ", dateupdated='" + date + "' WHERE id=29");
      // }
      // if (check30.rows[0].quantity != req.query.minislN) {
      //   const update30 = await client.query("UPDATE frame SET quantity =" + sanitize(req.query.minislN) + ", dateupdated='" + date + "' WHERE id=30");
      // }
      // if (check32.rows[0].quantity != req.query.minislG) {
      //   const update31 = await client.query("UPDATE frame SET quantity =" + sanitize(req.query.minislG) + ", dateupdated='" + date + "' WHERE id=31");
      // }
      // if (check32.rows[0].quantity != req.query.minislK) {
      //   const update32 = await client.query("UPDATE frame SET quantity =" + sanitize(req.query.minislK) + ", dateupdated='" + date + "' WHERE id=32");
      // }
      // if (check33.rows[0].quantity != req.query.ministapledN) {
      //   const update33 = await client.query("UPDATE frame SET quantity =" + sanitize(req.query.ministapledN) + ", dateupdated='" + date + "' WHERE id=33");
      // }
      // if (check34.rows[0].quantity != req.query.ministapledG) {
      //   const update34 = await client.query("UPDATE frame SET quantity =" + sanitize(req.query.ministapledG) + ", dateupdated='" + date + "' WHERE id=34");
      // }
      // if (check35.rows[0].quantity != req.query.ministapledK) {
      //   const update35 = await client.query("UPDATE frame SET quantity =" + sanitize(req.query.ministapledK) + ", dateupdated='" + date + "' WHERE id=35");
      // }
      // if (check36.rows[0].quantity != req.query.minidN) {
      //   const update36 = await client.query("UPDATE frame SET quantity =" + sanitize(req.query.minidN) + ", dateupdated='" + date + "' WHERE id=36");
      // }
      // if (check37.rows[0].quantity != req.query.minidG) {
      //   const update37 = await client.query("UPDATE frame SET quantity =" + sanitize(req.query.minidG) + ", dateupdated='" + date + "' WHERE id=37");
      // }
      // if (check38.rows[0].quantity != req.query.minidK) {
      //   const update38 = await client.query("UPDATE frame SET quantity =" + sanitize(req.query.minidK) + ", dateupdated='" + date + "' WHERE id=38");
      // }

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
    return "September 5, 2020";
  };
