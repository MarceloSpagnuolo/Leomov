const { Router } = require("express");

const phoneCategory = require("./phoneCategory");

const router = Router();

router.use("/phonecategory", phoneCategory);

module.exports = router;
