const Vtuber = require('../models/vtuber');
const asyncHandler = require('express-async-handler');



exports.vtuber = asyncHandler(async (req,res,next) => {
    const result = await Vtuber.findOne({first_name: 'Enna'}).exec();
    if (!result) {
        res.send('Not found').status(404)
    } else {
        res.send(result);
    }
});