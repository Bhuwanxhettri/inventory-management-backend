const express = require("express");
const app = express();
const apiRoutes = require("./routes/api");
const db = require("./models"); // Adjust the path as needed

app.use(express.json());

// Include API routes
app.use("/api", apiRoutes);

const port = process.env.PORT || 8000;

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
