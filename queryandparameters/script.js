// const express = require("express");
// const app= express();

// app.get("/getProfile",(req,res)=>{
//     const {username,age} = req.query;
//     res.send("Profile"+ " "+username + " "+age);
// })
// // app.get("/profile/:username",(req,res)=>{
// //     const {username} = req.params;
// //     res.send("Hi"+ " "+username);
// // })
// app.get("/profile/:username/:age",(req,res)=>{
//         const {username,age} = req.params;
//         res.send("Hi"+ " "+username + " "+ age);
//     })
// app.listen(2345,()=>{
//     console.log("server started")
// })


let userData = [
    {
        id:0,
        name:"Sourav",
        address:"Himachal Pradesh",
    },
    {
        id:1,
        name:"Vishvas",
        address:"HARYANA",
    },
    {
        id:2,
        name:"Sushant",
        address:"Himachal Pradesh",
    },
    {
        id:3,
        name:"Taran",
        address:"Pehowa",
    },
    {
        id:4,
        name:"Toran",
        address:"Rohtak",
    },
]
app.get("/allusers",(req,res)=>{
    res.send(usersData);
})

app.get("/getuserbyId", (req,res)=>{
    const {id} =req.query;
    for( let i =0;i<usersData.length;i++){
        if(usersData[i].id==id){
            return res.send(usersData[i])
        }
    }
    res.send("User not found")
})