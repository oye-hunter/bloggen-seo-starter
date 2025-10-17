import { notFound } from 'next/navigation';
import path from 'path';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';

import BlogHeader from '@/components/blog/blog-header';
import { BlogPosts } from '@/components/blog/blog-post';
import { ContentTOC } from '@/components/shared/content-toc';
import { ContentTOCMobile } from '@/components/shared/content-toc-mobile';
import { siteConfig } from '@/lib/config/site';
import { defaultMetadata } from '@/lib/seo/metadata/create-base-metadata';
import { createPageMetadata } from '@/lib/seo/metadata/create-page-metadata';
import BlogSchema from '@/lib/seo/schema/blog';
import BlogPostSchema from '@/lib/seo/schema/blog-posting';
import { blogSource, source } from '@/lib/source';
import { getMDXComponents } from '@/mdx-components';
import { Rate } from '@/components/rate';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Mermaid } from '@/components/ui/mermaid';
import { Wrapper } from '@/components/ui/wrapper';
import { UiOverview } from '@/components/ui-overview';
import { onRateAction } from '@/lib/github';
import { formatDate } from '@/lib/utils/mdx';
import { Banner } from 'fumadocs-ui/components/banner';
import { Callout } from 'fumadocs-ui/components/callout';
import { TypeTable } from 'fumadocs-ui/components/type-table';

export default async function Page(props: { params: Promise<{ slug?: string[] }> }) {
    const params = await props.params;

    // // If this is the root /blog path (empty slug)
    if (!params.slug || params.slug.length === 0) {
        return (
            <main role='main' className='min-h-screen relative'>
                <BlogSchema />
                <BlogPosts />
            </main>
        );
    }

    const page = blogSource.getPage(params.slug);
    if (!page) notFound();

    const MDXContent = page.data.body;

    return (
        <main role='main' className='min-h-screen relative'>
            <BlogPostSchema
                title={page.data.title}
                description={page.data.description}
                summary={page.data.summary}
                publishedAt={page.data.publishedAt}
                image={page.data.image}
                slug={params.slug}
                author={page.data.author}
                tags={page.data.tags}
            />
            <div className='mx-auto max-w-7xl px-4 sm:px-0 py-16 md:py-28'>
                <BlogHeader title={page.data.title} publishedAt={page.data.publishedAt} image={page.data.image} />
                
                <div className='flex flex-col xl:flex-row gap-12'>
                    {/* Main Content */}
                    <div className='flex-1 min-w-0'>
                        <article className="prose prose-invert max-w-none">
                            <MDXContent
                                components={getMDXComponents({
                                    a: ({ href, ...props }) => {
                                        const found = blogSource.getPageByHref(href ?? '', {
                                            dir: path.dirname(page.path),
                                        });

                                        if (!found) return <Link href={href ?? '#'} {...props} />;

                                        return (
                                            <HoverCard>
                                                <HoverCardTrigger asChild>
                                                    <Link
                                                        href={
                                                            found.hash
                                                                ? `${found.page.url}#${found.hash}`
                                                                : found.page.url
                                                        }
                                                        {...props}
                                                    />
                                                </HoverCardTrigger>
                                                <HoverCardContent className="text-sm bg-black/90 border-white/20">
                                                    <p className="font-medium text-white">{found.page.data.title}</p>
                                                    <p className="text-white/70">
                                                        {found.page.data.description}
                                                    </p>
                                                </HoverCardContent>
                                            </HoverCard>
                                        );
                                    },
                                    Banner,
                                    Mermaid,
                                    TypeTable,
                                    Wrapper,
                                    blockquote: Callout as unknown as FC<ComponentProps<'blockquote'>>,
                                    UiOverview,
                                })}
                            />
                        </article>

                        {/* Rate Component */}
                        <div className="mt-12 pt-8 border-t border-white/10">
                            <Rate onRateAction={onRateAction} />
                            {page.data.publishedAt && (
                                <p className="text-sm text-white/60 mt-6">
                                    Last updated: {formatDate(page.data.publishedAt)}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Table of Contents */}
                    <aside className='w-full xl:w-72 shrink-0'>
                        <ContentTOC toc={page.data.toc} />
                    </aside>
                </div>
            </div>

            {/* Mobile TOC */}
            <ContentTOCMobile toc={page.data.toc} />
        </main>
    );
}

export async function generateStaticParams() {
    return blogSource.generateParams();
}

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }) {
    const resolvedParams = await params;

    const currentPath = 'blog';
    // If this is the root path
    if (!resolvedParams.slug || resolvedParams.slug.length === 0) {
        return createPageMetadata({
            path: currentPath,
            description:
                'Learn how to build, customize, and grow your site with Bloggen SEO Starter and Bloggen AI. Setup guides, tips, and SEO content strategies—all in one place.',
            baseMetadata: defaultMetadata
        });
    }

    const page = blogSource.getPage(resolvedParams.slug);
    if (!page) notFound();

    const ogImage = page.data.image
        ? `${siteConfig.baseUrl}${page.data.image}`
        : `${siteConfig.baseUrl}/og?title=${encodeURIComponent(page.data.title)}`;

    const baseMeta = createPageMetadata({
        path: `${currentPath}/${resolvedParams.slug}`,
        description: page.data.description,
        baseMetadata: defaultMetadata
    });

    return {
        ...baseMeta,
        description: page.data.summary,
        openGraph: {
            ...baseMeta.openGraph,
            type: 'article',
            publishedTime: page.data.publishedAt,
            url: `${siteConfig.baseUrl}/${currentPath}/${resolvedParams.slug?.join('/') || ''}`,
            images: [
                {
                    url: ogImage,
                    alt: page.data.title
                }
            ]
        },
        twitter: {
            ...baseMeta.twitter,
            images: [
                {
                    url: ogImage,
                    alt: page.data.title
                }
            ]
        }
    };
}
