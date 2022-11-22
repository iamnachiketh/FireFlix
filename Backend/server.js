const express = require('express');
const app = express();
const  db=require('./db/connect.js');
const cors=require('cors');

app.use(express.json());
app.use(cors());

app.post('/register',(req,res)=>{
    const email=req.body.email;
    const username=req.body.username;
    const userpassword=req.body.userpassword;
    const phone_number = req.body.phonenumber;

    db.query("INSERT INTO user__account (email,username,userpassword,phone_number) VALUES (?,?,?,?)",[email,username,userpassword,phone_number],()=>{
       let err;
        if(err){
         res.send("connection failed !" + JSON.stringify(err,undefined,2));
        }else{
           res.send("data hase been included!!");
        }
    });
})

app.listen(3001);