const express = require('express');
const app = express();
const expressEjsLayouts = require('express-ejs-layouts');
require('./config/mongoose');
 



app.use(express.urlencoded());// help to extract the data form body
app.use(expressEjsLayouts);

app.use('/',require('./routes/index'));

app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.set('view engine','ejs');
app.set('views','./views');

app.listen(8000,function(err){
    if(err){
        console.log('error in the server',err);
        return ;
    }
    console.log('server is running in port 8000');
})