const { sendOne } = require('../../middleware/index');

const get = ({ Wishlist }) => async (req, res, next) => {
  try {
    // const userId = req.user.id;
    const { _id } = req.params;
    // const wishlist = await Wishlist.findOne({ _id, userId });
    const wishlist = await Wishlist.findOne({ _id });
    return sendOne(res, { wishlist });
  } catch (error) {
    next(error);
  }
};

module.exports = get;
