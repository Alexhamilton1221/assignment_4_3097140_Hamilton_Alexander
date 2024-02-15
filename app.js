import express from "express";
import createError from "http-errors";
import logger from "morgan";
import indexRouter from "./index.js";
import mongoose from "mongoose";
import monsterRoutes from "./monsterRoutes.js";
import populateMonsters from "./populateMonsters.js";

// Connect to the MongoDB database
mongoose.connect(
  process.env.DATABASE_URL ||
    "mongodb://localhost/assignment-4-3097140-hamilton-alexander"
);

const app = express();
const PORT = 3002;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// Call the populateMonsters function to populate the database
populateMonsters()
  .then(() => {
    console.log("Monsters populated successfully.");
  })
  .catch((error) => {
    console.error("Error populating monsters:", error);
  });

app.use("/", indexRouter);
app.use("/monsters", monsterRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.send(err.message);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
