"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";
import { forwardRef, useState } from "react";

interface FormSelectProps {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  data?: { id: string; name: string }[];
}

export const FormSelect = forwardRef<HTMLInputElement, FormSelectProps>(
  ({ id, name, label, placeholder, data }, ref) => {
    const [value, setValue] = useState("");
    const handleValueChange = (value: string) => {
      setValue(value);
    };
    return (
      <>
        {label && (
          <Label className="text-xs font-semibold text-neutral-700">
            {label}
          </Label>
        )}

        <Select onValueChange={handleValueChange}>
          <SelectTrigger>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent className="overflow-y-auto">
            {data?.map((item, index) => (
              <SelectItem key={index} value={item.id}>
                {item.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <input ref={ref} id={id} name={name} value={value} hidden />
      </>
    );
  }
);

FormSelect.displayName = "FormSelect";
