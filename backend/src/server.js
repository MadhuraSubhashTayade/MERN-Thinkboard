import express from "express";
import router from "./routes/notesRoutes.js";
import { connectDb } from "./config/db.js";

import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
dotenv.config();
const PORT = process.env.PORT || 5001;

const app = express();

// middleware - it parses JSON bodies and allows access for req.body
app.use(express.json());

// ratelimiter middleware
app.use(rateLimiter);

// our simple custom middleware
app.use((req, res, next) => {
  console.log(
    "calling my custom middleware which calls before sending response"
  );
  console.log(`Req method is ${req.method} and req url is ${req.url}`);
  next();
});

app.use("/api/notes", router);

// if there are routes for some other category then we can do:
// app.use("/api/users",router)

// app.get("/api/notes", (req, res) => {
//   res.status(200).send("Fetched 5 notes!");
// });

// app.post("/api/notes", (req, res) => {
//   res.status(201).json({ message: "Post created successfully!" });
// });

// app.put("/api/notes/:id", (req, res) => {
//   res.status(200).json({ message: "Post updated successfully!" });
// });

// app.delete("/api/notes/:id", (req, res) => {
//   res.status(200).json({ message: "Post deleted successfully!" });
// });

// first connect to the db, then start the server
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}!!`);
  });
});
