import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { now } from "next-auth/client/_utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "PATCH") {
    try {
      // Get session
      const session = await getServerSession(req, res, authOptions);

      // If user is not signed in - return error
      if (!session) {
        return res
          .status(401)
          .json({ message: "Please sign in to update habits." });
      }

      // Get Habit Log ID
      const { habitLogID, status } = req.body;

      // Update the current log
      const habitLogResult = await prisma.habitLog.update({
        where: {
          id: habitLogID,
        },
        data: {
          status: status,
        },
      });

      const habit = await prisma.habit.update({
        where: {
          id: habitLogResult.habitId,
        },
        data: {
          lastUpdated: new Date(), // This will set lastUpdated to the current date and time
        },
      })

      // Return habits data
      res.status(201).json(habitLogResult);
    } catch (err) {
      res
        .status(403)
        .json({ err: "Bad request when trying to update habit log." });
    }
  }
}
