const { sendOne } = require('../../middleware/index');

const get = ({ Category }) => async (req, res, next) => {
  try {
    // const userId = req.user.id;
    const { _id } = req.params;
    // const category = await Category.findOne({ _id, userId });
    const category = await Category.findOne({ _id });
    return sendOne(res, { category });
  } catch (error) {
    next(error);
  }
};

module.exports = get;
