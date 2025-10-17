import type { ReactNode } from 'react';

import '@/app/global.css';
import { productSource } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import BackgroundGrid from '@/components/layout/BackgroundGrid';
import { RootProvider } from 'fumadocs-ui/provider';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <RootProvider>
            <div className='relative min-h-screen'>
                <BackgroundGrid />
                <div className='mx-auto max-w-7xl flex-auto'>
                    <DocsLayout
                        tree={productSource.pageTree}
                        sidebar={{ enabled: false }}
                        searchToggle={{ enabled: false }}
                        nav={{ enabled: false }}>
                        {children}
                    </DocsLayout>
                </div>
            </div>
        </RootProvider>
    );
}
