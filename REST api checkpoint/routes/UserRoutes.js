const express = require('express')
const router = express.Router();
const person = require('../models/User')
//POST 
router.post('/',(req,res)=>{
    person.create(req.body)
    .then((data)=>res.status(201).json('person created'))
    .catch((error)=>console.log('error'))
});

//GET 
router.get('/',(req,res)=>{
    person.find()
    .then((data)=>res.status(201).json(data))
    .catch((error)=>console.log('error'))
});


//DELETE
router.delete('/:personId',(req,res)=>{
    person.findByIdAndDelete(req.params.personId)
    .then((data)=>res.status(201).json('person deleted'))
    .catch((error)=>console.log('error'))
});

//UPDATE
router.put('/:personId',(req,res)=>{
    person.findByIdAndUpdate(req.params.personId,req.body)
    .then((data)=>res.status(201).json(data))
    .catch((error)=>console.log('error'))
});
module.exports=router