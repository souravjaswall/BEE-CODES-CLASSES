const express = require("express");

const app = express();

app.get("/profile", (req, res) => {
    const { username } = req.query; // Corrected destructuring
    console.log(username);
    res.send("Profile page of " + username); // Corrected string concatenation
});

app.listen(3456, (req, res)=> {
console.log("server started")
})