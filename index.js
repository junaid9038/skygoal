const express = require('express');
const app = express();



app.use('/',require('./routes/index'));

app.set('view engine','ejs');
app.set('views','./views');

app.listen(8000,function(err){
    if(err){
        console.log('error in the server',err);
        return ;
    }
    console.log('server is running in port 8000');
})