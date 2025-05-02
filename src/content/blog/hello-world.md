---
title: Introduction to blog template usage 
date: 2025-04-05T21:10:00+08:00
updated: 2025-04-05T21:10:00+08:00
keywords: ["hello", "world"]
featured: true
summary: "This is a Nextjs blog template. This article will introduce some basic usage of this template."
---

This is a Nextjs blog template. This article will introduce some basic usage of this template.

## 1. How to write a blog The blog files of this repository need to be placed in the `src/content/blog` directory. They can be markdown files or mdx files.

The following metadata needs to be configured by the user according to needs:

- `title`: Blog title - `date`: Blog publishing date - `updated`: Blog update date - `keywords`: Blog keywords, SEO optimization
- `featured`: whether to put it on the homepage - `summary`: blog summary## 2. Blog configuration All blog configurations are concentrated in the `src/lib/config.ts` file. The advantages of this are:

1. Centralized management: All configurations are in one file, which is convenient for maintenance and modification. 2. Type safety: Type checking and automatic completion can be obtained by using TypeScript. 3. Reusability: Avoid repeated configurations scattered in various files. 4. Consistency: Ensure that the same configuration values ​​are used everywhere. ### 2.1 Basic site configuration ```typescript
site: {
  title: "Your blog title",
  name: "Your blog name",
  description: "Blog description",
  keywords: ["Keyword 1", "Keyword 2"],
  url: "https://yourdomain.com",
  baseUrl: "https://yourdomain.com",
  image: "https://yourdomain.com/og-image.png",
  favicon:
    ico: "/favicon.ico",
    png: "/favicon.png",
    svg: "/favicon.svg",
    appleTouchIcon: "/favicon.png",
  },
  manifest: "/site.webmanifest",
}
```

These configurations are used to:
- Basic information display of the website - SEO optimization - Browser tab icon - Social media sharing preview### 2.2 Author information configuration```typescript
author:
  name: "Your name",
  email: "your email",
  bio: "Personal Profile",
}
```

Author information will be used to:
- Home page display - RSS feed information - Blog article author information### 2.3 Social media configuration ```typescript
social:
  github: "https://github.com/yourusername",
  x: "https://x.com/your username",
  xiaohongshu: "https://www.xiaohongshu.com/user/profile/your ID",
  wechat: "Your WeChat QR code image link",
  buyMeACoffee: "https://www.buymeacoffee.com/your username",
}
```

These links will appear in:
- Social media link area on the homepage - Social media icons in the navigation bar### 2.4 Comment system configuration```typescript
giscus:
  repo: "your GitHub repository name",
  repoId: "Warehouse ID",
  categoryId: "Category ID",
}
```

To use Giscus as a comment system, you need:
1. Install Giscus application on GitHub 2. Enable Discussions in your repository
3. Get the configuration information and fill it in here### 2.5 Navigation menu configuration```typescript
navigation:
  main: [
    { 
      title: "Article", 
      href: "/blog",
    },
    // You can add more navigation items],
}
```

The website's navigation menu is configured here, supporting:
- Normal link - Drop-down menu with submenu### 2.6 SEO configuration ``` typescript
seo:
  metadataBase: new URL("https://yourdomain.com"),
  alternates:
    canonical: './',
  },
  openGraph:
    type: "website" as const,
    locale: "zh_CN",
  },
  twitter:
    card: "summary_large_image" as const,
    creator: "@your twitter username",
  },
}
```

These configurations are used to:
- SEO - Social Media Sharing Card - Site Metadata### 2.7 RSS Subscription Configuration```typescript
rss:
  title: "Your blog title",
  description: "Blog description",
  feedLinks:
    rss2: "/rss.xml",
    json: "/feed.json",
    atom: "/atom.xml",
  },
}
```

These configurations are used to generate:
- RSS 2.0 Feeds - JSON Feeds
- Atom feed## 3. How to modify the configuration1. Open the `src/lib/config.ts` file2. Modify the corresponding configuration items according to your needs3. After saving the file, Next.js will automatically rebuild and apply the new configuration notes:
- Make sure all URLs are valid - Image links should be accessible - Social media links should have full URLs
- After configuration modification, it is recommended to check the website's:
  - Home page display - Navigation menu - SEO information - Social media sharing effect - RSS subscription source## 4. How to generate RSS subscription source Modify the configuration in the scripts/generate-rss.js file, and then run:

```bash
npm run generate-rss
```

## 5. How to generate a Sitemap

Modify the configuration in the scripts/generate-sitemap.js file and run:

```bash
npm run generate-sitemap
```

 