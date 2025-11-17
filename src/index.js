const express = require('express');
// const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig');
const ApiRouter = require('./routes/index');

// const {Airport,City} = require('./models/index');
const db = require('./models/index');
const {Airplane} = require('./models/index');

const setupAndstartServer = async () => {

    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({extended : true}));

    app.use('/api',ApiRouter);

    app.listen(PORT,() => {
        console.log(`Server started at ${PORT}`);
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter : true});
        }

        Airplane.create({
            modelNumber : 'Bombardier CRJ'
        })
    })
}

setupAndstartServer();