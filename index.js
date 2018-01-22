var express=require("express");
var bodyParser=require("body-parser");
var request = require('request');
var app=express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.listen(3000,function(){
  console.log("Server started");
});
app.get("/",function(req,res){
     res.render("index");
})

app.get("/movie",function(req,res){
   //var name=req.body.username;
   var term=req.query.search;
   console.log("Term: "+term);
//---------------------------//
request("http://www.omdbapi.com/?s="+term+"&apikey=743e9923", function (error, response, body) {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
   movieData=JSON.parse(body);
   res.render("movie",{mData:movieData["Search"][0]});
});
//--------------------------//


})
