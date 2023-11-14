"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";
import { Label } from "../ui/label";
import { HabitPicker } from "./HabitPicker";

function CreateHabitForm() {
  const [action, setAction] = useState<string>("");
  const queryClient = useQueryClient();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Send request to create new habit for user
      const response = await axios.post("/api/habit/create", {
        action: action,
      });

      if (response) {
        // Invalidate query / refresh user's habits
        queryClient.invalidateQueries("auth-habits");

        setAction("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-200 py-10 my-5">
      <form className="flex flex-row" onSubmit={(e) => onSubmit(e)}>
        <Label>I will</Label>
        <HabitPicker onChange={setAction} value={action} />
        <Button type="submit">Add Habit</Button>
      </form>
    </div>
  );
}

export default CreateHabitForm;
