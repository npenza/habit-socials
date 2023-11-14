import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    try {

      // Get Habits
      const habits = await prisma.habit.findMany({
        include: {
              habitLogs: true,
              user: true
          },
          orderBy: {
            lastUpdated: 'desc'
          }
      });

      // Return habits data
      res.status(201).json(habits);
    } catch (err) {
        console.log(err)
      res.status(403).json({ err: "Error has occured while making a post." });
    }
  }
}
