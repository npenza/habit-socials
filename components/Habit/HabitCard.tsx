import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Habit } from "@/types/Habit";
import { HabitLogs } from "../../types/Habit";
import HabitCheck from "./HabitCheck";

export default function HabitCard({ habit }: { habit: Habit }) {
  return (
    <Card className="w-[90%] py-4">
      <CardHeader>
        <CardTitle className="capitalize">{habit.action}</CardTitle>
        <CardDescription>
          {habit.frequency.count} times - {habit.frequency.type}
        </CardDescription>
        <CardDescription className="my-4">
          {/* Habit check grid */}
          {habit?.habitLogs?.map((habitLog, index) => (
            <HabitCheck key={index} log={habitLog} />
          ))}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
