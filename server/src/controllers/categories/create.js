const _ = require('lodash');
const { sendCreated } = require('../../middleware/index');

const create = ({ Category }) => async (req, res, next) => {
  try {
    // const userId = req.user.id;
    // const category = new Category({ userId });
    const category = new Category();
    _.extend(category, req.body);

    await category.save();
    return sendCreated(res, { category });

  } catch (error) {

    next(error);
  }
};

module.exports = create;
