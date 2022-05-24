let express=require('express')
let app= express();
app.use(express.json());
let dotenv = require('dotenv')
dotenv.config({path:'./config/.env'});
let mongoose = require('mongoose')
//CONNECT DATABASE
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('database connected'))
.catch((err)=>console.log('err'))

//ROUTES
app.use('/api/users' , require('./routes/UserRoutes'));

app.listen(8000,console.log('app is running on port 8000'));