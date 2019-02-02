const _ = require('lodash');
const { sendCreated } = require('../../middleware/index');

const create = ({ Client }) => async (req, res, next) => {
  try {
    // const userId = req.user.id;
    // const client = new Client({ userId });
    const client = new Client();
    _.extend(client, req.body);

    await client.save();
    return sendCreated(res, { client });

  } catch (error) {

    next(error);
  }
};

module.exports = create;
