import { z } from "astro:content";

export const blogSchema = z
  .object({
    author: z.string().optional().default("Youssouf El Azizi"),
    pubDatetime: z.date(),
    title: z.string(),
    postSlug: z.string().optional(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default(["others"]),
    keywords: z.array(z.string()).default([""]),
    ogImage: z.string().optional(),
    description: z.string().optional().default(""),
    published: z.boolean().optional().default(true),
  })
  .strict();

export type BlogFrontmatter = z.infer<typeof blogSchema>;
