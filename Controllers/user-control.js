 
 
 
 
 module.exports.register=(req, res) => {
    const { eventId, userName } = req.body;
    const event = allEvents.find(e => e.eventId === eventId);
  
    if (event) {
      event.registeredUsers.push({ userName });
      res.json({ message: 'User registered successfully!', event });
    } else {
      res.status(404).json({ message: 'Event not found!' });
    }
  };