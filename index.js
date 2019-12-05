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
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/db', async (req, res) => {
    try {
      const client = await pool.connect()
      const result = await client.query('SELECT * FROM test_table');
      const results = { 'results': (result) ? result.rows : null};
      res.render('pages/db', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
  .get('/cool', (req, res) => res.send(cool()))
  .get('/home', (req, res) => res.send(home()))
  .get('/times', (req, res) => res.send(showTimes()))
  .get('/populate', (req, res) => {
    console.log("received request for populate");

    var weight = 0, type = 0, cost = 0, type2 = 0;
    var params = {weight: weight, type: type, cost: cost, type2: type2}

    res.render('public/jobs.html', params);
  })

  
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

  .get('/week', async (req, res) => {
    console.log("received request for week");
    try {
      const client = await pool.connect()
      const member = await client.query('SELECT * FROM Member');
      const job    = await client.query('SELECT * FROM Job');

      const params = { 'member': (member) ? member.rows : null, 
                        'job'  : (job)    ? job.rows    : null  };

      res.render('pages/week', params);

      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })

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



  .get('/getRate', (req, res) => {
    console.log("received request for getRate");
    console.log("weight is " + req.query.weight);

    var weight = req.query.weight;
    var type   = req.query.type;
    var cost = calculateRate(weight, type);
    console.log('type ' + type);
    switch (type) { 
      case "Stamped Letter":
        type2 = "letter";
        break;
      case "Metered Letter":
        type2 = "letter";
        break;
      case "Large flat Envelope":
        type2 = "envelope";
        break;
      case "Package":
        type2 = "package";
        break;
    }
    var params = {weight: weight, type: type, cost: cost, type2: type2}

    res.render('pages/getRate', params);
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  showTimes = () => { 
    let result = ''
    const times = process.env.TIMES || 5 
    for (i=0; i < times; i++) {
      result += i + ' '
    }
    return result
  }

