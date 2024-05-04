const express = require('express');
const router = express.Router();

const vtuber_controller = require('../controllers/vtuberController')


router.get('/', vtuber_controller.vtuber_list);
router.get('/:name', vtuber_controller.vtuber);
router.get('/daily_vtuber', vtuber_controller.daily_vtuber);

module.exports = router;
