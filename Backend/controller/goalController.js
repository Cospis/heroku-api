const asyncHAndler = require("express-async-handler");

const count = require("../models/countModels");

const getCount = asyncHAndler(async (req, res) => {
  const Count = await count.find();
  res.status(200).json(Count.reverse());
});

const setCount = asyncHAndler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add a text field");
  }

  const Count = await count.create({
    text: req.body.text,
  });

  res.status(200).json(Count);
});

const updateCount = asyncHAndler(async (req, res) => {
  res.status(200).json({ message: `updateCount ${req.params.id}` });
});

const deleteCount = asyncHAndler(async (req, res) => {
  res.status(200).json({ message: `deleteCount ${req.params.id}` });
});
module.exports = {
  getCount,
  setCount,
  updateCount,
  deleteCount,
};
