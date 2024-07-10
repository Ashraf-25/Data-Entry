const express=require("express")
const asyncHandler=require("express-async-handler")
const ownpage=require("./schema")
const otpGenerator = require('otp-generator');
// const app=express();
// app.use(express.json())


const getcontact= asyncHandler(async (req,res)=>
    {
         const check=await ownpage.find();
        // console.log(check);
         res.status(200).json(check);

    })
const get2=asyncHandler (async (req,res)=>{

    console.log(req.body);
       
    const {Name,Vehicle_No,Wheeler,BTime}=req.body;
   // console.log(Name,Vehicle_No,Wheeler,BTime);

   if(!Name || !Vehicle_No || !Wheeler || !BTime)
       {
           console.log("There was error")
           throw new error("Problem in creating contact")
       }
      
       
   // console.log("The time is",BTime);

    try{
       let user = await ownpage.findOne({ Name });
       if (user) {
          // alert("Name is not Unique");
          
           return res.status(400).json({error:"NOT UNIQUE"});
        }

           
            const otp = otpGenerator.generate(6, { digits: true, alphabets: false, upperCase: false, specialChars: false });
     
                // For demo purposes, log the OTP to console (do not do this in production)
              console.log('Generated OTP:', otp);
            
          
     
               return  res.status(200).json({OTP:otp});
            
           
       }
       //console.log(req.body.OTP);
      
    
      
      catch(err)
      {
         console.log("There was an error in generating otp");
         throw new Error(err);
      }
})
const createcontact=asyncHandler(async(req,res)=>
    {
        const {Name,Vehicle_No,Wheeler,BTime}=req.body;
        try{
            const check= await ownpage.create({Name,Vehicle_No,Wheeler,BTime});
                   console.log("Created", req.body);
                  return res.status(200).json(req.body);
           }
         catch(err)
         {
            console.error(error);
            res.status(500).json({ message: 'Error creating vehicle record', error });
         }
    })


    module.exports={getcontact,createcontact,get2}
