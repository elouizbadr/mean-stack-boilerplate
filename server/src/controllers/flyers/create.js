const _ = require('lodash');
const { sendCreated } = require('../../middleware/index');

const create = ({ Flyer }) => async (req, res, next) => {
  try {
    // const userId = req.user.id;
    // const flyer = new Flyer({ userId });
    const flyer = new Flyer();
    _.extend(flyer, req.body);

    await flyer.save();
    return sendCreated(res, { flyer });

  } catch (error) {

    next(error);
  }
};

module.exports = create;
