"use client";

import CreateHabitForm from "@/components/Habit/CreateHabitForm";
import axios from "axios";
import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchAuthHabits = async () => {
  const response = await axios.get("api/habit/getUserHabits");
  return response.data;
};

function Dashboard() {
  const { data: habits, isLoading } = useQuery<Habit[]>({
    queryFn: fetchAuthHabits,
    queryKey: ["auth-habits"],
  });

  if (isLoading) return <h1>Loading</h1>;

  return (
    <div>
      Set up a Habit!
      <CreateHabitForm />
      
      Your Habits
      {habits?.map((habit) => <p key={habit.id}>{habit.message}</p>)}
    </div>
  );
}

export default Dashboard;
