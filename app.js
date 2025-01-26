var express = require("express");
var app = express();
var bodyPraser = require("body-parser");
app.set("view engine", "ejs");
app.set('views', __dirname + '/views')
app.use(bodyPraser.urlencoded({ extended: true }));
//app.use(express.static(__dirname + "/public"));

const data = require("./datab.json");

app.get('/anasayfa', (req, res) => {
  res.render('anasayfa', { userData: data });
});


app.get("/iletisim", (req, res) => {
  res.render("iletisim");
});
app.get("/izu", (req, res) => {
  res.redirect("https://izu.edu.tr/");
});

app.get("/filtrele", (req, res) => {
  let kriter = req.query.filtre;
  console.log(kriter);
  // Filter the data array
  let filteredData = data.filter(item => item.ilce.includes(kriter));
  res.render('anasayfa', { userData: filteredData });
});

let port = 1858;
app.listen(port, (error) => {
  if (error) throw error;

  console.log("server " + port + " numarali portu dinliyor !!");
});
