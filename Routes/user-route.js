const express=require("express")
const router=express.Router()

const userctrl=require("../Controllers/user-control")
router.post('/register',userctrl.register);

  module.exports=router;