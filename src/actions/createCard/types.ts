import { z } from "zod";
import { CreateCardSchema } from "./schema";
import { ActionState } from "@/lib/createSafeAction";
import { Card } from "@/API";

export type InputType = z.infer<typeof CreateCardSchema>;
export type ReturnType = ActionState<InputType, Card>;
