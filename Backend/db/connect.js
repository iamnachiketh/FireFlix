const express= require('express');
const mysql=require('mysql');

const app=express();

module.exports = mysql.createConnection({
     users:"root",
     host:"localhost",
     password:"password",
     database:"ott_subscription"
});

