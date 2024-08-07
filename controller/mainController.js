import { FAILURE, SUCCESS } from "../constant/constants.js";
import { getOrdersService } from "../service/mainService.js";

export const getOrdersController = async (req, res, next) => {
  try {
    const result = await getOrdersService();
    if (result) {
      return res.status(200).json({
        type: SUCCESS,
        message: "Order Fetch successfull",
        errors: [],
        data: result,
      });
    } else {
      return res.status(400).json({
        type: FAILURE,
        message: "Failed to fetch orders",
        errors: [],
      });
    }
  } catch (error) {
    next(error);
  }
};
