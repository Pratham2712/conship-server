import bcrypt from "bcrypt";
import { promisify } from "util";
import userModel from "../Model/userModel.js";

export const checkUserService = async (data) => {
  const res = await userModel.find({ username: data });
  return res;
};

const hashPassword = promisify(bcrypt.hash);
export const loginService = async (data) => {
  const saltRounds = 10;
  const hashedPassword = await hashPassword(data.password, saltRounds);
  const res = await userModel.create({
    username: data.username,
    password: hashedPassword,
  });
  return res;
};

export const getUser = async (data) => {
  const res = await userModel.findById(data);
  return res;
};
