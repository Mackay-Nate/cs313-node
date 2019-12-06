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
  // .set('view engine', 'ejs')
  // .get('/', (req, res) => res.render('pages/index'))
  
  // .get('/db', async (req, res) => {
  //   try {
  //     const client = await pool.connect()
  //     const result = await client.query('SELECT * FROM test_table');
  //     const results = { 'results': (result) ? result.rows : null};
  //     res.render('pages/db', results );
  //     client.release();
  //   } catch (err) {
  //     console.error(err);
  //     res.send("Error " + err);
  //   }
  // })
  
  .get('/cool', (req, res) => res.send(cool()))
  .get('/home', (req, res) => res.send(home()))
  .get('/times', (req, res) => res.send(showTimes()))
  .get('/www.google.com', (req, res) => res.send(google.com))
  .get('/populate', (req, res) => {
    console.log("received request for populate");

    var weight = 0, type = 0, cost = 0, type2 = 0;
    var params = {weight: weight, type: type, cost: cost, type2: type2}

    res.render('public/jobs.html', params);
  })

  // displays the daily jobs 
  .get('/daily', async (req, res) => {
    console.log("received request for daily");

    try {

      const client = await pool.connect()
      const member = await client.query('SELECT * FROM Member');
      const params = { 'member': (member) ? member.rows : null };

      res.render('pages/daily', params );

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
      const client = await pool.connect()
      const member = await client.query('SELECT * FROM Member');
      const job    = await client.query('SELECT * FROM Job');

      const params = { 'member': (member) ? member.rows : null, 
                        'job'  : (job)    ? job.rows    : null  };

      console.log('params ' + params);
      // console.log('job[0].jobname' + job[0].jobname);
      console.log('params.job[0].jobname ' + params.job[0].jobname);
      console.log('member ' + params.member[1]);
      // console.log('params ' + params);

      // res.render('job.html', params);
      res.send(params);
      client.release();
      // return params;

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

      res.render('pages/monthly', params);
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


