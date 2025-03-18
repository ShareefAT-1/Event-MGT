let allEvents = require("../Jsons/events.json");

module.exports.events = (req, res) => {
  res.render("events", { allEvents });
};

module.exports.singleEvent = (req, res) => {
  const eventId = req.params.id;
  const event = allEvents.find((event) => event.eventId == eventId);
  console.log(event);
  res.render("event", { event });
};

module.exports.regForm = (req, res) => {
  const eventId = req.params.id;

  res.render("register", { eventId });
};

module.exports.regevent = (req, res) => {
  const user = req.body;
  const Uevent = allEvents.map((e) => {
    if (e.eventId == req.params.id) {
        e.registeredUsers.push(user)

    }
    return e
  });

allEvents = Uevent

res.render("events",{allEvents})



};
