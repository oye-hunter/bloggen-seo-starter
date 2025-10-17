'use client';

import { useState } from 'react';
import type { TOCItemType } from 'fumadocs-core/server';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

interface ContentTOCMobileProps {
    toc: TOCItemType[];
}

export function ContentTOCMobile({ toc }: ContentTOCMobileProps) {
    const [isOpen, setIsOpen] = useState(false);

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
            setIsOpen(false);
        }
    };

    return (
        <div className="xl:hidden fixed bottom-6 right-6 z-50">
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative group"
                aria-label="Toggle table of contents"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative backdrop-blur-sm bg-black/40 border border-white/20 rounded-full p-4 shadow-2xl hover:border-white/30 transition-all duration-300">
                    {isOpen ? (
                        <X className="w-6 h-6 text-white" />
                    ) : (
                        <Menu className="w-6 h-6 text-white" />
                    )}
                </div>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm -z-10"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Menu */}
                    <div className="absolute bottom-20 right-0 w-80 max-w-[calc(100vw-3rem)] animate-in slide-in-from-bottom-5 duration-300">
                        <div className="relative">
                            {/* Decorative gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent rounded-2xl blur-xl" />
                            
                            <div className="relative backdrop-blur-xl bg-black/80 border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
                                {/* Header */}
                                <div className="p-4 border-b border-white/10">
                                    <div className="flex items-center gap-3">
                                        <div className="h-px w-8 bg-gradient-to-r from-white/50 to-transparent" />
                                        <h2 className="text-sm font-semibold text-white/90 uppercase tracking-wider">
                                            On This Page
                                        </h2>
                                    </div>
                                </div>

                                {/* Navigation */}
                                <nav className="p-4 max-h-96 overflow-y-auto space-y-1">
                                    {toc.map((item) => {
                                        const depth = item.depth - 1;

                                        return (
                                            <a
                                                key={item.url}
                                                href={item.url}
                                                onClick={(e) => handleClick(e, item.url)}
                                                className={cn(
                                                    'group flex items-center gap-2 py-2.5 px-3 rounded-lg transition-all duration-300 relative overflow-hidden',
                                                    'text-white/70 hover:text-white hover:bg-white/5'
                                                )}
                                                style={{
                                                    paddingLeft: `${depth * 12 + 12}px`,
                                                }}
                                            >
                                                {/* Depth indicator dots */}
                                                {depth > 0 && (
                                                    <div className="flex items-center gap-1 absolute left-3">
                                                        {Array.from({ length: depth }).map((_, i) => (
                                                            <div
                                                                key={i}
                                                                className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-white/50 transition-all"
                                                            />
                                                        ))}
                                                    </div>
                                                )}

                                                {/* Link text */}
                                                <span className="text-sm leading-relaxed">
                                                    {item.title}
                                                </span>
                                            </a>
                                        );
                                    })}
                                </nav>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
