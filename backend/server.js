const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const petRoute = require("./routes/petRoute");
const app = express();
connectDB();
app.use(express.json());
app.use(cors());
app.use("/api/pet", petRoute);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running in Deveopment  mode on port ${PORT}`);
});
