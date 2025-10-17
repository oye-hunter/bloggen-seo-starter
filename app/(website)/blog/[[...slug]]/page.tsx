import { notFound } from 'next/navigation';
import path from 'path';
import Image from 'next/image';

import { BlogPosts } from '@/components/blog/blog-post';
import BlogHeader from '@/components/blog/blog-header';
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
import { onRateAction, owner, repo } from '@/lib/github';
import { formatDate } from '@/lib/utils/mdx';
import {
    PageArticle,
    PageBreadcrumb,
    PageFooter,
    PageLastUpdate,
    PageRoot,
    PageTOC,
    PageTOCItems,
    PageTOCPopover,
    PageTOCPopoverContent,
    PageTOCPopoverItems,
    PageTOCPopoverTrigger,
    PageTOCTitle,
} from 'fumadocs-ui/layouts/docs/page';
import Link from 'next/link';

export default async function Page(props: { params: Promise<{ slug?: string[] }> }) {
    const params = await props.params;

    // If this is the root /blog path (empty slug)
    if (!params.slug || params.slug.length === 0) {
        return (
            <main role='main' className='min-h-screen '>
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
            <div className='flex max-w-7xl flex-col py-16 md:py-28'>
                {/* Blog Header */}
                <BlogHeader title={page.data.title} publishedAt={page.data.publishedAt} image={page.data.image} />
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
            <PageRoot
                toc={{
                    toc: page.data.toc,
                    single: false,
                }}
            >
                {page.data.toc.length > 0 && (
                    <PageTOCPopover>
                        <PageTOCPopoverTrigger />
                        <PageTOCPopoverContent>
                            <PageTOCPopoverItems />
                        </PageTOCPopoverContent>
                    </PageTOCPopover>
                )}
                <PageArticle>
                    <PageBreadcrumb />

                    {/* Content */}
                    <div className="prose flex-1 text-fd-foreground/80">
                        <MDXContent
                            components={getMDXComponents({
                                a: ({ href, ...props }) => {
                                    const found = blogSource.getPageByHref(href ?? '', {
                                        dir: path.dirname(page.path),
                                    });

                                    if (!found) return <Link href={href ?? '#'} {...props} />;

                                    return (
                                        <Link
                                            href={
                                                found.hash
                                                    ? `${found.page.url}#${found.hash}`
                                                    : found.page.url
                                            }
                                            {...props}
                                        />
                                    );
                                },
                            })}
                        />
                    </div>

                    {page.data.publishedAt && (
                        <PageLastUpdate date={new Date(page.data.publishedAt)} />
                    )}
                    <PageFooter />
                </PageArticle>
                
                {page.data.toc.length > 0 && (
                    <PageTOC>
                        <PageTOCTitle />
                        <PageTOCItems variant="clerk" />
                    </PageTOC>
                )}
            </PageRoot>
            </div>
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
