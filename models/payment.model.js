const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  bookingId: {
    type: [mongoose.SchemaTypes.ObjectId],
    ref: "Booking",
    required: true,
    unique: true,
  },

  amount: { type: Number, required: true },

  status: { type: String, required: true, default: "PENDING" },

  createdAt: { type: Date, default: () => Date.now(), immutable: true },

  updatedAt: { type: Date, default: () => Date.now(), immutable: true },
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
