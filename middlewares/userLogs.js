const fs = require("fs");
const path = require("path");

//guardamos la ruta don esta el archivo txt
const logPath = path.join(__dirname, "../userLogs.txt")
const log = fs.readFileSync(logPath, "utf-8")

function userLogs(req, res, next){
    //escribimos el archivo txt
    fs.appendFileSync(logoPath, "El usuario ingreso en :" + req.url + "\n");
    //seguimos el flujo
    next()
}

module.exports = userLogs