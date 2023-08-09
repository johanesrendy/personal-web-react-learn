const express = require("express");
const { create, add } = require("../controllers/experience.controller");

const router = express.Router();

router.post("/", create);
router.get("/", add);

module.exports = router;
