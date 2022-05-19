const express = require("express");
const router = express.Router();
const taskctrl = require("../controllers/taskController")
const isauth = require("../middlewares/auth.middleware").auth

router.post("/createTask",isauth, taskctrl.createTask);
router.post("/markDoneTask",isauth,taskctrl.markDoneTask);
router.get("/tasks/all",isauth,taskctrl.fetchtask);
router.get("/tasks/done",isauth,taskctrl.fetchDoneTask);
router.get("/tasks/pending",isauth,taskctrl.pendingTask);

module.exports = router;
