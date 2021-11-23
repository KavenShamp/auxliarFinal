
const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database.js');


//food por Id
router.get("/foods/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query("SELECT * FROM foods WHERE idLevel = ?", [id], (err, rows, fields1) => {
    if (!err) {

      let resultArray = JSON.parse(JSON.stringify(rows));
      res.json(
        {
          foods: resultArray,
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