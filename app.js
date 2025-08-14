const express = require('express');
const app = express();
const userModel = require("./usermodel");


app.get("/", (req, res) => {
    res.send("Hey");
})
app.get("/create", async (req, res) => {
    let createdUser = await userModel.create({
        name: "John",
        username: "john",
        email: "johndoe@gmail.com"

    })
    res.send(createdUser);
})
app.get("/update", async (req, res) => {
    updatedUser = await userModel.findOneAndUpdate({username: "john"}, {name: "Nishith"} , {new: true} );
    res.send(updatedUser);
   
})



app.listen(3000);