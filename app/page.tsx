"use client";

import PublicHabitCard from "@/components/Habit/PublicHabitCard";
import { Habit } from "@/types/Habit";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Home() {

  const fetchAllHabits = async () => {
    const response = await axios.get("api/habit/getHabits");
    return response.data;
  };

  const { data: habits, isLoading } = useQuery<Habit[]>({
    queryFn: fetchAllHabits,
    queryKey: ["public-habits"],
  });

  if (isLoading) return <h1>Loading</h1>;

  return (
    <main className="container mx-auto">
      <h1 className="text-8xl text-center font-bold mt-6">Habits</h1>
      <div className="flex flex-col space-y-4 justify-center items-center my-4">
        {habits?.map((habit , index) => <PublicHabitCard key={habit.id} habit={habit} />)}
      </div>
    </main>
  );
}
