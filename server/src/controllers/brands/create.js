const _ = require('lodash');
const { sendCreated } = require('../../middleware/index');

const create = ({ Brand }) => async (req, res, next) => {
  try {
    // const userId = req.user.id;
    // const brand = new Brand({ userId });
    const brand = new Brand();
    _.extend(brand, req.body);

    await brand.save();
    return sendCreated(res, { brand });

  } catch (error) {

    next(error);
  }
};

module.exports = create;
