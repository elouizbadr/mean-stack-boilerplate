const _ = require('lodash');
const { sendUpdated } = require('../../middleware/index');

const update = ({ Wishlist }) => async (req, res, next) => {
  try {
    // const userId = req.user.id;
    const { _id } = req.params;
    // const wishlist = await Wishlist.findOne({ _id, userId });
    const wishlist = await Wishlist.findOne({ _id });
    _.extend(wishlist, req.body);

    await wishlist.save();
    return sendUpdated(res, { wishlist });

  } catch (error) {
    next(error);
  }
};

module.exports = update;
