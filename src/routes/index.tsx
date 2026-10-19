import { createFileRoute } from "@tanstack/react-router";
import { RoamoSite } from "@/components/RoamoSite";

const SITE_URL = "https://roamopencils.com";
const OG_IMAGE = `${SITE_URL}/roamo-logo.png`;

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "ROAMO Pencils",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: OG_IMAGE,
        width: 400,
        height: 150,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-8355015584",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lucknow",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "ROAMO Pencils",
      description:
        "Premium pencils and stationery from ROAMO. BLAXO, BLUZO and Imperium Wood-Free ranges. Trade and bulk enquiries welcome.",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "ItemList",
      name: "ROAMO Product Ranges",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "BLAXO Pencils",
          description: "Bold black-and-gold premium pencil range.",
          url: `${SITE_URL}/#roamo`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "BLUZO Pencils",
          description: "Fresh blue-accented pencil range.",
          url: `${SITE_URL}/#roamo`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Imperium Wood-Free Pencils",
          description: "Consistent smooth writing in a wood-free design.",
          url: `${SITE_URL}/#imperium`,
        },
      ],
    },
  ],
});

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ROAMO Pencils — Write Bolder. Go Further." },
      {
        name: "description",
        content:
          "ROAMO — premium pencils and stationery for students, creators and trade partners. Explore BLAXO, BLUZO and Imperium Wood-Free ranges. Retailer and distributor enquiries welcome.",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "ROAMO Pencils — Write Bolder. Go Further." },
      {
        property: "og:description",
        content:
          "Premium pencils and stationery from ROAMO. BLAXO, BLUZO and Imperium Wood-Free ranges. Trade and bulk enquiries welcome.",
      },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "400" },
      { property: "og:image:height", content: "150" },
      { property: "og:image:alt", content: "ROAMO Pencils logo" },
      { name: "twitter:title", content: "ROAMO Pencils — Write Bolder. Go Further." },
      {
        name: "twitter:description",
        content: "Premium pencils and stationery from ROAMO. Trade and bulk enquiries welcome.",
      },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:image:alt", content: "ROAMO Pencils logo" },
      // JSON-LD injected via script tag
      { "script:ld+json": jsonLd } as Record<string, string>,
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
  component: RoamoSite,
});
