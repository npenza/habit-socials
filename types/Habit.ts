import { User } from "./User";

export type Habit = {
  id: string;
  action: string;
  userId: string;
  user: User | null;
  habitLogs: HabitLogs[] | null;
  lastUpdated : Date;
};

export type HabitLogs = {
  id: string;
  date: Date;
  status: any;
  habitId: string;
};
