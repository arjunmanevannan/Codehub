const express = require("express")
const router = express.Router();

const homeController = require("./controllers/homeController");

router.get("/", homeController.renderHomePage);
router.get("/file", homeController.addFile);
// router.post("/repo", homeController.addRepository);
router.get("/user", homeController.addUser);

module.exports = router;