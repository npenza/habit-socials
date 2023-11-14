import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { Habit } from "@/types/Habit";
import HabitCheck from "./HabitCheck";
import formatStartDate from "@/services/formatStartDate";

export default function HabitCard({ habit }: { habit: Habit }) {

  // Get Start Date
  const startDate = formatStartDate(habit.habitLogs[0].date)

  return (
    <Card className="w-[90%] py-4">
      <CardHeader>
        <CardTitle className="capitalize">{habit.action}</CardTitle>
        Started at {startDate}
        <CardDescription className="my-4">
          {/* Habit check grid */}
          <div className="flex flex-row space-x-2">
          {habit?.habitLogs?.map((habitLog, index, array) => (
            <HabitCheck key={index} log={habitLog} isLast={index === array.length - 1} />
          ))}
          </div>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
