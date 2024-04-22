const Vtuber = require('../models/vtuber');
const asyncHandler = require('express-async-handler');



exports.vtuber = asyncHandler(async (req,res,next) => {
    const search = req.params
    const result = await Vtuber.findOne( {first_name: req.params.name} )
    .exec();
    res.send(result);
});

exports.vtuber_list = asyncHandler(async (req, res, next) => {
    const result = await Vtuber.find({})
    .sort({ first_name: 1 })
    .exec()
    res.send(result)
})