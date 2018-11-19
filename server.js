const express =require('express');
var fs = require('fs');
const app = express()
const port = 3000

let routesFiles = fs.readdirSync( __dirname + '/routes');
routesFiles.forEach( file => {
    require( __dirname + '/routes/' + file )(app);
});

app.listen(port, () => console.log(`Server is runnning on ${port}!`));

