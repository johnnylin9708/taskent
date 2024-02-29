import { z } from "zod";

export const UpdateBoardSchema = z.object({
  name: z
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title is required",
    })
    .min(3, { message: "Title is too short" }),
  id: z.string(),
  _version: z.number(),
});
