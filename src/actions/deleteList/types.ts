import { z } from "zod";
import { DeleteListSchema } from "./schema";
import { ActionState } from "@/lib/create-safe-action";
import { List } from "@/API";

export type InputType = z.infer<typeof DeleteListSchema>;
export type ReturnType = ActionState<InputType, List>;
