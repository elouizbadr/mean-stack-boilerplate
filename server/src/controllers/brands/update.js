const _ = require('lodash');
const { sendUpdated } = require('../../middleware/index');

const update = ({ Brand }) => async (req, res, next) => {
  try {
    // const userId = req.user.id;
    const { _id } = req.params;
    // const brand = await Brand.findOne({ _id, userId });
    const brand = await Brand.findOne({ _id });
    _.extend(brand, req.body);

    await brand.save();
    return sendUpdated(res, { brand });

  } catch (error) {
    next(error);
  }
};

module.exports = update;
