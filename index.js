import express from "express";
import path from "path"; // Import path module
import { fileURLToPath } from "url"; // Import fileURLToPath function

const __dirname = path.dirname(fileURLToPath(import.meta.url)); // Define __dirname

const router = express.Router();

router.get("/", function (req, res, next) {
  // Send the index.html file located in the root directory
  res.sendFile(
    path.join(
      __dirname,
      "../assignment_4_3097140_Hamilton_Alexander/index.html"
    )
  );
});
export default router;
