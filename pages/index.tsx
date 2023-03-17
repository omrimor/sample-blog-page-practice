import path from "path";
import { promises as fs } from "fs";

import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";

import type { Tag, PostPreview } from "../types";

import {
  SubscribeForm,
  PostsGrid,
  PostPreviewCard,
  FeaturedPost,
  SiteNav,
  BlogNav,
} from "../components";

const BlogRootPage: NextPage<{
  posts: PostPreview[];
  latestsPosts: PostPreview[];
  featuredPost: PostPreview;
  tags: Tag[];
}> = ({ latestsPosts, posts, featuredPost, tags }) => {
  return (
    <>
      <Head>
        <title>Blog | Tines</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-brandPanelBackground rounded-b-3xl py-20">
        <SiteNav />
        <div className="sm:container sm:mx-auto max-w-md mx-auto xl:max-w-6xl flex flex-col md:flex-row justify-between items-center flex-wrap gap-6 px-4 md:px-0">
          <h1 className="text-5xl font-semibold text-center md:text-left md:mr-auto text-slate-800">
            Blog
          </h1>
          <BlogNav tags={tags} />
        </div>
      </header>
      <div className="sm:container sm:mx-auto max-w-md mx-auto xl:max-w-6xl px-4 md:px-0">
        <section className="mt-20">
          <FeaturedPost post={featuredPost} />
        </section>
        <section className="mt-12 mb-20">
          <h4 className="text-xl font-semibold mb-10 hidden md:block text-slate-800">
            Latest Posts
          </h4>
          <PostsGrid>
            {latestsPosts.map((post) => (
              <PostPreviewCard key={post.slug} post={post} />
            ))}
          </PostsGrid>
        </section>
        <SubscribeForm />
        <section className="mt-12 mb-20">
          <PostsGrid>
            {posts.map((post) => (
              <PostPreviewCard key={post.slug} post={post} />
            ))}
          </PostsGrid>
        </section>
      </div>
    </>
  );
};

export default BlogRootPage;

export const getStaticProps: GetStaticProps = async () => {
  // In a real world scenario, we would fetch the data from our CMS API endpoint.
  // Also would probably use incremental static regeneration :)
  const jsonDirectory = path.join(process.cwd(), "json");
  const fileContents = await fs.readFile(jsonDirectory + "/data.json", "utf8");
  const rawPosts: PostPreview[] = JSON.parse(fileContents);

  const gatherTags: Tag[] = rawPosts.reduce(
    (prev: Tag[], next: PostPreview) => {
      return [...prev, ...next.tags] as Tag[];
    },
    []
  );
  const tags = [...new Set(["all", ...gatherTags])] as Tag[];

  const latestPostsCount = 3;
  const posts: PostPreview[] = [];
  const latestsPosts: PostPreview[] = [];
  const [featuredPost] = rawPosts.splice(
    rawPosts.findIndex((i) => i.isFeatured),
    1
  );

  rawPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .forEach((post, index) => {
      index < latestPostsCount ? latestsPosts.push(post) : posts.push(post);
    });

  return {
    props: { latestsPosts, posts, featuredPost, tags },
  };
};
