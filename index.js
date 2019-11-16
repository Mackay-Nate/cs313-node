const {  Pool } = require('pg')
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
  .get('/times', (req, res) => res.send(showTimes()))
  .get('/getRate', (req, res) => {
    console.log("received request for getRate");
    console.log(req.query.weight);

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

    console.log("params are " + params);
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

  calculateRate = (weight, type) => { 
    console.log("calculateRate function is called");
    console.log("inside calculateRate " + weight);

    switch (type) { 
      case "Stamped Letter":
        if (weight < 1)      { cost = 0.55; }
        else if (weight < 2) { cost = 0.70; }
        else if (weight < 3) { cost = 0.85; }
        else                 { cost = 1.00; }
        break;
      case "Metered Letter":
        if (weight < 1)      { cost = 0.50; }
        else if (weight < 2) { cost = 0.65; }
        else if (weight < 3) { cost = 0.80; }
        else                 { cost = 0.95; }
        break;
      case "Large flat Envelope":
        cost = 0.85 + (0.15 * weight);
        break;
      case "Package":
        // zones 1 & 2
        if      (weight < 4)  { cost = 3.66; }
        else if (weight < 8)  { cost = 4.39; }
        else if (weight < 12) { cost = 5.19; }
        else                  { cost = 5.71; }
        break;
    }

    console.log("cost " + cost);
    console.log("type " + type);

    return cost;
  }