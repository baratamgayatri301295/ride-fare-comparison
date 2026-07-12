const express = require("express");
const router = express.Router();

// GET /api/fares
router.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Fare API is working",
    });
});

module.exports = router;