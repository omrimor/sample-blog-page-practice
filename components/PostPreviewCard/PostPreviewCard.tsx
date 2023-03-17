import type { PostPreview } from "../../types";

interface PostPreviewCardProps {
  post: PostPreview;
}

export const PostPreviewCard: React.FC<PostPreviewCardProps> = ({ post }) => {
  const { slug, title, description, thumbnailImgSrc } = post;
  return (
    <a
      href={slug}
      className="relative flex flex-col bg-white group z-0 isolate text-slate-700"
    >
      <img
        className="rounded-2xl max-w-full aspect-auto"
        src={thumbnailImgSrc}
      />
      <h3 className="my-3 text-2xl font-semibold text-slate-800">{title}</h3>
      <p className="text-lg">{description}</p>
      <div
        aria-hidden="true"
        className="-z-10 hidden md:block absolute -inset-3 transition-all ease-in delay-50 group-hover:bg-brandPrimary-200/10 rounded-2xl"
      />
    </a>
  );
};
