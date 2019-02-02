const { sendDeleted } = require('../../middleware/index');

const remove = ({ Category }) => async (req, res, next) => {
  try {
    // const userId = req.user.id;
    const { _id } = req.params;
    // const category = await Category.findOne({ _id, userId });
    const category = await Category.findOne({ _id });
    // await Category.remove({ _id, userId });
    await Category.remove({ _id });
    return sendDeleted(res, { category });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;
