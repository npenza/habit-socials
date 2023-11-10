"use client";

import React from "react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";

function ManageAccountButton({ session }: { session: Session }) {
  return (
    <div>
      <span>Hello {session?.user?.name?.split(" ")[0] || ""}</span>
      <Button variant={"secondary"} onClick={() => signOut()}>
        Sign Out
      </Button>
    </div>
  );
}

export default ManageAccountButton;
