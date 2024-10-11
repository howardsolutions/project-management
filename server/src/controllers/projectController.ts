import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProjects = async (req: Request, res: Response): Promise<void> => {
  try {
    const projects = await prisma.project.findMany();

    res.json(projects);
  } catch (err) {
    res.status(500).json({
        message: "Error retrieving projects"
    })
  }
};

