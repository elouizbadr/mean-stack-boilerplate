const { sendList } = require('../../middleware/index');
const { queryToObject } = require('../../utils/requests');

const list = ({ Product }, { config }) => async (req, res, next) => {
	try {
		let { search, limit, skip } = queryToObject(req.query);

		skip = skip ? parseInt(skip, 10) : 0;
		limit = parseInt(limit, 10);
		limit = limit && limit < config.maxLimitPerQuery ? limit : config.maxLimitPerQuery;

		const query = { };
		if (search) {
			query.$and = [{ $or: new Product().fieldsToSearch(search) }];
		}

		const count = await Product.find(query).count();
		const items = await Product.find(query)
		//.sort({ : 1 })
			.skip(skip)
			.limit(limit);

		return sendList(res, { items, count });
	} catch (error) {
		next(error);
	}
};

module.exports = { list };
