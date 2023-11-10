import React from "react";
import { useSession, signOut } from "next-auth/react";
import LogInButton from "./LogInButton";

function AccountSection() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return null; // Or a spinner, or null if you prefer no output during loading
  }

  if (session) {
    // User is logged in
    return (
      <div>
        Hello, {session.user.name}!
        <button onClick={() => signOut()}>Sign out</button>
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
