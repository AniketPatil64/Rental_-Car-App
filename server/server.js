const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

//env config
dotenv.config();


//routes are imported here
const userRoutes = require('./routes/userRoutes');

//mongodb connection
connectDB();

//rest objects
const app = express();

//middlewares
>>>>>>> 30b594eb4139c782379419b1321110d829d49c54
app.use(cors());
app.use(express.json());
// app.use(morgan('dev'))//when url click it will show in console.{network request will show}

<<<<<<< HEAD
// routes
app.get('/', (req, res) => {
  res.status(200).send({
    message: 'sourabh dudhale'
  })

})

app.use('/api/v1/user', userRoutes);

// port 
const PORT = process.env.PORT || 8080;

// listen
app.listen(PORT, () => {
  console.log(`server is running on ${process.env.DEV_MODE} port no ${PORT}`);
})
=======
//routes
app.get('/',(req,res)=>{
    res.status(200).send({
        message:'sourabh dudhale'
    })
    
})

app.use('/api/v1/user',userRoutes);


//port 
const PORT = process.env.PORT || 8080;

//listen

app.listen(PORT,()=>{
    console.log(`server is running on ${process.env.DEV_MODE} port no ${PORT}`);
})
>>>>>>> 30b594eb4139c782379419b1321110d829d49c54