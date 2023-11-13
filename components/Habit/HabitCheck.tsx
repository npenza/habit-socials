import React, { ReactNode, useState } from "react";
import { HabitLogs } from "../../types/Habit";
import { CheckIcon, Cross1Icon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import axios from "axios";

export default function HabitCheck({ log }: { log: HabitLogs }) {
  const [status, setStatus] = useState(log.status);

  const handleUpdate = async (updateStatus: string) => {
    // Patch to API
    const result = await axios.patch("/api/habitLog/patchHabitLog", {
      habitLogID: log.id,
      status: updateStatus,
    });

    // Send response, mark as success to update state
    setStatus(result.data.status);
  };

  const HabitMenu = ({ children }: { children: ReactNode }) => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Mark As</DropdownMenuLabel>

          {status == "Empty" && (
            <>
              <DropdownMenuItem onClick={() => handleUpdate("Success")}>
                Done
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleUpdate("Fail")}>
                Won't Complete
              </DropdownMenuItem>
            </>
          )}

          {status != "Empty" && (
            <DropdownMenuItem onClick={() => handleUpdate("Empty")}>
              Reset
            </DropdownMenuItem>
          )}

          <DropdownMenuItem className="text-gray-400 hover:text-gray-500">
            Discard
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

  if (status == "Empty") {
    return (
      <HabitMenu>
        <div className="w-6 h-6 bg-gray-300"></div>
      </HabitMenu>
    );
  }

  if (status == "Success") {
    return (
      <HabitMenu>
        <div className="w-6 h-6 bg-green-400 flex justify-center items-center">
          <CheckIcon color="white" />
        </div>
      </HabitMenu>
    );
  }

  if (status == "Fail") {
    return (
      <HabitMenu>
        <div className="w-6 h-6 bg-red-400 flex justify-center items-center">
          <Cross1Icon color="white" />
        </div>
      </HabitMenu>
    );
  }
}
