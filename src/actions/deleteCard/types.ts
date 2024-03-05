import { z } from "zod";
import { DeleteCardSchema } from "./schema";
import { ActionState } from "@/lib/createSafeAction";
import { Card } from "@/API";

export type InputType = z.infer<typeof DeleteCardSchema>;
export type ReturnType = ActionState<InputType, Card>;
