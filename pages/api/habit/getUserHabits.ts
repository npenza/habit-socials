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
      // Get session
      const session = await getServerSession(req, res, authOptions);

      // If user is not signed in - return error
      if (!session) {
        return res
          .status(401)
          .json({ message: "Please sign in to access habits." });
      }

      // Get User
      const prismaUser = await prisma.user.findUnique({
        where: { email: session?.user?.email || "" },
        include: {
          habits: true,
        },
      });

      // Return habits data
      res.status(201).json(prismaUser?.habits);
    } catch (err) {
      res.status(403).json({ err: "Error has occured while making a post." });
    }
  }
}
