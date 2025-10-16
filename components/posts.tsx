import Link from "next/link";
import { getBlogPosts } from '@/lib/blog';
import { formatDate } from '@/lib/utils/mdx';
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function BlogPosts({ isHomePage = false }) {
  let allBlogs = getBlogPosts();
  const sortedBlogs = allBlogs.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  const displayedBlogs = isHomePage ? sortedBlogs.slice(0, 3) : sortedBlogs;

  return (
    <div className="relative w-full">
      <div className="relative mx-auto max-w-[90%] xl:max-w-[1280px] py-20">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 mb-4">
            <div className="h-px w-12 bg-white/50" />
            <span className="text-white/70 text-sm uppercase tracking-wider">
              Our Blogs
            </span>
          </div>
          <h2 className="text-4xl font-bold text-white">Latest Insights</h2>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayedBlogs.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group relative"
            >
              <div className="relative overflow-hidden backdrop-blur-sm border border-transparent group-hover:border-white/20 transition-all duration-300">
                <div className="aspect-[16/9] relative">
                  <Image
                    src={post.metadata.image || ""}
                    alt={post.metadata.title}
                    className="object-cover w-full h-full transition-transform duration-500"
                    width={400}
                    height={225}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="h-px w-8 bg-white/30 group-hover:bg-white/50 transition-colors" />
                    <time className="text-sm text-white/50">
                      {formatDate(post.metadata.publishedAt)}
                    </time>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-white/90 transition-colors">
                    {post.metadata.title}
                  </h3>
                  <div className="mt-4 flex items-center space-x-2 text-white/50 group-hover:text-white/70 transition-colors">
                    <span className="text-sm">Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Read More Link for Homepage */}
        {isHomePage && (
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center space-x-2 text-white/70 hover:text-white transition-colors"
            >
              <span>View All Blog Posts</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
