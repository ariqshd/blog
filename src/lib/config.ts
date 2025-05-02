export const config = {
  site: {
    title: "Tumaros",
    name: "Tumaros",
    description: "Ariqshd's dev notes",
    keywords: ["Game Dev", "Unreal Engine"],
    url: "https://004141.xyz",
    baseUrl: "https://004141.xyz",
    image: "https://xxx.com/og-image.png",
    favicon: {
      ico: "/favicon.ico",
      png: "/favicon.png",
      svg: "/favicon.svg",
      appleTouchIcon: "/favicon.png",
    },
    manifest: "/site.webmanifest",
    rss: {
      title: "Tumaros",
      description: "Ariqshd's dev notes",
      feedLinks: {
        rss2: "/rss.xml",
        json: "/feed.json",
        atom: "/atom.xml",
      },
    },
  },
  author: {
    name: "Ariq D. Irfanudin",
    email: "invanteris@gmail.com",
    bio: "Write about game dev & Unreal Engine",
  },
  social: {
    github: "https://github.com/ariqshd",
    x: "https://x.com/ariqshd",
    buyMeACoffee: "https://www.buymeacoffee.com/ariqshd",
  },
  giscus: {
    repo: "ariqshd/blog",
    repoId: "976330125R_kgDOOjGdjQ",
    categoryId: "DIC_kwDOOjGdjc4Cprpv",
  },
  navigation: {
    main: [
      { 
        title: "Tumaros", 
        href: "/blog",
      },
    ],
  },
  seo: {
    metadataBase: new URL("https://004141.xyz"),
    alternates: {
      canonical: './',
    },
    openGraph: {
      type: "website" as const,
      locale: "zh_CN",
    },
    twitter: {
      card: "summary_large_image" as const,
      creator: "@ariqshd",
    },
  },
};
