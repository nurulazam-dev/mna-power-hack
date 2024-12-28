import { Schema, model } from "mongoose";
import signFrom from "jsonwebtoken";
import passwordComplexity from "joi-password-complexity";
import joiFrom from "joi";

const { sign } = signFrom;
const { object, string } = joiFrom;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

userSchema.methods.generateAuthToken = function () {
  const token = sign({ _id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });
  return token;
};

export const User = model("user", userSchema);

export const validate = (data) => {
  const schema = object({
    name: string().required().label("Name"),
    email: string().email().required().label("Email"),
    password: passwordComplexity().required().label("Password"),
  });
  return schema.validate(data);
};

// export default { User, validate };
