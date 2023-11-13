import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface HabitFormSelections {
  value: string;
  label: string;
}

interface HabitPickerProps {
  onChange: (value: string) => void;
  value: string;
}

export function HabitPicker({ onChange, value }: HabitPickerProps) {
  const [open, setOpen] = React.useState(false);
  const [addHabitState, setAddHabitState] = React.useState(false);

  const handleValueChange = (newValue: string) => {
    onChange(newValue); // Call the onChange callback with the new value
    setOpen(false);
  };

  const habit: HabitFormSelections[] = [
    {
      value: "Read",
      label: "Read",
    },
    {
      value: "Workout",
      label: "Workout",
    },
    {
      value: "Walk",
      label: "Walk",
    },
    {
      value: "Code",
      label: "Code",
    },
  ];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between capitalize"
        >
          {value ? value : "Pick Habit..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput
            icon={addHabitState ? "add" : ""}
            placeholder={addHabitState ? "Add Habit" : "Search Habits..."}
            className="h-9"
          />
          <CommandGroup>
            {habit.map((habitItem) => (
              <CommandItem
                key={habitItem.value}
                value={habitItem.value}
                onSelect={(currentValue) => handleValueChange(currentValue)}
              >
                {habitItem.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === habitItem.value
                      ? "opacity-100"
                      : "opacity-0",
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
