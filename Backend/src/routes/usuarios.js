const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database.js');

//registrar un usuario

router.post('/suscripto',(req,res)=>{
    const {email} = req.body;
    
    mysqlConnection.query(`INSERT INTO users (email) VALUE (?) `, [email],  (error,  fields)=> {
        if (!error) {
            res.send(
                '<h1>Gracias por suscribirte</h1>',
                
            );
        } else {
            res.json(
                {
                 mensaje:'Ha ocurrido un error',
                 error:error
                }
            );
        }
       
      });
})


router.post('/registro',(req,res)=>{
    const {email,nombre,celular,msj} = req.body;
    console.log(req.body)
    
    mysqlConnection.query(`INSERT INTO players (nombre, email, telefono, mensaje) VALUE (?,?,?,?) `, [nombre,email,celular,msj],  (error,  fields)=> {
        if (!error) {
            res.send(
                '<h1>Gracias por registrarte</h1>',
                
            );
        } else {
            res.json(
                {
                 mensaje:'Ha ocurrido un error',
                 error:error
                }
            );
        }
       
      });
})

module.exports = router;