const express = require('express')
const bodyParser = require('body-parser');
const app = express()


//Required package
const pdf = require("pdf-creator-node");
const fs = require('fs');

// Read HTML Template
var html = fs.readFileSync('views/MiPDFTemplate.html', 'utf8');

var options = {
  format: "A3",
  orientation: "portrait",
  border: "10mm",
  header: {
    height: "45mm",
    contents: '<div style="text-align: center;">Author: Shyam Hajare</div>'
  },
  "footer": {
    "height": "28mm",
    "contents": {
      first: 'Cover page',
      2: 'Second page', // Any page number is working. 1-based index
      default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
      last: 'Last Page'
    }
  }
};
var users = [
  {
    name: "Shyam",
    age: "26"
  },
  {
    name: "Navjot",
    age: "26"
  },
  {
    name: "Vitthal",
    age: "26"
  }
];
var document = {
  html: html,
  data: {
    users: users
  },
  path: "./output.pdf"
}



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

  pdf.create(document, options)
  .then(res => {
      console.log(res)
  })
  .catch(error => {
      console.error(error)
  });
});


app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})


