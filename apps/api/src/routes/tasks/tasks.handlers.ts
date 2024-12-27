import { createDb } from "@wds/database";

import type { AppRouteHandler } from "@/lib/types";

import type { ListRoute } from "./tasks.routes";

export const list: AppRouteHandler<ListRoute> = async (c) => {
  const { db } = createDb(c.env);
  const tasks = await db.query.tasks.findMany();
  return c.json(tasks);
};
