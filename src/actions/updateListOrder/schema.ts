import { z } from "zod";

export const UpdateListOrderSchema = z.object({
  items: z.array(
    z.object({
      id: z.string(),
      order: z.number(),
      _version: z.number(),
    })
  ),
  boardId: z.string(),
});
