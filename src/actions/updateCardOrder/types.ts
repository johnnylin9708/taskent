import { z } from "zod";
import { UpdateCardOrderSchema } from "./schema";
import { ActionState } from "@/lib/createSafeAction";
import { Card } from "@/API";

export type InputType = z.infer<typeof UpdateCardOrderSchema>;

export type ReturnType = ActionState<InputType, Card[]>;
