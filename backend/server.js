import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import petRoute from "./routes/petRoute.js";
const app = express();
connectDB();
app.use(express.json());
app.use(cors());
app.use("/api/pet", petRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running in Deveopment  mode on port ${PORT}`);
});
