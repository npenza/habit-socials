import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/prisma";
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
       
      // Get form data
      const { habitMessage } = req.body;

      const result = await prisma.habit.create({
        data: {
            message: habitMessage,
            userId: prismaUser?.id || "" 
        }
      });

      res.status(201).json(result);
    } catch (err) {
      res.status(403).json({ err: "Error has occured while making a post." });
    }
  }
}
