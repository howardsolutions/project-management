import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getTasks = async (req: Request, res: Response): Promise<void> => {
    const { projectId } = req.query;

    try {
        const tasks = await prisma.task.findMany({
            where: {
                projectId: Number(projectId)
            },
            include: {
                author: true,
                comments: true,
                attachments: true,
                assignee: true,
            }
        })

        res.json(tasks);
    } catch (err: any) {
        res.status(500).json({
            message: `Error retrieving tasks: ${err.message}`
        })
    }
};
