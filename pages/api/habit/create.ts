import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/prisma";
import { HabitStatus } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      // Get session
      const session = await getServerSession(req, res, authOptions);

      // If user is not signed in, return an error
      if (!session) {
        return res.status(401).json({ message: "Please sign in to make a post." });
      }

      // Get User
      const prismaUser = await prisma.user.findUnique({
        where: { email: session.user?.email || "" },
      });

      if (!prismaUser) {
        return res.status(401).json({ message: "User cannot be found." });
      }

      // Get form data
      const { action } = req.body;

      // Create a new habit and its initial log entry
      const result = await prisma.habit.create({
        data: {
          action: action,
          habitLogs: {
            create: [
              {
                status: HabitStatus.Empty,
                date: new Date(),
              },
            ],
          },
          userId: prismaUser.id,
        },
      });

      // Handle the result as needed
      res.status(201).json(result);
    } catch (error) {
      console.error(error); // Log the error for debugging
      res.status(500).json({ error: "An error occurred while making a post." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}
