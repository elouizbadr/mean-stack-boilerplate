const _ = require('lodash');
const { sendUpdated } = require('../../middleware/index');

const update = ({ Flyer }) => async (req, res, next) => {
  try {
    // const userId = req.user.id;
    const { _id } = req.params;
    // const flyer = await Flyer.findOne({ _id, userId });
    const flyer = await Flyer.findOne({ _id });
    _.extend(flyer, req.body);

    await flyer.save();
    return sendUpdated(res, { flyer });

  } catch (error) {
    next(error);
  }
};

module.exports = update;
