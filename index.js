import express from "express";
import path from "path";

const app = express();

// Serve static files from the "frontend" directory
app.use(express.static(path.resolve("frontend")));

// API route
app.get("/api", (req, res) => {
  res.send("API route");
});

// Let frontend router handle all other routes
app.get("*", (req, res) => {
  console.log("hello");
  console.log(req.url);
  res.sendFile(path.resolve("frontend", "index.html"));
  // res.json({ key: "hello" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
