const express=require("express")
const router=express.Router();
const {getcontact,createcontact,get2}=require('./createcontroller')

router.route('/').get(getcontact);
router.route('/check').post(get2);
router.route('/submit').post(createcontact);
router.route('/:id').get();

module.exports=router;
