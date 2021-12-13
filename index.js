const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = 6000;
require("dotenv").config();
const routerUrls = require('./route/userRouter')




// MiddleWare
app.use(express.json());
app.use(cors());

//routes
const AccountController = require('./controller/accountController');

app.get("/users/", AccountController.all);
app.post("/users/create", AccountController.create);


//routes connected
app.use('/app', routerUrls);

// connect server to  port
app.listen(PORT, () => console.log("server is running"));