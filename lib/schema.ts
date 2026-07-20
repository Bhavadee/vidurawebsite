export const siteUrl = "https://vidurasanskritisangeetalayam.com";

export function createLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MusicSchool",
    name: "Vidura Sanskriti Sangeetalayam",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    url: siteUrl,
  };
}
