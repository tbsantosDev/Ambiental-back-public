import { Request, Response } from "express";
import { userService } from "../services/userService.js";
import { jwtService } from "../services/jwtService.js";
import { AuthenticatedRequest } from "../middlewares/auth.js";


export const LoginController = {
  index:  async (req: AuthenticatedRequest, res: Response) => {
    try {
      const currentUser = req.user!;
      return res.json(currentUser);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
  login: async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
      const user = await userService.findByEmail(email);

      if (!user) {
        return res.status(401).json({ message: "E-mail não registrado" });
      }

      user.checkPassword(password, (err, isSame) => {
        if (err) {
          return res.status(400).json({ message: err.message });
        }

        if (!isSame) {
          return res.status(401).json({ message: "Senha incorreta" });
        }

        const payload = {
          id: user.id,
          firstName: user.firstName,
          email: user.email,
        };

        const token = jwtService.signToken(payload, "7d");

        return res.json({ authenticated: true, ...payload, token });
      });
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
};

