"use client";

import React from "react";
import { Button } from "../ui/button";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";

function CreateHabitForm() {
  const queryClient = useQueryClient();

  const onSubmit = async () => {
    try {
      // Send the actual form values in the request
      const response = await axios.post("/api/habit/create", {
        habitMessage: "Party!!",
      });

      // Invalidate query / refresh user's habits
      queryClient.invalidateQueries("auth-habits");
    } catch (error) {
      alert("Error:");
    }
  };

  return (
    <div>
      <Button onClick={onSubmit}>Test submit</Button>
    </div>
  );
}

export default CreateHabitForm;
