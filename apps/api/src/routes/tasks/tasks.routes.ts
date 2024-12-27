import { createRoute, z } from "@hono/zod-openapi";
import { selectTasksSchema } from "@wds/database/schema";
import * as HttpStatusCode from "@wds/kadai/http-status-codes";
import { jsonContent } from "@wds/kadai/openapi/helpers";

const tags = ["Tasks"];

export const list = createRoute({
  path: "/tasks",
  method: "get",
  tags,
  responses: {
    [HttpStatusCode.OK]: jsonContent(
      z.array(selectTasksSchema),
      "The list of tasks",
    ),
  },
});

export type ListRoute = typeof list;
