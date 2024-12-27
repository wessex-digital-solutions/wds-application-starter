import { z } from "@hono/zod-openapi";

type Validator = "uuid" | "nanoid" | "cuid" | "cuid2" | "ulid";

export interface ParamsSchema {
  name?: string;
  validator?: Validator | undefined;
}

const examples: Record<Validator, string> = {
  uuid: "123e4567-e89b-12d3-a456-426614174000",
  nanoid: "V1StGXR8_Z5jdHi6B-myT",
  cuid: "cikqg1q0100044v0g1xh0k4wz",
  cuid2: "cikqg1q0100044v0g1xh0k4wz",
  ulid: "01F9374ZGZ3J8YVQZ3XQZJZ6W1",
};

const getParamsSchema = ({
  name = "id",
  validator = "uuid",
}: ParamsSchema) => {
  return z.object({
    [name]: z.string()[validator]().openapi({
      param: {
        name,
        in: "path",
        required: true,
      },
      required: [name],
      example: examples[validator],
    }),
  });
};

export default getParamsSchema;
