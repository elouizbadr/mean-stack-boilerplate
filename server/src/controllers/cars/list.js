const { sendList } = require('../../middleware/index');
const { queryToObject } = require('../../utils/requests');

const list = ({ Car }, { config }) => async (req, res, next) => {
	try {
		let { search, limit, skip, lat, lng, distance } = queryToObject(req.query);

		skip = skip ? parseInt(skip, 10) : 0;
		limit = parseInt(limit, 10);
		limit = limit && limit < config.maxLimitPerQuery ? limit : config.maxLimitPerQuery;

		// const query = { $and : [] };
		const query = { };
		if (search) {
			query.$and = [{ $or: new Car().fieldsToSearch(search) }];
		}
    // if need work with cords
		if (lat && lng) {
			query.$and.push({
				location: {
					$near: {
						$geometry: { type: 'Point', coordinates: [parseFloat(lat), parseFloat(lng)] },
						$maxDistance: parseFloat(distance) || 10
					}
				}
			});
		}

		const count = await Car.find(query).count();
		const businesses = await Car.find(query)
		//.sort({ : 1 })
			.skip(skip)
			.limit(limit);

		return sendList(res, { businesses, count });
	} catch (error) {
		next(error);
	}
};

module.exports = { list };
