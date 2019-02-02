const { sendDeleted } = require('../../middleware/index');

const remove = ({ Wishlist }) => async (req, res, next) => {
  try {
    // const userId = req.user.id;
    const { _id } = req.params;
    // const wishlist = await Wishlist.findOne({ _id, userId });
    const wishlist = await Wishlist.findOne({ _id });
    // await Wishlist.remove({ _id, userId });
    await Wishlist.remove({ _id });
    return sendDeleted(res, { wishlist });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;
