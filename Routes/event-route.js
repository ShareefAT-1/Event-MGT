const express = require("express");
const router = express.Router();

const evntCntlr=require("../Controllers/event-control")

router.get("/events",evntCntlr.events);

router.get("/view-event/:id",evntCntlr.singleEvent)

router.get("/registerform/:id",evntCntlr.regForm)

router.post("/registerEvent/:id",evntCntlr.regevent)

module.exports=router;