const { sendOne } = require('../../middleware/index');

const get = ({ Client }) => async (req, res, next) => {
  try {
    // const userId = req.user.id;
    const { _id } = req.params;
    // const client = await Client.findOne({ _id, userId });
    const client = await Client.findOne({ _id });
    return sendOne(res, { client });
  } catch (error) {
    next(error);
  }
};

module.exports = get;
