import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    userId: String,
    cost: String,
    product: {
      type: [mongoose.Schema.ObjectId],
      of: Number,
    },
  },
  { timestamps: true }
);
const Transaction = mongoose.model("Transaction", transactionSchema);
export default Transaction;
