const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
    name:{
        type:String ,
        required:true
    },
    age:Number,
    favoriteFoods:{
        type:[String],
        required:true
    }
});

module.exports=mongoose.model('person',UserSchema);