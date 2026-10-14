import { createFileRoute } from "@tanstack/react-router";
import { RoamoSite } from "@/components/RoamoSite";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ROAMO Pencils — Write Bolder. Go Further." },
      {
        name: "description",
        content:
          "ROAMO — premium pencils and stationery for students, creators and trade partners. Explore BLAXO, BLUZO and Imperium Wood-Free ranges. Retailer and distributor enquiries welcome.",
      },
      { property: "og:title", content: "ROAMO Pencils — Write Bolder. Go Further." },
      {
        property: "og:description",
        content:
          "Premium pencils and stationery from ROAMO. BLAXO, BLUZO and Imperium Wood-Free ranges. Trade and bulk enquiries welcome.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/roamo-logo.png" },
      { property: "og:site_name", content: "ROAMO Pencils" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ROAMO Pencils — Write Bolder. Go Further." },
      {
        name: "twitter:description",
        content: "Premium pencils and stationery from ROAMO. Trade and bulk enquiries welcome.",
      },
      { name: "twitter:image", content: "/roamo-logo.png" },
    ],
  }),
  component: RoamoSite,
});
