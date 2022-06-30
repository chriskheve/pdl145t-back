const express = require('express')
const app = express()
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser')
const connectDB = require('./database/db');
const provinceRoutes = require('./routes/province')
const territoireRoutes = require('./routes/territoire')
const entiteRoutes = require('./routes/entite')

// middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json()); 
app.use(cookieParser())

app.use('/api/province', provinceRoutes);
app.use('/api/territoire', territoireRoutes);
app.use('/api/entite', entiteRoutes);

connectDB()

const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log(`listening on  port ${port} `))