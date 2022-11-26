const express = require('express');
const app = express();
const  db=require('./db/connect.js');
const cors=require('cors');

app.use(express.json());
app.use(cors({origin: true, credentials: true}));

app.post('/login',(req,res)=>{
    console.log(req.body.email,req.body.userpassword);
    const email=req.body.email;
    const userpassword=req.body.password;
    db.query("SELECT email,userpassword FROM user__account WHERE email=? AND userpassword=?",[email,userpassword],(err,ans)=>{
    //    console.log(err)
    //    console.log(result);
        if(err){
         res.send("there is been a error!!");
        }
    //console.log(typeof result);
    console.log(ans.length);
        if(ans.length)
        {
           res.status(200).send(ans);
        }else{
            res.status(401).send('error !!');
        }
    });
})
app.listen(5000);