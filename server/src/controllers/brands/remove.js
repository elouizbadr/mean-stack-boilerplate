const { sendDeleted } = require('../../middleware/index');

const remove = ({ Brand }) => async (req, res, next) => {
  try {
    // const userId = req.user.id;
    const { _id } = req.params;
    // const brand = await Brand.findOne({ _id, userId });
    const brand = await Brand.findOne({ _id });
    // await Brand.remove({ _id, userId });
    await Brand.remove({ _id });
    return sendDeleted(res, { brand });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;
