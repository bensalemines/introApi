//imports
const express= require('express')
const app=express()

app.get('/style.css', (req,res)=>{
    res.sendFile(__dirname + '/pages/style.css')})
app.get('/video.mov', (req,res)=>{
    res.sendFile(__dirname + '/pages/video.mov')
})
// //function time
// const Middleware = function (req, res, next) {
//     var date = new Date();
//     let day = date.getDay();
//     let hour = date.getHours();
//     if (day >= 1 && day <= 5 && hour >= 9 && hour <= 01) {
//         next();
//     }
//     else {
//         return  res.sendFile(__dirname + '/pages/later.html')
//     }
// };
// app.use(Middleware);

//Navigation
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/pages/home.html')
})
app.get('/aboutUs',(req,res)=>{
    res.sendFile(__dirname + '/pages/aboutUs.html')
})
app.get('/ourServices',(req,res)=>{
    res.sendFile(__dirname + '/pages/ourServices.html')
})
app.get('/booking',(req,res)=>{
    res.sendFile(__dirname + '/pages/booking.html')
})

app.listen(5000,(err)=>{
    err ? console.log('err') : console.log('the app is running on port 5000')
})