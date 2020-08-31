const { Pool } = require('pg')
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, 
  ssl: true
});
const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .get('/cool', (req, res) => res.send(cool()))
  .get('/home', (req, res) => res.send(home()))
  .get('/times', (req, res) => res.send(showTimes()))

  // displays the daily jobs 
  .get('/daily', async (req, res) => {
    console.log("received request for daily");

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
    console.log("received request for week");
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

    //sends database data to display the 2021 Come Follow Me schedule  
    .get('/cfm', async (req, res) => {
      console.log("received request for come follow me");
      try {
        const client    = await pool.connect()
        const family    = await client.query('SELECT * FROM Family');
        const dates     = await client.query('SELECT * FROM Dates');
        const scriptures= await client.query('SELECT * FROM Scriptures');
        const scriptLink= await client.query('SELECT * FROM scriptLink');
        const business  = await client.query('SELECT * FROM business');
        const oSong     = await client.query('SELECT * FROM oSong');
        const cSong     = await client.query('SELECT * FROM cSong');
        // const dinner   = await client.query('SELECT * FROM Dinner');
        // const clear    = await client.query('SELECT * FROM ClearWipe');
        // const wash     = await client.query('SELECT * FROM WashDishes');
  
        const params = { 'family': (family)    ? family.rows     : null, 
                          'dates': (dates)     ? dates.rows      : null, 
                     'scriptures': (scriptures)? scriptures.rows : null, 
                     'scriptLink': (scriptLink)? scriptLink.rows : null,
                      'business' : (business)  ? business.rows   : null,
                         'oSong' : (oSong)     ? oSong.rows      : null, 
                         'cSong':  (cSong)     ? cSong.rows      : null
                        // 'bedroom': (bedroom)   ? bedroom.rows    : null,
                        //  'dinner': (dinner)    ? dinner.rows     : null, 
                        //  'clear' : (clear)     ? clear.rows      : null,
                          // 'wash' : (wash)      ? wash.rows       : null
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
      console.log("received request for monthly");

      const client = await pool.connect()
      const member = await client.query('SELECT * FROM Member');
      const job    = await client.query('SELECT * FROM Job');
      var date = ['7th', '11th', '14th', '21st'];

      const params = { 'member': (member) ? member.rows : null, 
                        'job'  : (job)    ? job.rows    : null, date: date  };

      res.send(params);
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }

  })

  .get('/add', async (req, res) => {
    try { 
      console.log("received request for adding a job");

      const client = await pool.connect()
      const job    = await client.query('INSERT INTO Job (jobname) VALUES (req.query.job)');
      var date = ['7th', '11th', '14th', '21st'];

      const params = { 'member': (member) ? member.rows : null, 
                        'job'  : (job)    ? job.rows    : null, date: date  };

      res.render('pages/monthly', params);
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }

  })


  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


