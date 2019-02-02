const _ = require('lodash');
const { sendCreated } = require('../../middleware/index');

const create = ({ Wishlist }) => async (req, res, next) => {
  try {
    // const userId = req.user.id;
    // const wishlist = new Wishlist({ userId });
    const wishlist = new Wishlist();
    _.extend(wishlist, req.body);

    await wishlist.save();
    return sendCreated(res, { wishlist });

  } catch (error) {

    next(error);
  }
};

module.exports = create;
