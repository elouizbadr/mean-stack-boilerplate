const { sendOne } = require('../../middleware/index');

const get = ({ Product }) => async (req, res, next) => {
  try {
    // const userId = req.user.id;
    const { _id } = req.params;
    // const product = await Product.findOne({ _id, userId });
    const product = await Product.findOne({ _id });
    return sendOne(res, { product });
  } catch (error) {
    next(error);
  }
};

module.exports = get;
