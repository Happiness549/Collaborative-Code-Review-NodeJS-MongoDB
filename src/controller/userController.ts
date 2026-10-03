import { Request, Response } from "express";
import { registerUser } from "../service/userService";


export const register = async (req: Request, res: Response) => {
    const { email, password, role, name } = req.body;

    if (!email || !password || !role || !name) {
        return res.status(400).json({message: "Email, password, role, and name are required"});
    }

    try {
        const user = await registerUser(name, email, password, role);

        return res.status(201).json({message: "User registered successfully",
            user
        });

    } catch (error) {
        console.error("Register Error Details:", error);

        return res.status(500).json({message: "Error registering the user"});
    }
};