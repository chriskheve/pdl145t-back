const mongoose = require('mongoose');

const connectDB = async () =>{
    try {
        
        // await mongoose.connect('mongodb://localhost:27017/PDL145T_BCECO',{
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true
        // });
        await mongoose.connect('mongodb+srv://chriskheve:chriskheve@pdl145t.4nbbbqp.mongodb.net/PDL145T_BCECO?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Database connection success')
    } catch (err) {
        console.log(err)
    }
}

module.exports= connectDB;