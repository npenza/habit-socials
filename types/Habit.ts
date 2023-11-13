import { Frequency } from "@prisma/client";
import { User } from "./User";

export type Habit = {
  id: string;
  action: string;
  frequency: Frequency;
  userId: string;
  user: User | null;
  habitLogs: HabitLogs[] | null;
};

export type HabitLogs = {
  id: string;
  date: Date;
  status: any;
  habitId: string;
};
