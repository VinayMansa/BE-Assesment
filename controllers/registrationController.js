// registrationController.js
const { Pool } = require("pg");

// PostgreSQL connection setup
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "BE-Task",
  password: "Vinzz@123",
  port: 5432,
});

// Create registration
async function createRegistration(req, res) {
  const { name, email, dateOfBirth } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO Registration (Name, Email, DateOfBirth) VALUES ($1, $2, $3) RETURNING *",
      [name, email, dateOfBirth]
    );
    res.status(201).json({
      success: true,
      message: "User Registered successfully",
      data: result.rows[0],
    });
  } catch (err) {
    console.error("Error creating registration:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Read registration
async function readRegistration(req, res) {
  const { id } = req.params;

  try {
    const result = await pool.query(
      "SELECT * FROM Registration WHERE ID = $1",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Registered user not found",
      });
    }

    res.json({
      success: true,
      message: "Registered user retrieved successfully",
      data: result.rows[0],
    });
  } catch (error) {
    console.error("Error reading registration:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

// Update registration
async function updateRegistration(req, res) {
  const { id } = req.params;
  const { name, email, dateOfBirth } = req.body;

  try {
    const result = await pool.query(
      "UPDATE Registration SET Name = $1, Email = $2, DateOfBirth = $3 WHERE ID = $4 RETURNING *",
      [name, email, dateOfBirth, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Registered user not found",
      });
    }

    res.json({
      success: true,
      message: "Registered user updated successfully",
      data: result.rows[0],
    });
  } catch (error) {
    console.error("Error updating registration:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

// Delete registration
async function deleteRegistration(req, res) {
  const { id } = req.params;

  try {
    const result = await pool.query(
      "DELETE FROM Registration WHERE ID = $1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Registration not found",
      });
    }

    res.json({
      success: true,
      message: "Registration deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting registration:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

module.exports = {
  createRegistration,
  readRegistration,
  updateRegistration,
  deleteRegistration,
};
