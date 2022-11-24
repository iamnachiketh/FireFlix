const express = require('express');
const app = express();
const  db=require('./db/connect.js');
const cors=require('cors');

app.use(express.json());
app.use(cors({origin: true, credentials: true}));

app.get('/login',(req,res)=>{
    console.log(req.body.email,req.body.userpassword);
    const email=req.body.email;
    const userpassword=req.body.userpassword;
    db.query("SELECT email FROM user__account WHERE email=? AND userpassword=?",[email,userpassword],(err,result)=>{
    //    console.log(err)
    //    console.log(result);
        if(err){
         res.send("there is been a error!!");
        }
    console.log(typeof result);
    console.log(result);
        if(Object.keys(result).length>0)
        {
           res.send(result);
        }else{
            res.status(401).send('error !!');
        }
    });
})
app.listen(5000);