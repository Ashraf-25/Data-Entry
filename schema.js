const { Timestamp } = require("mongodb");
const mongoose=require("mongoose")

const mymodel=  mongoose.Schema({
    Name:
    {
        type:String,
        require:[true]
    },
    Vehicle_No:
    {
        type:String,
        require:[true]
    },
    Wheeler:
    {
        type:Number,
        require:[true]
    },
    BTime:
    {
        type:String,
        require:[true]
    },
   


})
module.exports=mongoose.model('vehi',mymodel);
