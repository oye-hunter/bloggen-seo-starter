import type { ReactNode } from 'react';

import '@/app/global.css';
import { blogSource } from '@/lib/source';
import BackgroundGrid from '@/components/layout/BackgroundGrid';

import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { RootProvider } from 'fumadocs-ui/provider';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <RootProvider>
            <div className='relative min-h-screen'>
                <BackgroundGrid />
                <div className='mx-auto max-w-7xl flex-auto'>
                    <DocsLayout
                        tree={blogSource.pageTree}
                        sidebar={{ enabled: false }}
                        searchToggle={{ enabled: false }}
                        nav={{ enabled: true }}>
                        {children}
                    </DocsLayout>
                </div>
            </div>
        </RootProvider>
    );
}
