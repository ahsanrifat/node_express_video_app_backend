const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

// import routes
const userRoutes = require("./routers/user_routes");

const app = express();

// ---------Middlewares------------
app.use(express.json());
app.use(cors());
app.use("/user", userRoutes);

// ---------start listening to the server--------
app.listen(3000, () => {
  console.log("Express server listening to 3000");
});

// ----------Database connection-----------
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
  })
  .then(() => console.log("db connected successfully!"))
  .catch(() => console.log("Error connecting db"));
