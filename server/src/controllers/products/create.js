const _ = require('lodash');
const { sendCreated } = require('../../middleware/index');

const create = ({ Product }) => async (req, res, next) => {
  try {
    // const userId = req.user.id;
    // const product = new Product({ userId });
    const product = new Product();
    _.extend(product, req.body);

    await product.save();
    return sendCreated(res, { product });

  } catch (error) {

    next(error);
  }
};

module.exports = create;
