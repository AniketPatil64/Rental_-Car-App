const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
          await mongoose.connect(process.env.MONGO_URI);
          console.log(`Connected to Mongodb Database ${mongoose.connection.host}`)
    }catch(err){
        console.log(`MONGO Connect Error ${err}`);
    }
}

<<<<<<< HEAD
module.exports = connectDB;
=======
module.exports = connectDB;
>>>>>>> 30b594eb4139c782379419b1321110d829d49c54
