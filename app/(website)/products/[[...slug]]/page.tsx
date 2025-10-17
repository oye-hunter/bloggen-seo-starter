import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import path from 'path';
import type { ComponentProps, FC } from 'react';

import { ProductPosts } from '@/components/products/prodcut-posts';
import { ContentTOC } from '@/components/shared/content-toc';
import { ContentTOCMobile } from '@/components/shared/content-toc-mobile';
import { siteConfig } from '@/lib/config/site';
import { defaultMetadata } from '@/lib/seo/metadata/create-base-metadata';
import { createPageMetadata } from '@/lib/seo/metadata/create-page-metadata';
import ProductsSchema from '@/lib/seo/schema/products';
import ProductPostSchema from '@/lib/seo/schema/products-posting';
import { productSource, source } from '@/lib/source';
import { getURL } from '@/lib/utils/url';
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
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

export default async function Page(props: { params: Promise<{ slug?: string[] }> }) {
    const params = await props.params;

    // // If this is the root /products path (empty slug)
    if (!params.slug || params.slug.length === 0) {
        return (
            <main role='main' className='min-h-screen'>
                <ProductsSchema />
                <ProductPosts />
            </main>
        );
    }

    const page = productSource.getPage(params.slug);
    if (!page) notFound();

    const MDXContent = page.data.body;

    return (
        <main role='main' className='min-h-screen relative'>
            <ProductPostSchema
                title={page.data.title}
                description={page.data.description}
                summary={page.data.summary}
                publishedAt={page.data.publishedAt}
                lastUpdated={page.data.lastUpdated}
                image={page.data.image}
                ogImage={page.data.ogImage}
                slug={page.slugs}
                author={page.data.author}
                tags={page.data.tags}
                category={page.data.category}
                version={page.data.version}
                link={page.data.link}
            />
            
            <div className='mx-auto max-w-7xl px-4 sm:px-0 py-16 md:py-28'>
                {/* Header Section */}
                <div className="space-y-6 mb-12">
                    <div className="flex items-center space-x-3">
                        <div className="h-px w-12 bg-white/30" />
                        <span className="text-white/50 text-sm uppercase tracking-wider">
                            {page.data.category || 'Product Details'}
                        </span>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        {page.data.title}
                    </h1>
                    
                    <p className="text-lg text-white/70 max-w-3xl">
                        {page.data.summary}
                    </p>
                </div>

                {/* Hero Image */}
                {page.data.image && (
                    <div className="relative w-full aspect-video mb-16 rounded-xl overflow-hidden shadow-2xl">
                        <Image
                            src={page.data.image}
                            alt={page.data.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                <div className='flex flex-col xl:flex-row gap-12'>
                    {/* Main Content */}
                    <div className='flex-1 min-w-0'>
                        <article className="prose prose-invert max-w-none mb-12">
                            <MDXContent
                                components={getMDXComponents({
                                    a: ({ href, ...props }) => {
                                        const found = productSource.getPageByHref(href ?? '', {
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
                            {page.data.lastUpdated && (
                                <p className="text-sm text-white/60 mt-6">
                                    Last updated: {page.data.lastUpdated}
                                </p>
                            )}
                        </div>

                        {/* Back Link */}
                        <div className='mt-12'>
                            <Link
                                href='/products'
                                className='text-white/70 hover:text-white inline-flex items-center transition-colors'>
                                <ArrowLeft className='mr-2 h-4 w-4' />
                                Back to Products
                            </Link>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className='w-full xl:w-72 shrink-0 space-y-6 sticky top-20 self-start'>

                        {/* CTA Button */}
                        {page.data.link && (
                            <Link
                                href={page.data.link}
                                target="_blank"
                                className="flex items-center justify-center space-x-2 bg-white hover:bg-white/90 text-black px-6 py-4 rounded-lg transition-all duration-300 w-full group"
                            >
                                <span className="font-medium">Try {page.data.title}</span>
                                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                        )}
                        {/* Table of Contents */}
                        <ContentTOC toc={page.data.toc} />


                        {/* Product Info */}
                        <div className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4">
                            <h3 className="text-lg font-semibold text-white">Product Information</h3>
                            <div className="space-y-3">
                                {page.data.version && (
                                    <div className="flex justify-between text-sm">
                                        <span className="text-white/60">Version</span>
                                        <span className="text-white">{page.data.version}</span>
                                    </div>
                                )}
                                {page.data.lastUpdated && (
                                    <div className="flex justify-between text-sm">
                                        <span className="text-white/60">Last Updated</span>
                                        <span className="text-white">{page.data.lastUpdated}</span>
                                    </div>
                                )}
                                {page.data.category && (
                                    <div className="flex justify-between text-sm">
                                        <span className="text-white/60">Category</span>
                                        <span className="text-white">{page.data.category}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            {/* Mobile TOC */}
            <ContentTOCMobile toc={page.data.toc} />
        </main>
    );
}

export async function generateStaticParams() {
    return productSource.generateParams();
}

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }) {
    const resolvedParams = await params;

    // Get the current directory path from the file structure
    // This dynamically determines we're in the products section
    const currentPath = 'products';

    // If this is the root path
    if (!resolvedParams.slug || resolvedParams.slug.length === 0) {
        return createPageMetadata({
            path: currentPath,
            description: 'Explore our AI-powered tools and experimental ideas turned into real-world apps.',
            baseMetadata: defaultMetadata
        });
    }

    const page = productSource.getPage(resolvedParams.slug);
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
