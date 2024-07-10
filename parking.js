var checkk="";
document.getElementById("e").addEventListener('click',function (event){
          event.preventDefault();
          const data={
            "Name":document.getElementById("name").value,
            "Vehicle_No":document.getElementById("vehicle").value,
            "Wheeler":document.getElementById("whels").value,
            "BTime":document.getElementById("time").value,
            "OTP":document.getElementById("otp").value
          };
        //   data["Name"]=document.getElementById('name').value;
        //   data["Vehicle_No"]=document.getElementById('vehicle').value;
        //   data["wheeler"]= document.getElementById('whels').value;
        //   data["Booking_Time"]= document.getElementById('time').value;
        if(data["OTP"]=="")
         console.log("The data is",data);



          fetch("http:localhost:2000/check",{
              method:'POST',
              headers:{
                "Content-Type":"application/json"
              },
              body: JSON.stringify(data),
          }).then((res)=>{//console.log("The respponse is submitted succesfully",);
            return res.json();
          }).then((result)=>{
            if(result.error){
              alert("The Number is already in use ",result.error);
              document.getElementById("f").reset();
            }
            
               
                 
              // document.getElementById("ot").innerHTML='OTP : <input type="Text" id="otp" required>   <div><button type="button" id="verify">Verify</button></div> 'z
             
              else{
               console.log("Your OTP for Validation: ",result.OTP);
               let y=result.OTP;
               checkk+=y;
               alert(`Your OTP for Validation: ${y}`);
               document.getElementById("otpSection").style.visibility="visible";
              }
              
              //document.getElementById("otp").value=result.OTP;
              // document.getElementById('otpSection').classList.remove('hidden');
              // function sleep(ms) {
              //   return new Promise(resolve => setTimeout(resolve, 2000));
              // }
              //  let ans=result.OTP;
              //  if(ans==document.getElementById("otp").value){
              //   alert("The verification is done successfully and data is entered");

              
               //}

               
             
               
               

               //document.getElementById("expenseForm").reset();
          }).catch((err)=>{
            console.log("The error is ",err);
          })
})
document.getElementById("verify").addEventListener('click',function()
{
   //event.preventDefault();
   const data={
    "Name":document.getElementById("name").value,
    "Vehicle_No":document.getElementById("vehicle").value,
    "Wheeler":document.getElementById("whels").value,
    "BTime":document.getElementById("time").value,
  };

  let ans=document.getElementById("otp").value;
  console.log("oootp value",checkk,ans);
  if(checkk===document.getElementById("otp").value){

    fetch("http:localhost:2000/submit",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(data),
  }).then((res)=>{//console.log("The respponse is submitted succesfully",);
    return res.json();
  }).then((result)=>{
    alert("The data is entered successfully");
  }).catch((err)=>{
    console.log("The error is", err);
  })
    
  }
    
  else 
     alert("There is error in submission otp authentication failed");

  document.getElementById("otpSection").style.visibility="hidden";
  document.getElementById("f").reset();
  checkk="";
})


