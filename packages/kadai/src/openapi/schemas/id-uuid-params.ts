import { z } from "@hono/zod-openapi";

const IdUUIDParamsSchema = z.object({
  id: z.string().uuid().openapi({
    param: {
      name: "id",
      in: "path",
      required: true,
    },
    required: ["id"],
    example: "123e4567-e89b-12d3-a456-426614174000",
  }),
});

export default IdUUIDParamsSchema;
