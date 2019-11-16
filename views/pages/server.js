const express = require('express')
const app = express()
const port = 5000

app.use(express.static('pages'))

app.listen(port, () => console.log('Listening'));

app.get('/home.html', function (req, res) { 
  res.send('Got a request for /home.html')
})

