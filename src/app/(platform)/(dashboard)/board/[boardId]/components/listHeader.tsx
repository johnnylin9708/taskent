"use client";

import { List } from "@/API";
import { updateList } from "@/actions/updateList";
import { FormInput } from "@/components/form/formInput";
import { useAction } from "@/hooks/useAction";
import { ElementRef, useRef, useState } from "react";
import { toast } from "sonner";
import { useEventListener } from "usehooks-ts";
import { ListOptions } from "./listOptions";

interface ListHeaderProps {
  data: List;
  onAddCard: () => void;
}

export const ListHeader = ({ data }: ListHeaderProps) => {
  const [name, setName] = useState(data.name);
  const [isEditing, setIsEditing] = useState(false);

  const formRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    });
  };

  const disabledEditing = () => {
    setIsEditing(false);
  };

  const { execute } = useAction(updateList, {
    onSuccess: (data) => {
      toast.success(`Renamed to "${data.name}"`);
      setName(data.name);
      disabledEditing();
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const handleSubmit = (formData: FormData) => {
    const name = formData.get("name") as string;
    const id = formData.get("id") as string;
    const boardId = formData.get("boardId") as string;
    const _version = parseInt(formData.get("_version") as string);

    if (name === data.name) {
      return disabledEditing();
    }

    execute({ name, id, boardId, _version });
  };

  const onBlur = () => {
    formRef.current?.requestSubmit();
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      formRef.current?.requestSubmit();
    }
  };

  useEventListener("keydown", onKeyDown);

  return (
    <div className="pt-2 px-2 text-sm font-semibold flex justify-between items-start gap-x-2">
      {isEditing ? (
        <form ref={formRef} action={handleSubmit} className="flex-1 px-[2px]">
          <input readOnly hidden id="id" name="id" value={data.id} />
          <input
            readOnly
            hidden
            id="boardId"
            name="boardId"
            value={data.boardID}
          />
          <input
            readOnly
            hidden
            id="_version"
            name="_version"
            value={data._version}
          />
          <FormInput
            ref={inputRef}
            onBlur={onBlur}
            id="name"
            placeholder="Enter list name..."
            defaultValue={name}
            className="text-sm px-[7px] py-1 h-7 font-medium border-transparent hover:border-input focus:border-input transition truncate bg-transparent focus:bg-white"
          />
          <button type="submit" hidden />
        </form>
      ) : (
        <div
          onClick={enableEditing}
          className="w-full text-sm px-2.5 py-1 h-7 font-medium border-transparent"
        >
          {data.name}
        </div>
      )}
      <ListOptions onAddCard={() => {}} data={data} />
    </div>
  );
};
