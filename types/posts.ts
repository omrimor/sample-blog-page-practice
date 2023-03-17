export type PostPreview = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: Tag[];
  thumbnailImgSrc: string;
  isFeatured?: boolean;
};

const tags = [
  "all",
  "news",
  "product updates",
  "tutorials",
  "inside Tines",
  "engineering",
] as const;
export type Tag = typeof tags[number];
