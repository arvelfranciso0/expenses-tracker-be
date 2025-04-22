import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwtUtils";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      res
        .status(401)
        .json({ message: "Unauthorized: Invalid or missing token" });
      return;
    }

    const token = authHeader.substring(7);
    const verifyTokenResult = verifyToken(token);

    if (!verifyTokenResult.valid) {
      res.status(401).json({ message: "Unauthorized: Invalid token" });
      return;
    }

    req.session.userId = String(verifyTokenResult.decoded?.id);
    next();
  } catch (error) {
    console.error("Error in authMiddleware:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
