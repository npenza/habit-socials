import React from "react";
import { getServerSession } from "next-auth/next";
import LogInButton from "./LogInButton";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ManageAccountButton from "./ManageAccountButton";

async function AccountSection() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    // User is logged in
    return (
      <div>
        <ManageAccountButton session={session} />
      </div>
    );
  } else {
    // User is not logged in
    return (
      <div>
        <LogInButton />
      </div>
    );
  }
}

export default AccountSection;
