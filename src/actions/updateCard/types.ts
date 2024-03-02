import { z } from "zod";
import { UpdateCardSchema } from "./schema";
import { ActionState } from "@/lib/create-safe-action";
import { Card } from "@/API";

export type InputType = z.infer<typeof UpdateCardSchema>;

export type ReturnType = ActionState<InputType, Card>;
