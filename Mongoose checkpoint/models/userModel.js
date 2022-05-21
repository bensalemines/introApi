const mongoose = require("mongoose")


const personSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:Number,
    favoriteFoods:{
        type:[String],
        required:true
    }
})
module.exports=mongoose.model('Person',personSchema)