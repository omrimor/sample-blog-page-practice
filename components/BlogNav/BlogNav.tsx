import type { Tag } from "../../types";
import { Icons } from "../icons";

//  <div className="bg-white px-3 lg:px-6 mb-24 rounded-3xl h-16 md:h-20 flex justify-between sm:container sm:mx-auto max-w-md mx-auto xl:max-w-5xl">

export const BlogNav: React.FC<{ tags: Tag[] }> = ({ tags }) => {
  return (
    <div className="bg-white rounded-2xl flex items-center p-2 gap-2 flex-wrap">
      <ul className="list-none">
        {tags.map((tag) => (
          <li
            key={tag}
            className="inline-block py-1 px-2 m-1 first:m-0 last:m-0 first:bg-brandPrimary-200/20 first:text-brandPrimary-200 rounded-lg text-slate-800"
          >
            <a className="capitalize" href="">
              {tag}
            </a>
          </li>
        ))}
      </ul>
      <div className="relative bg-brandPanelBackground border-2 border-transparent rounded-lg px-2 py-2.5 hover:border-brandPrimary-200 flex flex-row flex-1 w-48 select-text">
        <Icons.Search className="text-slate-800" />
        <span className="ml-2 text-slate-500">Search</span>
        <span className="rounded-sm px-[2px] text-xs absolute right-2 top-2/4 -translate-y-2/4 bg-[#f0ebe5] text-[#aeadab]">
          ⌘K
        </span>
      </div>
    </div>
  );
};
