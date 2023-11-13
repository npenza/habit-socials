import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/prisma";
import { FrequencyType, HabitStatus } from "@prisma/client";
import { randomUUID } from "crypto";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    // Create Post
    try {
      // Get session
      const session = await getServerSession(req, res, authOptions);

      // If user is not signed in - return error
      if (!session) {
        return res
          .status(401)
          .json({ message: "Please sign in to make a post." });
      }

      // Get User
      const prismaUser = await prisma.user.findUnique({
        where: { email: session?.user?.email || "" },
      });

      if (!prismaUser) {
        return res.status(401).json({ message: "User cannot be found." });
      }

      // Get form data
      const { action, frequency } = req.body; // Destructure 'action' and 'frequency' directly

      let frequencyType;

      // Map the frequency value to the corresponding enum value
      switch (frequency) {
        case "Daily":
          frequencyType = FrequencyType.Daily;
          break;
        case "Weekly":
          frequencyType = FrequencyType.Weekly;
          break;
        case "Monthly":
          frequencyType = FrequencyType.Monthly;
          break;
        default:
          // Handle invalid frequency values here if needed
          return res.status(400).json({ message: "Invalid frequency value." });
      }

      const habitId = randomUUID().toString();

      const result = await prisma.habit.create({
        data: {
          action: action,
          frequency: {
            create: {
              id: habitId,
              type: frequencyType, // Use the mapped frequencyType
              count: 10, // You can set this value as needed
            },
          },
          habitLogs: {
            create: [
              {
                status: HabitStatus.Empty,
                date: new Date(), // Provide the date field, or customize it as needed
              },
            ],
          },
          userId: prismaUser.id, // No need for the nullish coalescing operator
        },
      });

      // Handle the result as needed
      res.status(201).json(result);
    } catch (err) {
      console.error(err); // Log the error for debugging
      res.status(500).json({ err: "Error has occurred while making a post." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." }); // Return 405 for unsupported methods
  }
}
