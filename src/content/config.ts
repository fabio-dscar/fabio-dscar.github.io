import { z, defineCollection } from "astro:content";
const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
    tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
        message: 'tags must be unique',
    }).optional(),
});

const projectSchema = z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    date: z.coerce.date(),
    customSlug: z.string().optional(),
    hardcode_url: z.string().optional(),
    link: z.string().optional(),
    otherLink: z.string().optional(),
    githubLink: z.string().optional(),
    badge: z.string().optional(),
    tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
        message: 'tags must be unique',
    }).optional()
});

export type BlogSchema = z.infer<typeof blogSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const projectCollection = defineCollection({ 
    type: 'data',
    schema: projectSchema });

export const collections = {
    'blog': blogCollection,
    'project': projectCollection
}