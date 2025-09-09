import express from "express";
import router from "./routes/notesRoutes.js";

const app = express();
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

app.listen(5001, () => {
  console.log("Server listening on PORT 5001!!");
});
