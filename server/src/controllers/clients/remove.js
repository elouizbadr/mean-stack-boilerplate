const { sendDeleted } = require('../../middleware/index');

const remove = ({ Client }) => async (req, res, next) => {
  try {
    // const userId = req.user.id;
    const { _id } = req.params;
    // const client = await Client.findOne({ _id, userId });
    const client = await Client.findOne({ _id });
    // await Client.remove({ _id, userId });
    await Client.remove({ _id });
    return sendDeleted(res, { client });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;
