import { PrismaClient } from "@prisma/client";
import { Router } from "express";

export default function userRoutes(prisma: PrismaClient) {
  const router = Router();

  router.get("/", async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
  });

  router.post("/", async (req, res) => {
    const { name, email } = req.body;
    const user = await prisma.user.create({ data: { name, email } });
    res.json(user);
  });

  return router;
}
