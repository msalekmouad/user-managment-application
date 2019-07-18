const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');
const path = require('path');
const methodOverride = require('method-override');
const redis = require('redis');
//set the Port
const port = 3000;
// app init
const app = express();


//static directory
app.use(express.static(path.join(__dirname,'public')));
//view engine set
app.engine('handlebars',expressHbs({defaultLayout: 'main'}));
app.set('view engine','handlebars');

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

//method override
app.listen(3000 ,()=>{
    console.log('app started on port http://localhost:3000');
});
