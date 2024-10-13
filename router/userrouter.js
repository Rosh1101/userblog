const express = require('express');
const router = express.Router();
const controllers = require("../controllers/routecontroller.js")

router.route("/").get(controllers.home)
router.route("/panel").get(controllers.admin)
router.route("/panel/mypanel").get(controllers.mypanel)
router.route("/register").post(controllers.register)

module.exports = router;