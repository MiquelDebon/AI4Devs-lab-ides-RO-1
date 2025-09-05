import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import userRoutes from "./routes/users";

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 4000;

// CORS
app.use(cors({
  origin: "http://localhost:3000" // React corre en 3000
}));

app.use(express.json());
app.use("/users", userRoutes(prisma));

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
