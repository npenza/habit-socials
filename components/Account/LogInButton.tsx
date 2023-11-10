"use client";

import React from "react";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";

function LogInButton() {
  return (
    <div>
      <Button onClick={() => signIn()}>Log In</Button>
    </div>
  );
}

export default LogInButton;
