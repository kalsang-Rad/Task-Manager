const taskModel = require("../model/taskModel");
const mongoose = require("mongoose");

// get all tasks
const getTasks = async (req, res) => {
  const tasks = await taskModel.find({}).sort({ createdAt: -1 });
  res.status(200).json(tasks);
};

const createTask = async (req, res) => {
  const { title } = req.body;
  const getFormattedDate = () => {
    const currentDate = new Date();

    // Get the day, month, and year components
    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Month is zero-based
    const year = currentDate.getFullYear();

    // Combine the components into the desired format
    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
  };

  const date = getFormattedDate();

  try {
    const task = await taskModel.create({
      title,
      date,
    });
    res.status(200).json(task);
  } catch (err) {
    res.status(400).json({ error: "Error msg " });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      error: "No such task",
    });
  }

  const task = await taskModel.findOneAndDelete({ _id: id });
  if (!task) {
    return res.status(404).json({ error: "No such task" });
  }

  return res.status(200).json(task);
};

module.exports = {
  getTasks,
  createTask,
  deleteTask,
};
