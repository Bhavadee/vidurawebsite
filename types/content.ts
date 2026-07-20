export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface CourseSummary {
  slug: string;
  title: string;
  description: string;
  ageGroup?: string;
  duration?: string;
  image: ImageAsset;
}
