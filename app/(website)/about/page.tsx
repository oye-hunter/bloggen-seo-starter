// 'use client'
// import { useState } from 'react';
import Link from "next/link";
import {
  ArrowUpRight,
  Lightbulb,
  Users,
  Target,
  Rocket,
  Code,
  Heart,
} from "lucide-react";
// import BackgroundGrid from "@/components/layout/BackgroundGrid";
import { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata/create-page-metadata";

export const metadata: Metadata = createPageMetadata({
  path: "about",
  description:
    "Silverthread Labs is a collaborative community building open-source AI tools that simplify daily life through accessible automation. Join us to create custom solutions that empower your personal and professional projects.",
});

interface Value {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation First",
    description:
      "We push boundaries and explore new possibilities, constantly seeking innovative solutions to complex problems.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "User-Centered Design",
    description:
      "Every feature and decision is crafted with our users' needs at the forefront, ensuring intuitive and delightful experiences.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Impact Driven",
    description:
      "We measure our success by the positive impact we create, focusing on solutions that make a real difference.",
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Technical Excellence",
    description:
      "We maintain the highest standards in our code and architecture, building robust and scalable solutions.",
  },
];

export default function AboutPage() {
  // const [isHovered, setIsHovered] = useState(false);
  // const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  return (
    <section className="relative w-full min-h-screen bg-black">
      {/* <BackgroundGrid /> */}

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Silverthread Labs",
            url: "https://www.silverthreadlabs.com",
     
            description:
              "Silverthread Labs is a collaborative community building open-source AI tools that simplify daily life through accessible automation. Join us to create custom solutions that empower your personal and professional projects.",
            foundingDate: "2020",
            address: {
              "@type": "PostalAddress",
              addressLocality: "San Francisco",
              addressRegion: "CA",
              addressCountry: "US",
            },
            member: {
              "@type": "Organization",
              name: "Silverthread Labs Team",
              numberOfMembers: "3",
            },
            product: [
              {
                "@type": "Product",
                name: "GlanceAI",
                description:
                  "A tool that revolutionized how people interact with web content.",
              },
              {
                "@type": "Product",
                name: "DesignRift",
                description:
                  "A product that continues to push boundaries in simplifying complexity through thoughtful design and powerful technology.",
              },
            ],
            values: [
              {
                "@type": "EducationalOrganization",
                name: "Innovation First",
                description:
                  "We push boundaries and explore new possibilities, constantly seeking innovative solutions to complex problems.",
              },
              {
                "@type": "EducationalOrganization",
                name: "User-Centered Design",
                description:
                  "Every feature and decision is crafted with our users' needs at the forefront, ensuring intuitive and delightful experiences.",
              },
              {
                "@type": "EducationalOrganization",
                name: "Impact Driven",
                description:
                  "We measure our success by the positive impact we create, focusing on solutions that make a real difference.",
              },
              {
                "@type": "EducationalOrganization",
                name: "Technical Excellence",
                description:
                  "We maintain the highest standards in our code and architecture, building robust and scalable solutions.",
              },
            ],
            sameAs: ["https://www.linkedin.com/company/silverthreadlabs/"],
          }),
        }}
      />

      <div className="max-w-[90%] xl:max-w-[1280px] mx-auto pt-24 ">
        {/* Header Section */}
        <div className="space-y-6 mb-16">
          <div className="flex items-center space-x-3">
            <div className="h-px w-12 bg-white/30" />
            <span className="text-white/50 text-sm uppercase tracking-wider">
              About Us
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-white leading-[1.1]">
            Building the Future
            <br />
            of Digital Innovation
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 mb-20">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-20">
            {/* Story Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Our Story</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-white/80 leading-relaxed">
                  Founded in 2020, we emerged from a simple yet powerful idea:
                  technology should make life easier, not more complicated. What
                  started as a small team of passionate developers has grown
                  into a dynamic company dedicated to creating innovative
                  digital solutions.
                </p>
                <p className="text-lg text-white/80 leading-relaxed">
                  Our journey began with GlanceAI, a tool that revolutionized
                  how people interact with web content. Today, we continue to
                  push boundaries with products like DesignRift, always staying
                  true to our core mission of simplifying complexity through
                  thoughtful design and powerful technology.
                </p>
              </div>
            </div>

            {/* Enhanced Values Section */}
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Our Values</h2>
                <p className="text-lg text-white/60">
                  The principles that guide everything we do
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="relative group"
                    // onMouseEnter={() => setHoveredValue(index)}
                    // onMouseLeave={() => setHoveredValue(null)}
                  >
                    <div
                      className={`
                      relative z-10 p-6 rounded-xl border border-white/[0.08]
                      bg-gradient-to-br from-white/[0.08] to-transparent
                      transition-all duration-500 overflow-hidden
                      ${false ? "border-white/[0.15] from-white/[0.12]" : ""}
                    `}
                    >
                      {/* Top Gradient Line */}
                      <div className="absolute top-0 left-0 right-0 h-[1px]">
                        <div
                          className={`
                          absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
                          transition-opacity duration-500
                          ${false ? "opacity-100" : "opacity-0"}
                        `}
                        />
                      </div>

                      <div className="space-y-4">
                        <div
                          className={`
                          p-2 rounded-lg bg-white/5 w-fit
                          transition-colors duration-300
                          ${false ? "text-white" : "text-white/60"}
                        `}
                        >
                          {value.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-white">
                          {value.title}
                        </h3>
                        <p className="text-white/60 leading-relaxed">
                          {value.description}
                        </p>
                      </div>

                      {/* Bottom Gradient Line */}
                      <div className="absolute bottom-0 left-0 right-0 h-[1px]">
                        <div
                          className={`
                          absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                          transition-opacity duration-500
                          ${false ? "opacity-100" : "opacity-0"}
                        `}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Contact CTA */}
              <Link
                href="/products"
                className="flex items-center justify-center space-x-2 bg-white hover:bg-white/90 text-black px-6 py-4 rounded-lg transition-all duration-300 w-full"
                // onMouseEnter={() => setIsHovered(true)}
                // onMouseLeave={() => setIsHovered(false)}
              >
                <span className="font-medium">Browse Our Products </span>
                <ArrowUpRight
                  className={`
                  w-5 h-5 transition-transform duration-300
                  ${true ? "translate-x-0.5 -translate-y-0.5" : ""}
                `}
                />
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-6 py-4 rounded-lg transition-all duration-300 w-full group"
              >
                <span className="font-medium">Get in Touch</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              {/* Company Info Card */}
              <div className="bg-white/5 rounded-lg p-6 space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  Company Information
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Founded</span>
                    <span className="text-white">2020</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Location</span>
                    <span className="text-white">San Francisco, CA</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Team Size</span>
                    <span className="text-white">10+ Members</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Products</span>
                    <span className="text-white">3 Active Products</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
