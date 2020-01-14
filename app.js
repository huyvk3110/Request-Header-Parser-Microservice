const express = require('express');
const app = express();
const routerApi = require('./router/router.api')

app.use(express.static(__dirname + '/public'));
app.use('/api',routerApi);

const listen = app.listen(process.env.PORT || 3000, function(){
    console.log('Server start at port: ', listen.address().port);
})