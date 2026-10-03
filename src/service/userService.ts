import {User} from "../models/User";
import bcrypt from "bcrypt";

export const registerUser = async (name: string, email: string, password: string, role: "Reviewer" | "Submitter") => {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
    throw new Error("User with this email already exists");
}

const salt = await bcrypt.genSalt(10);
const passwordHash = await bcrypt.hash(password, salt);

const user = await User.create({
    name,
    email,
    password,
    role
});
return user;

}