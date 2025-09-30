import { Router } from "express";

const router = Router();

router.get("/api/health", (req, res) => {
  res.send("OK");
});

export const healthRoutes = router;
