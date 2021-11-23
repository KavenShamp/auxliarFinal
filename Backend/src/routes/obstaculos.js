const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database.js');


//level por Id
router.get("/levels/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query("SELECT * FROM levels WHERE idLevel = ?", [id], (err1, rows1, fields1) => {
      if (!err1) {
        
        let resultArray1 = JSON.parse(JSON.stringify(rows1));
        let levelid = resultArray1[0].idLevel;
        
        mysqlConnection.query("SELECT * FROM obstacles WHERE idLevel = ?", [levelid], (err2, rows2, fields2) => {            
            if (!err2) {
              var resultArray2 = JSON.parse(JSON.stringify(rows2));
              
              res.json(
                    {
                        levels: resultArray1[0],
                        obstacles: resultArray2
                    }
              );
            } else {
              res.status(400).json({
                ok: false,
                mensaje: "Ha ocurrido un problema para generar la respuesta",
              });
            }
          }
        );
      } else {
        res.status(400).json({
          ok: false,
          mensaje: "Ha ocurrido un problema para generar la respuesta",
        });
      }
    }
  );
});

module.exports = router;
