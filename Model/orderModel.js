import mongoose from "mongoose";

const loadSchema = new mongoose.Schema({
  loadname: {
    type: String,
    required: true,
  },
  volume: {
    type: String,
    requried: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    ordername: {
      type: String,
      required: true,
    },
    load: [
      {
        type: loadSchema,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const orderModel = mongoose.model("conorders", orderSchema);
export default orderModel;
