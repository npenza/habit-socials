import { User } from "./User";

export type Habit = {
  id: string;
  action: string;
  frequency: string;
  userId: string;
  user : User | null;
  habitLogs: HabitLog[] | null;
};
