import { z } from "zod";
import { CopyCardSchema } from "./schema";
import { ActionState } from "@/lib/createSafeAction";
import { Card } from "@/API";

export type InputType = z.infer<typeof CopyCardSchema>;
export type ReturnType = ActionState<InputType, Card>;
