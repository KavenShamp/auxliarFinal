const express = require('express')
const app = express()
const bodyParser =  require('body-parser');

app.set('port',process.env.PORT || 3000)

app.use(express.json());
//app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    
    next();
});

app.use(require('./routes/usuarios'))
app.use(require('./routes/obstaculos'))
app.use(require('./routes/foods'))
//app.use(require('./routes/stars'))//futura actualizacion 

app.listen(app.get('port'),()=>{
    console.log(`server en ${app.get('port')}`);
})
