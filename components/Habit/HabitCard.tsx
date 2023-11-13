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

export default function HabitCard({ habit }: { habit: Habit }) {
  return (
    <Card className="w-[90%] py-4">
      <CardHeader>
        <CardTitle>{habit.action}</CardTitle>
        <CardDescription>Occurance</CardDescription>
      </CardHeader>
    </Card>
  );
}
