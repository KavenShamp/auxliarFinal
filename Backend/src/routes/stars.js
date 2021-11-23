
const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database.js');

//futura actualizacion 

// // Update stars
// router.put('/stars/:id', (req, res) => {
//     const { id } = req.params;
//     // const { pointsFood } = req.body;
//     // console.log(req.body)
    
//     // let sql = 'UPDATE levels SET estrellas = ? WHERE idLevel = ' + id;

//     // mysqlConnection.query(sql, [pointsFood], (err, fields) => {
//     //     if (!err) {
//     //         res.json({
//     //              ok: true ,
//     //              point: pointsFood
//     //             });
//     //     } else {
//     //         console.log(err);
//     //     }
//     // });

// });



module.exports = router;
