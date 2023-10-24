const express = require("express");
const cors = require("cors");

const app = express();

// Configure json response
app.use(express.json());

// Solve cors
app.use(cors());

// Public folder for images
app.use(express.static("public"));

app.get("/teste", (req, res) => {
  return express.response.json({ message: "Server Rodando" });
});

// Routes
const UserRoutes = require("./routes/UserRoutes");
const PetRoutes = require("./routes/PetRoutes");

app.use("/users", UserRoutes);
app.use("/pets", PetRoutes);

app.listen(5000);
