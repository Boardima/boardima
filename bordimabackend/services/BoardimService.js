const BoardimModel = require("../models/Boardim");

exports.getAllBoardim = async () => {
  return await BoardimModel.find();
};

exports.createBoardim = async (blog) => {
  return await BoardimModel.create(blog);
};

exports.getBoardimById = async (id) => {
  return await BoardimModel.findById(id);
};

exports.updateBoardim = async (id, blog) => {
  return await BoardimModel.findByIdAndUpdate(id, blog);
};

exports.deleteBoardim = async (id) => {
  return await BoardimModel.findByIdAndDelete(id);
};