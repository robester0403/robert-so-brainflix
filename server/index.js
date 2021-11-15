const express = require("express");
const app = express();
const port = process.env.PORT || 8080
const cors = require("cors");


//config
require("dotenv").config();

// middleware
app.use(express.json());
app.use(cors());

// routes go here
// const itemsRoutes = require("./routes/items");
const videosRoutes = require("./routes/videos");

// app.use("/items", itemsRoutes);
app.use("/api/videos", videosRoutes);


// need this to start running the server
app.listen(port, () => {
  console.log(`App is running on PORT ${port}`)
})





