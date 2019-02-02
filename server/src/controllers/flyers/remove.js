const { sendDeleted } = require('../../middleware/index');

const remove = ({ Flyer }) => async (req, res, next) => {
  try {
    // const userId = req.user.id;
    const { _id } = req.params;
    // const flyer = await Flyer.findOne({ _id, userId });
    const flyer = await Flyer.findOne({ _id });
    // await Flyer.remove({ _id, userId });
    await Flyer.remove({ _id });
    return sendDeleted(res, { flyer });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;
