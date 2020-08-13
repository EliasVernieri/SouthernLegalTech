const express = require('express')
const bodyParser = require('body-parser');
const app = express()

 



app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  // res.send('Hello World!')
  res.render('index');
})

app.post('/', function (req, res) {
  res.render('index');
  console.log(req.body.doc);
 }) 


app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
