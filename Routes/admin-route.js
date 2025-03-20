const express =require("express")

const router=express.Router();
const adminctrl=require("../Controllers/admin-control")

router.get("/admin/events",adminctrl.adminevents)
router.get("/admin/Addevent",adminctrl.eventForm)
router.post("/admin/Addevent",adminctrl.addEvent)
router.delete("/admin/Deleteevent/:eventId",adminctrl.DeleteEvent)



module.exports=router;