const express= require('express');
const mysql=require('mysql2');

const app=express();

let dbConnection = mysql.createConnection({
     user:"root",
     host:"localhost",
     password:"123456789",
     database:"ott_subscription"
})

dbConnection.connect();

module.exports=dbConnection;