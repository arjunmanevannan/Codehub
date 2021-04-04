const express = require("express")
const router = express.Router();

const fileController = require("./controllers/fileController");
const repoController = require("./controllers/repoController");
const userController = require("./controllers/userController");

router.get("/", repoController.renderHomePage);
router.get("/file", fileController.addFile);
router.get("/repo", repoController.addRepository);
router.get("/user", userController.addUser);
router.patch("/editUser/:id", userController.editUser);

// router.get("/commit/:id", fileController.requestApproval);
router.get("/approve/:id", userController.approve);


// router.get("/addComment", fileController.addComment);
// router.patch("/editComment", fileController.editComment);
// router.get("/deleteComment", fileController.deleteComment);

router.patch("/commit/:id", fileController.commit);
// router.patch("/editRepo", fileController.editRepository);

// router.get("/deleteUser", );
// router.get("/deleteFile", );
// router.get('/deleteRepo',);


//when you save, a commit is generated. It has a status and shows up only when approved. 

module.exports = router;