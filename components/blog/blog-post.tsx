import Image from 'next/image';
import Link from 'next/link';

import { getBlogPosts } from '@/lib/blog';
import { formatDate } from '@/lib/utils/mdx';

import { ArrowRight } from 'lucide-react';
import { FaArrowRight } from 'react-icons/fa';

interface BlogPostsProps {
    isHomePage?: boolean;
}

export function BlogPosts({ isHomePage = false }: BlogPostsProps) {
    const allBlogs = getBlogPosts();
    const sortedBlogs = allBlogs.sort((a, b) => {
        if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1;
        }

        return 1;
    });

    const displayedBlogs = isHomePage ? sortedBlogs.slice(0, 3) : sortedBlogs;

    return (
        <div className='min-h-screen px-4 sm:px-6 md:px-8 lg:px-0'>
            <div className='fixed inset-0 z-[-1]'>
                <div className='absolute inset-0' />
            </div>

            <div className='relative z-10'>
                <div className='mx-auto py-10 sm:py-16'>
                    {/* Section Header */}
        <div className="mb-16 mt-4">
          <div className="flex items-center space-x-2 mb-4">
            <div className="h-px w-12 bg-white/50" />
            <span className="text-white/70 text-sm uppercase tracking-wider">
              Our Blogs
            </span>
          </div>
          <h2 className="text-4xl font-bold text-white">Latest Insights</h2>
        </div>

                    {/* Blog Grid */}
                    <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                        {displayedBlogs.map((post, index) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} className='group relative'>
                                <div className='relative overflow-hidden border border-transparent backdrop-blur-sm transition-all duration-300 group-hover:border-white/20'>
                                    <div className='relative aspect-[16/9]'>
                                        <Image
                                            src={post.metadata.image || ''}
                                            alt={post.metadata.title}
                                            className='h-full w-full object-cover transition-transform duration-500'
                                            width={400}
                                            height={225}
                                        />
                                        <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                                    </div>
                                    <div className='p-6'>
                                        <div className='mb-3 flex items-center space-x-2'>
                                            <div className='h-px w-8 bg-white/30 transition-colors group-hover:bg-white/50' />
                                            <time className='text-sm text-white/50'>
                                                {formatDate(post.metadata.publishedAt)}
                                            </time>
                                        </div>
                                        <h3 className='text-xl font-bold text-white transition-colors group-hover:text-white/90'>
                                            {post.metadata.title}
                                        </h3>
                                        <div className='mt-4 flex items-center space-x-2 text-white/50 transition-colors group-hover:text-white/70'>
                                            <span className='text-sm'>Read More</span>
                                            <ArrowRight className='h-4 w-4' />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* View All Link for Homepage */}
                    {isHomePage && (
                        <div className='mt-16 flex flex-col justify-center gap-4 sm:flex-row'>
                            <Link
                                href='/blog'
                                className='bg-primary-solid hover:bg-primary-solid-hover text-bg-default group flex items-center justify-center gap-2 rounded px-8 py-3 transition-all duration-300'>
                                View All Posts
                                <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
                            </Link>
                            <Link
                                href='/rss.xml'
                                className='bg-secondary-bg hover:bg-secondary-bg-hover text-canvas-text border-canvas-border hover:border-canvas-border-hover flex items-center justify-center gap-2 rounded border px-8 py-3 transition-all duration-300'>
                                Subscribe to RSS
                                <svg className='h-4 w-4' viewBox='0 0 24 24' fill='currentColor'>
                                    <path d='M6.18 15.64a2.18 2.18 0 112.18 2.18 2.18 2.18 0 01-2.18-2.18zM6.18 8.91h4.36v2.18H6.18V8.91zm0-4.36h8.73v2.18H6.18V4.55z' />
                                </svg>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
