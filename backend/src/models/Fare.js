const mongoose = require("mongoose");

const fareSchema = new mongoose.Schema(
  {
    searchId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Search",
    },

    provider: {
      type: String,
      enum: ["uber", "ola", "rapido"],
    },

    fare: Number,

    eta: Number,

    availability: Boolean,

    expiresAt: Date,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Fare", fareSchema);
