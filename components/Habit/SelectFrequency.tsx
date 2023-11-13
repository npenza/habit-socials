import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectFrequencyProps {
  onChange: (value: string) => void;
  value: string;
}

export default function SelectFrequency({
  onChange,
  value: selectedValue,
}: SelectFrequencyProps) {

  const [internalValue , setInternalValue] = React.useState("")

  const handleValueChange = (currentValue : string) => {
    alert("change")
    onChange(currentValue); // Update the selected value when an item is selected
    setInternalValue(currentValue)
  };

  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Frequency">
          {internalValue || "Frequency"}
        </SelectValue>
      </SelectTrigger>
      <SelectContent onChange={() => handleValueChange("Daily")}>
        <SelectGroup>
          <SelectItem value="Daily" onSelect={() => handleValueChange("Daily")}>
            Day
          </SelectItem>
          <SelectItem value="Weekly" onSelect={() => handleValueChange("Weekly")}>
            Week
          </SelectItem>
          <SelectItem value="Monthly" onSelect={() => handleValueChange("Monthly")}>
            Month
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
