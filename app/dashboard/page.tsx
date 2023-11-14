"use client";

import CreateHabitForm from "@/components/Habit/CreateHabitForm";
import axios from "axios";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import HabitCard from "@/components/Habit/HabitCard";
import { Habit } from "@/types/Habit";

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
    <div className="container">
      Set up a Habit!
      <CreateHabitForm />
      Your Habits
      <div className="grid grid-cols-2 justify-items-center gap-y-8 mt-4">
        {habits?.map((habit) => <HabitCard key={habit.id} habit={habit} />)}
      </div>
    </div>
  );
}

export default Dashboard;
