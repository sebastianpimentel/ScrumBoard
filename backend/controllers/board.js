const Board = require("../models/board");

const saveTask = async (req, res) => {
  if (!req.body.name || !req.body.description)
    return res.status(400).send("Process failed: incomplete data");

  const board = new Board({
    userId: req.user._id,
    name: req.body.name,
    description: req.body.description,
    taskStatus: "to-do",
  });
  const result = await board.save();
  if (!result)
    return res.status(400).send("process failed: failed to register task");
  return res.status(200).send({ result });
};

module.exports = { saveTask };
