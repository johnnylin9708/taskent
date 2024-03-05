import { z } from "zod";
import { UpdateListSchema } from "./schema";
import { ActionState } from "@/lib/createSafeAction";
import { List } from "@/API";

export type InputType = z.infer<typeof UpdateListSchema>;

export type ReturnType = ActionState<InputType, List>;
