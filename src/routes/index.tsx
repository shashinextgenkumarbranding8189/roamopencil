import { createFileRoute } from "@tanstack/react-router";
import { RoamoSite } from "@/components/RoamoSite";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ROAMO — Write Bolder. Go Further." },
      {
        name: "description",
        content:
          "Explore ROAMO pencils, BLAXO, BLUZO and Imperium Wood-Free pencils. Retailer, dealer and distributor enquiries welcome.",
      },
      { property: "og:title", content: "ROAMO — Write Bolder. Go Further." },
      {
        property: "og:description",
        content: "ROAMO pencils, BLAXO, BLUZO and Imperium Wood-Free pencils. Trade enquiries welcome.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RoamoSite,
});
