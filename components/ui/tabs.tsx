import { ReactNode } from 'react';

import * as Tabs from '@radix-ui/react-tabs';

interface TabItem {
    value: string;
    label: string;
    content: ReactNode;
}

interface TabsComponentProps {
    tabs: TabItem[];
    defaultValue?: string;
    className?: string;
}

export default function TabsComponent({ tabs, defaultValue, className = '' }: TabsComponentProps) {
    return (
        <Tabs.Root defaultValue={defaultValue || tabs[0]?.value} className={`w-full ${className}`}>
            <Tabs.List className='mx-auto mb-12 flex w-full max-w-md rounded-lg border border-white/[0.08] bg-white/[0.03] p-1.5 backdrop-blur-sm'>
                {tabs.map((tab) => (
                    <Tabs.Trigger
                        key={tab.value}
                        value={tab.value}
                        className='flex-1 cursor-pointer rounded-md px-6 py-2.5 text-sm font-medium transition-all duration-300 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-lg data-[state=inactive]:text-white/60 data-[state=inactive]:hover:text-white/90'>
                        {tab.label}
                    </Tabs.Trigger>
                ))}
            </Tabs.List>

            {tabs.map((tab) => (
                <Tabs.Content key={tab.value} value={tab.value} className='focus:outline-none'>
                    {tab.content}
                </Tabs.Content>
            ))}
        </Tabs.Root>
    );
}