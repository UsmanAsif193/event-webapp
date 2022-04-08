const Event = require('../models');

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.postEvent = async (req, res) => {
  try {
    const postedEvent = await Event.create(req.body);
    res.status(201).json(postedEvent);
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    await Event.findByIdAndRemove(req.body.id);
    const updatedEvents = await Event.find();
    res.status(201).json(updatedEvents);
  } catch (error) {
    res.status(500).json({ error });
  }
};
