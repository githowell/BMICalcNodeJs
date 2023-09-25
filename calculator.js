
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

    let first_num = parseFloat(req.body.first_num);
    let second_num = parseFloat(req.body.second_num);

    let bmi = (second_num) / ((first_num *.01) *(first_num*.01));

    // console.log(req.body);

    let results = '';

    if(bmi<18.5){
        results = 'Underweight';
         }else if(18.5<=bmi&&bmi<=24.9){
        results = 'Healthy';
         }else if(25<=bmi&&bmi<=29.9){
        results = 'Overweight';
         }else if(30<=bmi&&bmi<=34.9){
        results = 'Obese';
         }else if(35<=bmi){
        results = 'Extremely obese';
         }
    
         res.send("Your body mass index is " + bmi + ". You are " + results + "!");

});

app.listen (3000, () => {
    console.log("Server Started on port 3000")
});