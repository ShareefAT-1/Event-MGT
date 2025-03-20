let allEvents = require("../Jsons/events.json");

module.exports.adminevents = async (req, res) => {
  try {
    res.render("adminEvents", { allEvents });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports.eventForm = async (req, res) => {
  try {
    res.render("adminAdd");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.addEvent = (req, res) => {
  const { eventName, date, time, place } = req.body;

  // const event = req.body;
  // if (event) {
  //   allEvents.push(event);
  allEvents.push({
    eventId: allEvents.length + 1,
    eventName: eventName,
    date: date,
    time: time,
    place: place,
  });
  res.render("adminEvents", { allEvents });
  console.log(allEvents);
  // } else {
  //   res.status(404).json({ message: 'Event not found!' });
  // }
};

module.exports.DeleteEvent = (req, res) => {
  try {
    console.log("from delete");
    const eventId = req.params.eventId;
    const Uevents = allEvents.filter((event) => event.eventId != eventId);
    allEvents = Uevents;
    res.render("adminEvents", { allEvents });
  } catch (error) {
    console.log(error.message)
  }
};
