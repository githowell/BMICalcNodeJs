
const express = require ("express");

// const express = require ("body-parser");

const app = express() ;

// app.get('/', (req, res) => {
//     res.send("Hello madlang People nabusog ba kayo?")
// });
app.use(express.urlencoded({extended: true}));

app.get("/", function (req, res) {
    res.sendFile (__dirname + "/bmicalc.html");
});

app.post ("/", function (req, res) {

    let first_num = Number(req.body.first_num);
    let second_num = Number(req.body.second_num);

    let bmi = parseFloat ((second_num) / ((first_num *.01) *(first_num*.01)));
    var newBmi = bmi.toFixed(2);
    // console.log(req.body);

    let results = '';

    if(newBmi<18.5){
        results = 'Underweight';
         }else if(18.5<=newBmi&&newBmi<=24.9){
        results = 'Healthy';
         }else if(25<=newBmi&&newBmi<=29.9){
        results = 'Overweight';
         }else if(30<=newBmi&&newBmi<=34.9){
        results = 'Obese';
         }else if(35<=newBmi){
        results = 'Extremely obese';
         }
    
         res.send("Your body mass index is " + newBmi + ". You are " + results + "!");

});

app.listen (3000, () => {
    console.log("Server Started on port 3000")
});