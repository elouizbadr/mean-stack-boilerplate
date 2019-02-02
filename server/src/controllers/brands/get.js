const { sendOne } = require('../../middleware/index');

const get = ({ Brand }) => async (req, res, next) => {
  try {
    // const userId = req.user.id;
    const { _id } = req.params;
    // const brand = await Brand.findOne({ _id, userId });
    const brand = await Brand.findOne({ _id });
    return sendOne(res, { brand });
  } catch (error) {
    next(error);
  }
};

module.exports = get;
