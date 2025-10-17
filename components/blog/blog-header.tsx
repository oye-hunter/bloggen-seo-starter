import Image from 'next/image';
import Link from 'next/link';

import { formatDate } from '@/lib/utils/mdx';

import { ArrowLeft } from 'lucide-react';

interface Props {
    title: string;
    publishedAt?: string;
    image?: string;
}

export default function BlogHeader({ title, publishedAt, image }: Props) {
    return (
        <header className='relative'>
            {/* Header Section */}
        <div className="mb-20">
          <div className="flex items-center space-x-3 mb-6">
            <div className="h-px w-16 bg-white/50" />
            <span className="text-white/70 text-sm uppercase tracking-wider font-medium">
              Blog Post
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            {title}
          </h1>
          <time className="text-white/60 text-lg">
                {publishedAt && <time className='text-canvas-text text-lg'>{formatDate(publishedAt)}</time>}
          </time>
        </div>
            {/* Header Section
            <div className='mb-20'>
                <div className='mb-8 flex items-center space-x-3'>
                    <Link
                        href='/blog'
                        className='text-canvas-text hover:text-primary-text inline-flex items-center transition-colors'>
                        <ArrowLeft className='mr-2 h-4 w-4' />
                        Back to Blogs
                    </Link>
                </div>
                <h1 className='from-primary-solid via-primary-text to-primary-text-contrast mb-8 bg-gradient-to-r bg-clip-text text-4xl leading-tight font-bold tracking-tight md:text-6xl'>
                    {title}
                </h1>
                {publishedAt && <time className='text-canvas-text text-lg'>{formatDate(publishedAt)}</time>}
            </div> */}

            {/* Featured Image */}
            {/* {image && (
                <div className='border-canvas-border relative mb-10 aspect-[21/9] w-full overflow-hidden rounded-sm border shadow-2xl'>
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className='object-cover'
                        loading='eager'
                        priority
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px'
                        quality={90}
                        placeholder='blur'
                        blurDataURL={`data:image/svg+xml;base64,${Buffer.from(
                            '<svg width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" fill="#e2e8f0"/></svg>'
                        ).toString('base64')}`}
                        fetchPriority='high'
                    />
                </div>
            )} */}
            {/* Featured Image */}
        {image && (
          <div className="relative w-full aspect-[21/9] mb-20 overflow-hidden rounded-xl shadow-2xl">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
        </header>
    );
}
