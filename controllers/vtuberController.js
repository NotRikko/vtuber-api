const Vtuber = require('../models/vtuber');
const asyncHandler = require('express-async-handler');



exports.vtuber = asyncHandler(async (req,res,next) => {
    const result = await Vtuber.findOne({ 
        first_name: { 
            $regex: new RegExp(req.params.name, 'i') 
        } 
    })
    .exec();
    if (!result) {
        res.status(404).send("Vtuber not found");
    } else {
        res.send(result);
    }
});

exports.vtuber_list = asyncHandler(async (req, res, next) => {
    const result = await Vtuber.find({})
    .sort({ first_name: 1 })
    .exec()
    res.send(result)
})