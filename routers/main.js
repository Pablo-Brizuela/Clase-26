const express = require("express");
const roture = express.Router();

const controller = require ("../controllers/mainController");
const adminMiddleware = require("../middlewares/admin")

roture.get("/", controller.index);
roture.get("/admin", adminMiddleware, controller.admin)

module.exports = roture;