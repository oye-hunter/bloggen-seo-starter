'use client';

import { useEffect, useState } from 'react';
import type { TOCItemType } from 'fumadocs-core/server';
import { cn } from '@/lib/utils';

interface BlogTOCProps {
    toc: TOCItemType[];
}

export function BlogTOC({ toc }: BlogTOCProps) {
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-80px 0px -80% 0px',
            }
        );

        // Observe all headings
        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        headings.forEach((heading) => observer.observe(heading));

        return () => {
            headings.forEach((heading) => observer.unobserve(heading));
        };
    }, []);

    if (!toc || toc.length === 0) return null;

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
        e.preventDefault();
        const element = document.querySelector(url);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="sticky top-24 hidden xl:block">
            <div className="relative">
                {/* Decorative gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent rounded-2xl blur-xl" />
                
                <div className="relative backdrop-blur-sm bg-white/[0.02] border border-white/10 rounded-2xl px-4 py-6 shadow-2xl">
                    {/* Header with decorative line */}
                    <div className="mb-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-px w-8 bg-gradient-to-r from-white/50 to-transparent" />
                            <h2 className="text-sm font-semibold text-white/90 uppercase tracking-wider">
                                On This Page
                            </h2>
                        </div>
                        <div className="h-[2px] w-full bg-gradient-to-r from-white/20 via-white/10 to-transparent rounded-full" />
                    </div>

                    {/* Navigation */}
                    <nav className="space-y-1">
                        {toc.map((item, index) => {
                            const isActive = activeId === item.url.slice(1);
                            const depth = item.depth - 1;

                            return (
                                <div
                                    key={item.url}
                                    className="relative"
                                    style={{
                                        paddingLeft: `${depth * 12}px`,
                                    }}
                                >
                                    <a
                                        href={item.url}
                                        onClick={(e) => handleClick(e, item.url)}
                                        className={cn(
                                            'group flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300 relative overflow-hidden',
                                            isActive
                                                ? 'text-white font-medium'
                                                : 'text-white/60 hover:text-white/90'
                                        )}
                                    >
                                        {/* Hover background effect */}
                                        <div
                                            className={cn(
                                                'absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg',
                                                
                                            )}
                                        />

                                        {/* Depth indicator dots */}
                                        {/* {depth > 0 && (
                                            <div className="flex items-center gap-1">
                                                {Array.from({ length: depth }).map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className={cn(
                                                            'w-1 h-1 rounded-full transition-all duration-300',
                                                            isActive
                                                                ? 'bg-white/80'
                                                                : 'bg-white/30 group-hover:bg-white/50'
                                                        )}
                                                    />
                                                 ))} 
                                            </div>
                                        )} */}

                                        {/* Link text */}
                                        <span className="relative z-10 text-xs leading-relaxed truncate">
                                            {item.title}
                                        </span>

                                        {/* Active glow effect */}
                                        {/* {isActive && (
                                            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-lg" />
                                        )} */}
                                    {/* Active indicator line */}
                                    {isActive && (
                                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-gradient-to-b from-white/80 via-white/50 to-transparent rounded-full" />
                                    )}
                                    </a>

                                    {/* Connection line for nested items */}


                                    {/* {depth > 0 && (
                                        <div
                                            className="absolute left-2 top-0 w-px h-full bg-gradient-to-b from-white/10 to-transparent"
                                            style={{ left: `${(depth - 1) * 12 + 8}px` }}
                                        />
                                    )} */}
                                </div>
                            );
                        })}
                    </nav>

                    {/* Footer decoration */}
                    <div className="mt-6 pt-4 border-t border-white/5">
                        <div className="flex items-center justify-center gap-2">
                            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full" />
                        </div>
                    </div>
                </div>

                {/* Outer glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-50 blur-2xl -z-10" />
            </div>
        </div>
    );
}
