"use client"

import React from "react";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";

function AccountButton() {

  return (
    <div>
      <Button onClick={signIn}>Log In</Button>
    </div>
  );
}

// AccountButton.propTypes = {}

export default AccountButton;
