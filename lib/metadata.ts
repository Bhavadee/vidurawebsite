import type { Metadata } from "next";

const siteName = "Vidura Sanskriti Sangeetalayam";
const defaultDescription =
  "Learn Carnatic Vocal, Violin, Keyboard, Bharatanatyam and more from experienced teachers at Vidura Sanskriti Sangeetalayam, Hyderabad.";

interface MetadataConfig {
  title: string;
  description?: string;
  path?: string;
  image?: string;
}

export function createMetadata({
  title,
  description = defaultDescription,
  path = "/",
  image = "/opengraph-image",
}: MetadataConfig): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
