import type { PostPreview } from "../../types";
import { Chip } from "../Chip/Chip";

interface FeaturedPostProps {
  post: PostPreview;
}
export const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  const { slug, title, description, thumbnailImgSrc } = post;

  return (
    <a
      className="grid grid-col-1 md:grid-cols-3 gap-12 select-text text-slate-700"
      href={slug}
    >
      <div className="col-span-2 block md:hidden">
        <img
          className="rounded-2xl max-w-full aspect-auto"
          src={thumbnailImgSrc}
        />
      </div>
      <div>
        <Chip>featured</Chip>
        <h3 className="text-3xl font-semibold py-4 text-slate-800">{title}</h3>
        <p className="leading-6">{description}</p>
      </div>
      <div className="col-span-2 hidden md:block">
        <img
          className="rounded-3xl max-w-full aspect-auto"
          src={thumbnailImgSrc}
        />
      </div>
    </a>
  );
};
