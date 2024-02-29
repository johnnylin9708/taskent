import { z } from "zod";
import { CopyListSchema } from "./schema";
import { ActionState } from "@/lib/create-safe-action";
import { List } from "@/API";

export type InputType = z.infer<typeof CopyListSchema>;
export type ReturnType = ActionState<InputType, List>;
