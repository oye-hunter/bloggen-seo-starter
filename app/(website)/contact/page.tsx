import { Suspense } from 'react';
import { Metadata } from 'next';

import CalBooking from '@/components/contact/cal-booking';
import ContactForm from '@/components/contact/contact-form';
import TabsComponent from '@/components/ui/tabs';
import { createPageMetadata } from '@/lib/seo/metadata/create-page-metadata';
import ContactSchema from '@/lib/seo/schema/contact';
import BackgroundGrid from '@/components/layout/BackgroundGrid';

export const metadata: Metadata = createPageMetadata({
    path: 'contact',
    description:
        'Have questions about our products, or just want to share your thoughts? We would love to hear from you!'
});

const LoadingSpinner = () => (
    <div className='flex h-96 items-center justify-center'>
        <div className='h-8 w-8 animate-spin rounded-full border-b-2 border-white'></div>
    </div>
);

const ContentWrapper = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <div
        className={`relative overflow-hidden rounded-xl border border-white/[0.08] bg-gradient-to-b from-white/[0.08] to-transparent transition-all duration-500 hover:border-white/[0.15] hover:from-white/[0.12] ${className}`}>
        {/* Top Gradient Line */}
        <div className="absolute top-0 left-0 right-0 h-[1px]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
        </div>
        {children}
        {/* Bottom Gradient Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
        </div>
    </div>
);

export default function ContactPage() {
    const tabs = [
        {
            value: 'form',
            label: 'Send a message',
            content: (
                <div className='mx-auto max-w-2xl'>
                    <ContentWrapper className='p-8'>
                        <ContactForm />
                    </ContentWrapper>
                </div>
            )
        },
        {
            value: 'call',
            label: 'Book a call',
            content: (
                <ContentWrapper>
                    <Suspense fallback={<LoadingSpinner />}>
                        <CalBooking />
                    </Suspense>
                </ContentWrapper>
            )
        }
    ];

    return (
        <div className="relative w-full bg-black min-h-screen pt-4 overflow-hidden">
            <ContactSchema />
            <BackgroundGrid />
            
            <div className="relative max-w-[1280px] mx-auto px-6 py-20">
                {/* Header Section */}
                <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
                    <div className="flex items-center justify-center space-x-3">
                        <div className="h-px w-12 bg-white/30" />
                        <span className="text-white/50 text-sm uppercase tracking-wider">
                            Contact Us
                        </span>
                        <div className="h-px w-12 bg-white/30" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white">
                        Get in touch
                    </h1>
                    <p className="text-lg md:text-xl text-white/60">
                        Book a meeting with us to discuss how we can help or fill out a form to get in touch
                    </p>
                </div>

                {/* Tabs Section */}
                <TabsComponent tabs={tabs} defaultValue='form' />
            </div>
        </div>
    );
}