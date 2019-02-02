const { sendDeleted } = require('../../middleware/index');

const remove = ({ Product }) => async (req, res, next) => {
  try {
    // const userId = req.user.id;
    const { _id } = req.params;
    // const product = await Product.findOne({ _id, userId });
    const product = await Product.findOne({ _id });
    // await Product.remove({ _id, userId });
    await Product.remove({ _id });
    return sendDeleted(res, { product });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;
