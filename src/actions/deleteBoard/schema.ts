import { z } from "zod";

export const DeleteBoardSchema = z.object({
  id: z.string(),
  _version: z.number(),
});
