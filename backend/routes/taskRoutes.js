const express = require("express");
const {
  getTasks,
  getTask,
  getTasksbyDate,
  createTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");
const router = express.Router();

// get all tasks
router.get("/", getTasks);

// get a single task
router.get("/:id", getTask);

// create new task
router.post("/", createTask);

// delete a task
router.delete("/:id", deleteTask);

// update a task
router.patch("/:id", updateTask);

module.exports = router;
