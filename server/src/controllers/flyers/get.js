const { sendOne } = require('../../middleware/index');

const get = ({ Flyer }) => async (req, res, next) => {
  try {
    // const userId = req.user.id;
    const { _id } = req.params;
    // const flyer = await Flyer.findOne({ _id, userId });
    const flyer = await Flyer.findOne({ _id });
    return sendOne(res, { flyer });
  } catch (error) {
    next(error);
  }
};

module.exports = get;
