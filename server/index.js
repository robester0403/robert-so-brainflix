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
const videosRoutes = require("./routes/videos");

app.use("/api/videos", videosRoutes);

app.listen(port, () => {
  console.log(`App is running on PORT ${port}`)
})




