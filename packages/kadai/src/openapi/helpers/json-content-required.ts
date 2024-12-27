import type { ZodSchema } from "./types";

import jsonContent from "./json-content.js";

const jsonContentRequired = <
  T extends ZodSchema,
>(schema: T,
  description: string,
) => {
  return {
    ...jsonContent(schema, description),
    description,
  };
};

export default jsonContentRequired;
