"use client";

import { QuillEditor } from "@/components/editor/quillEditor";
import { FormDateTimePicker } from "@/components/form/formDateTimePicker";
import { FormInput } from "@/components/form/formInput";
import { FormSelect } from "@/components/form/formSelect";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useAction } from "@/hooks/useAction";
import { useFormCardModal } from "@/hooks/useFormCardModal";
import { generateClient } from "aws-amplify/api";
import { ElementRef, useRef } from "react";
import { toast } from "sonner";

export const FormCardModal = () => {
  const formRef = useRef<ElementRef<"form">>(null);
  const isOpen = useFormCardModal((state) => state.isOpen);
  const onClose = useFormCardModal((state) => state.onClose);
  /* const { execute, fieldErrors } = useAction(createCard, {
    onSuccess: (data) => {
      toast.success(`Card created`);
      formRef.current?.reset();
    },
    onError: (error) => {
      toast.error(error);
    },
  }); */
  const handleSubmit = async (formData: FormData) => {
    const client = generateClient();

    console.log("workspace", formData.get("workspace"));
    console.log("name", formData.get("name"));
    console.log("assignee", formData.get("assignee"));
    console.log("initiator", formData.get("initiator"));
    console.log("startDate", formData.get("startDate"));
    console.log("endDate", formData.get("endDate"));
    console.log("editor", formData.get("editor"));
  };
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="h-[75%] overflow-auto">
        <form action={handleSubmit}>
          <div className="w-hull flex flex-col items-center">
            <p className="text-xl text-neutral-700">Create Task</p>
            <div className="w-[75%] space-y-2">
              <FormSelect
                id="workspace"
                name="workspace"
                label="Workspace"
                placeholder="Please select"
                data={[{ id: "1", name: "hi" }]}
              />

              <Label
                htmlFor={"name"}
                className="text-xs font-semibold text-neutral-700"
              >
                Task Name
              </Label>
              <FormInput id="name" />

              {/* <Label
                htmlFor={"Description"}
                className="text-xs font-semibold text-neutral-700"
              >
                Task Description
              </Label>
              <FormInput id="description" /> */}

              <FormSelect
                id="assignee"
                name="assignee"
                label="Assignee"
                placeholder="Please select"
                data={[{ id: "1", name: "hi" }]}
              />

              <FormSelect
                id="initiator"
                name="initiator"
                label="Initiator"
                placeholder="Please select"
                data={[{ id: "1", name: "hi" }]}
              />

              <FormDateTimePicker id="startDate" label="Start Date" />
              <FormDateTimePicker id="endDate" label="End Date" />

              <QuillEditor label="Description" />

              <Button type="submit" variant="primary">
                Submit
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
