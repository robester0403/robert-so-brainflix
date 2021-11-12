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

// Checking a content-type header in the request so we can handle JSON without errors from request.body
// app.use((req, res, next) => {
//   if (
//     req.method === "POST" &&
//     req.headers["content-type"] !== "application/json"
//   ) {
//     res.status(400).send("Server requires application/json");
//   } else {
//     next();
//   }
// });

// app.use(express.static("./public"));

// app.use(express.json());

// This is for the videos route so we need to route it with the file above first. We are just gonna route the two bikes photo and :videosId
// app.get("/", function (req, res) {
//   res.send("A more descriptive message");
// });




