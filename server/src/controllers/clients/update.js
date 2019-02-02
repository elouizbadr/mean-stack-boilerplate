const _ = require('lodash');
const { sendUpdated } = require('../../middleware/index');

const update = ({ Client }) => async (req, res, next) => {
  try {
    // const userId = req.user.id;
    const { _id } = req.params;
    // const client = await Client.findOne({ _id, userId });
    const client = await Client.findOne({ _id });
    _.extend(client, req.body);

    await client.save();
    return sendUpdated(res, { client });

  } catch (error) {
    next(error);
  }
};

module.exports = update;
