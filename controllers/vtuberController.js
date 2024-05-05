const Vtuber = require('../models/vtuber');
const asyncHandler = require('express-async-handler');
const cron = require('node-cron');

let dailyVtuber = null;

cron.schedule('0 0 * * *', async () => {
    const vtubers = await Vtuber.find({});
    dailyVtuber =  vtubers[Math.floor(vtubers.length*Math.random())];
}, {
    timezone: "America/Los_Angeles"
});

exports.daily_vtuber = asyncHandler(async (req, res, next) => {
    if(!dailyVtuber) {
        dailyVtuber = await Vtuber.findOne({ first_name: "Enna"});
        res.send(dailyVtuber)
    } else {
        res.status(200).json(dailyVtuber);
    }
});

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
    res.status(200).json(result)
});