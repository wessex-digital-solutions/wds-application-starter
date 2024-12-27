import { createRoute } from "@hono/zod-openapi";
import * as HttpStatusCodes from "@wds/kadai/http-status-codes";
import { jsonContent } from "@wds/kadai/openapi/helpers";
import { createMessageObjectSchema } from "@wds/kadai/openapi/schemas";

import { createRouter } from "@/lib/create-app";

const router = createRouter()
  .openapi(
    createRoute({
      tags: ["Index"],
      method: "get",
      path: "/",
      responses: {
        [HttpStatusCodes.OK]: jsonContent(
          createMessageObjectSchema("WDS API"),
          "Welcome to the WDS API",
        ),
      },
    }),
    (c) => {
      return c.json({ message: "WDS API - running on Cloudflare" }, HttpStatusCodes.OK);
    },
  );

export default router;
