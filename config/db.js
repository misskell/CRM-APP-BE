const mongoose = require('mongoose');
const db = 'mongodb+srv://adim:U1K2ui1VOytsdtTE@my-projects-6xaae.mongodb.net/test?retryWrites=true&w=majority'

const connectDB = async () => {
    try{
        await mongoose.connect(db,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: true
    }); 
    console.log('Mongo Atlas server is ready');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}
module.exports = connectDB;