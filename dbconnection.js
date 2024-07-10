const mongoose=require("mongoose");

const dbconnect=async()=>{
    try{

       const co=await mongoose.connect('mongodb+srv://mohammadashraf:Ashraf2025@ashrafcluster.awjlh7p.mongodb.net/vehicle?retryWrites=true&w=majority&appName=Ashrafcluster');
       console.log("The database is connected successfully  ",co.connection.host,co.connection.name );
    }
    catch(err)
    {
        console.log(err);
        throw new Error("There is error in connecting");


    }


}
module.exports=dbconnect;



