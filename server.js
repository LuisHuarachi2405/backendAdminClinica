const express = require('express');
const app = express();
const bodyParser = require('body-parser');

require('./database')

app.use(bodyParser.urlencoded({extended : true}));

app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.use('/', function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-Requested-With, Content-Type, Content-Type');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
})

app.options("/*", function(req, res, next){
    res.sendStatus(200)
})

const router = express.Router();

router.get('/', function(req, res){
    res.json({message: 'API de sistema teleconsulta'})
})

const userRoute = require('./routes/user')
const patientRoute = require('./routes/patient')


router.use('/user',userRoute);
router.use('/patient',patientRoute);



app.use('/api',router);



app.listen(port)
console.log('la magia sucede en el puerto '+ port);
  

