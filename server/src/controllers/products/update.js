const _ = require('lodash');
const { sendUpdated } = require('../../middleware/index');

const update = ({ Product }) => async (req, res, next) => {
  try {
    // const userId = req.user.id;
    const { _id } = req.params;
    // const product = await Product.findOne({ _id, userId });
    const product = await Product.findOne({ _id });
    _.extend(product, req.body);

    await product.save();
    return sendUpdated(res, { product });

  } catch (error) {
    next(error);
  }
};

module.exports = update;
