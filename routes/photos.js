const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const config = require("config");
const jwt_decode=require("jwt-decode");

const router = express.Router();

// Photo model
const Photos = require('../models/profiles');
// User model
const User = require("../models/User");


router.get("/photo", (req, res) =>{
    Photos.find().then(photos=>res.send(photos))
   });
 
   router.get("/photo/:id", (req, res) => {
     
     Photos.findOne(req.param.id).then(photos => res.json(photos));
   });

   router.post("/place", (req, res) => {
   
    const title= req.body.title;
    const source=req.body.source;
    

   const newPhotos = new Photos({
  title: title,
  source:source,
  
});
newPhotos 
.save()
.catch(err => console.log(err));})



module.exports = router;