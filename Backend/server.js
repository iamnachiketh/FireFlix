const express = require('express');
const app = express();
const  db=require('./db/connect.js');
const cors=require('cors');

app.use(express.json());
app.use(cors({origin: true, credentials: true}));

app.post('/register',(req,res)=>{
    const email=req.body.email;
    const username=req.body.username;
    const userpassword=req.body.userpassword;
    const phone_number = req.body.phonenumber;

    console.log(phone_number)
    db.query("INSERT INTO user__account (email,username,userpassword,phone_number) VALUES (?,?,?,?)",[email,username,userpassword,phone_number],(err,result)=>{
    //    console.log(err)
    //    console.log(result);
        if(err){
         res.send("connection failed !" + JSON.stringify(err,undefined,2));
        }else{
           res.send("data hase been included!!");
        }
    });
})

app.listen(3001);