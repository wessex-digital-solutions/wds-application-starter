import { z } from "@hono/zod-openapi";

const slugReg = /^[\w-]+$/;
const SLUG_ERROR_MESSAGE = "Slug can only contain letters, numbers, underscores, and hyphens";

const SlugParamsSchema = z.object({
  slug: z.string().regex(slugReg, SLUG_ERROR_MESSAGE).openapi({
    param: {
      name: "slug",
      in: "path",
      required: true,
    },
    required: ["slug"],
    example: "hello-world-post",
  }),
});

export default SlugParamsSchema;
