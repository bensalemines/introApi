const express =require("express");
const app = express();
app.use(express.json());
const mongoose=require('mongoose');
const dotenv = require('dotenv')
dotenv.config()
const Person = require('./models/userModel');
//connect to DB
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('database connected'))
.catch((err)=>console.log(err));

//CREATE AND SAVE A PERSON
var createAndSavePerson = function(done){
let Ines = new Person({name:"Ines",age:25,favoriteFoods:["spaghetti"]});
Ines.save((err,data)=>{
if(err){
    console.log(err)
}else{
    done(null,data)
}
})}

//CREATE MANY PERSONS
let arrayOfPeople = [
    {name:"Sarra",age:28,favoriteFoods:['couscous','sushi','spaghetti','soup']},
    {name:"Safa",age:23,favoriteFoods:['couscous',' ravioli']},
    {name:"Marwa",age:32 ,favoriteFoods:['couscous']},
]
var CreateManyPersons = function(arrayOfPeople, done){
    Person.create(arrayOfPeople, (err, PeopleCreated)=>{
        if(err){
            console.log(err)
        }else{
            console.log(PeopleCreated)
        }
    })
    done(null,PeopleCreated);
};

//FIND ARRAY OF PEOPLE
var findPeopleByName = function(personName , done){
    Person.find({name:personName} , (err,arrayOfResults)=>{
        if(err){
            console.log(err)
        }else{
           done(null,arrayOfResults)
        }
    });
}

//FIND ONE PERSEON BY FAVORITE FOOD
var findPeopleByFood = function(food,done){
    Person.findOne({favoriteFoods:food},(err, foodLover)=>{
        if(err){
            console.log(err)
        }else{
            done(null,foodLover)
        };
    });
}

//FIND ONE PERSON BY ID
var findPopleById = function(personId,done){
    Person.findById({_id:personId},(err,foundPerson)=>{
        if(err){
            console.log(err)
        }else{
            done(null,foundPerson)
        }
    })
}

//UPDATE WITH FIND/UPDATE/SAVE
var findPersonById = function(personId){
    Person.findById({personId},(err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(result)
            result.favoriteFoods.push('hamberger');
            result.save((err,updated)=>{
                if(err){
                    console.log(err)
                }else{
                    console.log(updated)
                }
            })
        }
    })

}

// FIND ONE PERSON AND UPDATE THE AGE
var findPersonByName = function(personName,done){
    var ageToSet = 20;
    Person.findOneAndUpdate({name:personName},{age:ageToSet},{new:true},(err,ageUpdated)=>{
        if(err){
            console.log(err)
        }else{
            done(null,ageUpdated)
        }
    })
}

//FIND ONE PERSON BY ID AND DELETE 
var findPersonAndRemove = function(personId,done){
    Person.findByIdAndRemove({_id:personId},(err,deleted)=>{
        if(err){
            console.log(err)
        }else{
            done(null,deleted)
        }
    });
}

//DELETE PEOPLE
var removePeople = function(peopleName,done){
    Person.remove({name:peopleName},(err,removed)=>{
        if(err){
            console.log(err)
        }else{
            done(null,removed)
        }
    });
}

//SEARCH QUERY HELPERS
var queryChain = function(done){
   let searchedFood='burritos'
People.find({favoriteFoods:{$all:[searchedFood]}})
.sort({name:'asc'})
.limit(2)
.select(-age)
.exec((err,filtredResults)=>{
    if(err){
        console.log(err)
    }else{
        done(null,filtredResults)
    }
})
}



app.listen(1000,()=>console.log('the application is running on port 1000'))