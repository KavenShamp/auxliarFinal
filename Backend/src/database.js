const mysql = require('mysql')

const mysqlConnection = mysql.createConnection({//cambiar valores de acuerdo a su MYSQL
    host:'localhost',
    user:'root',
    password:'pinchos',
    database:'vegetablepowerdb',
    multipleStatements:true
})

mysqlConnection.connect(function(err){
    if(err){
        console.error(err)
        return
    }else{
        console.log('conectado DB')
    }

})

module.exports = mysqlConnection;