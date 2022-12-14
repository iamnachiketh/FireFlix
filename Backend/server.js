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
    //const phone_number = req.body.phonenumber;

    //console.log(phone_number)
    db.query("INSERT INTO users (username,userpassword,email) VALUES (?,?,?)",[username,userpassword,email],(err,result)=>{
    //    console.log(err)
    //    console.log(result);
        if(err){
         res.send("connection failed !" + JSON.stringify(err,undefined,2));
        }else{
           res.send(result);
        }
    });
})
app.post('/login',(req,res)=>{
    // console.log(req.body.email,req.body.userpassword);
    const email=req.body.email;
    const userpassword=req.body.userpassword;
    //console.log(req.body.userpassword);
    // db.query(`SELECT * FROM users WHERE email=${req.body.email}`,(err,ans)=>{
    db.query(`SELECT * FROM users WHERE email ='${email}' AND userpassword ='${userpassword}'`,(err,ans)=>{
    //    console.log(err)
    //    console.log(result);
        if(err){
         res.send("there is been a error!!");
        }
    //console.log(typeof result);
    console.log(Object.keys(ans).length);
    console.log(ans);
        if(Object.keys(ans).length)
        {
           res.status(200).send(ans);
        }else{
            res.status(401).send('error !!');
        }
    });
})

//Subscription APIs
//1 - Get user subscription
//Todo:
//  - get  the selected subscription in ui
// app.get('/user/:userId/subscription', (req, res) => {
//     db.query("SELECT email FROM subscription WHERE email=? AND subscription_status=true",[req.params['userId']],(err,ans)=>{
//         if(err){
//              res.send("there is been a error!!");
//             }
//         console.log(ans.length);
//             if(ans.length)
//             {
//                res.status(200).send(ans);
//             }else{
//                 res.status(404).send('Not Found!!');
//             }
//         });
// })

//2 - Insert new subscription in DB
app.post('/user/subscribe',(req,res)=>{
    //console.log(req.body.email,req.body.plan_id);
    const plan_id=req.body.plan_id;
    const email=req.body.email;
    db.query("insert into subscription (email,plan_id,sub_status) values (?,?,?)",[email,plan_id,"inActive"],(err,ans)=>{
        if(err){
         res.send("there is been a error!!");
        }
    //console.log(ans);
        if(ans)
        {
           res.status(200).send(ans);
        }else{
            res.status(401).send('error !!');
        }
    });
})

// 3 - Subscription update!
app.put('/user/subscriptionUpdate',(req,res)=>{
    const plan_id=req.body.plan_id;
    const email=req.body.email;
    //delete previous subscription!
    db.query("Update subscription set plan_id=? where email=?",[plan_id,email],(err,ans)=>{
        if(err){
         res.send("there is been a error!!");
        }
    //console.log(ans.length);
        if(ans)
        {
           res.status(200).send("User Subscription is updated");
        }else{
            res.status(401).send('error !!');
        }
    });
})


app.post('/user/payment',(req,res)=>{
    //console.log(req.body.email,req.body.plan_id);
    const payment_type=req.body.payment_type;
    const email=req.body.email;
    console.log(payment_type);
    console.log(email);
    db.query("insert into payment (email,payment_type,payment_name) values (?,?,?)",[email,payment_type,'check'],(err,ans)=>{
        if(err){
         res.send("there is been a error!!");
        }
    //console.log(ans);
    db.query("Update subscription set sub_status=? where email=?",["Active",email],(err1,ans1)=>{
        if(err1){
         res.send("there is been a error!!");
        }
    console.log(ans1.length);
        res.status(200).send('UPDETED!!');
    });
    //    res.status(200).send('inserted');
         
    });
   
})

app.put('/user/deleteaccount',(req,res)=>{
    const plan_id=req.body.plan_id;
    const email=req.body.email;
    //delete previous subscription!
    db.query("delete from  users where email=?",[email],(err,ans)=>{
        if(err){
         res.send("there is been a error!!");
        }
    //console.log(ans.length);
        if(ans)
        {
           res.status(200).send("the account has been deleted!!!");
        }else{
            res.status(401).send('error !!');
        }
    });
})

app.listen(3001);