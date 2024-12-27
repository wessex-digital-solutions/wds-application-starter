import { describe, expect, it } from "vitest";

import slugParamsSchema from "./slug-params.js";

describe("slug-params", () => {
  it("allows letters", () => {
    const slug = "abcdedfghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const { data, error } = slugParamsSchema.safeParse({ slug });
    expect(data?.slug).toBe(slug);
    expect(error).toBeUndefined();
  });

  it("allows numbers", () => {
    const slug = "0123456789";
    const { data, error } = slugParamsSchema.safeParse({ slug });
    expect(data?.slug).toBe(slug);
    expect(error).toBeUndefined();
  });

  it("allows letters and numbers", () => {
    const slug = "abcdedfghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const { data, error } = slugParamsSchema.safeParse({ slug });
    expect(data?.slug).toBe(slug);
    expect(error).toBeUndefined();
  });

  it("allows underscores", () => {
    const slug = "_";
    const { data, error } = slugParamsSchema.safeParse({ slug });
    expect(data?.slug).toBe(slug);
    expect(error).toBeUndefined();
  });

  it("allows hyphens", () => {
    const slug = "-";
    const { data, error } = slugParamsSchema.safeParse({ slug });
    expect(data?.slug).toBe(slug);
    expect(error).toBeUndefined();
  });

  it("does not allow special characters", () => {
    const slug = "!@#$%^&*()";
    const { error } = slugParamsSchema.safeParse({ slug });
    expect(error).toBeDefined();
  });

  it("does not allow special characters with allowed characters", () => {
    const slug = "abcdedfghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    const { error } = slugParamsSchema.safeParse({ slug });
    expect(error).toBeDefined();
  });

  it("does not allow spaces", () => {
    const slug = " ";
    const { error } = slugParamsSchema.safeParse({ slug });
    expect(error).toBeDefined();
  });
});
