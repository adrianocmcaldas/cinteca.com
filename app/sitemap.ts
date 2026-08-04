import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://cinteca.es",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://cinteca.es/legal/",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://cinteca.es/legal/privacidad/",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: "https://cinteca.es/legal/terminos/",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: "https://cinteca.es/legal/eula/",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
