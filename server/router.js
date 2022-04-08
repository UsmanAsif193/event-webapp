const express = require('express');
const router = express.Router();
const eventsController = require('./controllers/eventsController');

router.get('/events', eventsController.getEvents);
router.post('/events', eventsController.postEvent);
router.delete('/events', eventsController.deleteEvent);

module.exports = router;
