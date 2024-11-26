// server.js
const express = require("express");
const bodyParser = require("body-parser");
const registrationController = require("./controllers/registrationController");

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());

// Routes
app.post("/registrations", registrationController.createRegistration);
app.get("/registrations/:id", registrationController.readRegistration);
app.put("/registrations/:id", registrationController.updateRegistration);
app.delete("/registrations/:id", registrationController.deleteRegistration);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
