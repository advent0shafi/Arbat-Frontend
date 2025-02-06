import { BASE_URL_FRONTEND } from "@/lib/endPoint"
import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
    const frontEndPoint = BASE_URL_FRONTEND
    return [
      {
        url: frontEndPoint,
        lastModified: new Date(),
      },
      {
        url: `${frontEndPoint}/free-zone-business-activities`,
        lastModified: new Date(),
      },
      {
        url: `${frontEndPoint}/free-zone-company-setup`,
        lastModified: new Date(),
      },
      {
        url: `${frontEndPoint}/free-zone-license-locations`,
        lastModified: new Date(),
      },
      {
        url: `${frontEndPoint}/cost-calculator`,
        lastModified: new Date(),
      },
      {
        url: `${frontEndPoint}/company-registration`,
        lastModified: new Date(),
      },
      {
        url: `${frontEndPoint}/our-solution`,
        lastModified: new Date(),
      },
     
      {
        url: `${frontEndPoint}/uae-residence-visa`,
        lastModified: new Date(),
      },
     
  
    ];
  }
  