import orderModel from "../Model/orderModel.js";

export const getOrdersService = async () => {
  const res = await orderModel.find({});

  return res;
};
