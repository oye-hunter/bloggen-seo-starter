import Link from "next/link";
import { getProductPosts } from '@/lib/products';
import { formatDate } from '@/lib/utils/mdx';
import Image from "next/image";
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import BackgroundGrid from "@/components/layout/BackgroundGrid";

export function ProductPosts() {
  let allProducts = getProductPosts();
  const sortedProducts = allProducts.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <section className="relative w-full bg-black overflow-hidden">
    <BackgroundGrid />
  
    <div className="relative py-20">
      <div className="max-w-[90%] xl:max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center space-x-3">
            <div className="h-px w-12 bg-white/30" />
            <span className="text-white/50 text-sm uppercase tracking-wider">Our Products</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-bold text-white leading-[1.1]">
          Products
          </h2>
          <p className="text-xl text-white/60">
            Discover our collection of premium products designed to enhance your everyday experience.
          </p>
        </div>
  
        {/* Products */}
        <div className="mt-20 space-y-8">
          {sortedProducts.map((post, index) => (
            <Link 
              key={post.slug}
              href={`/products/${post.slug}`}
              className="block group"
            >
              <div className="relative border border-white/[0.08] bg-[#111111] 
                transition-all duration-500 overflow-hidden
                hover:border-white/[0.15]">
                {/* Top Gradient Line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
  
                <div className="flex flex-col xl:flex-row gap-12 p-8">
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex gap-8 items-start">
                      <span className="lg:flex hidden text-8xl font-bold text-white/5 
                        group-hover:text-white/10 transition-colors duration-500">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="space-y-6 pt-4">
                        <div className="space-y-2">
                          <h3 className="text-4xl font-bold text-white">
                            {post.metadata.title}
                          </h3>
                          <div className="flex items-center space-x-2 text-white/60 group-hover:text-white/80">
                            <span className="text-sm">View Details</span>
                            <ArrowUpRight className="w-4 h-4 transition-all duration-500 
                              group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </div>
                        </div>
                        <p className="text-white/60 leading-relaxed">
                          {post.metadata.summary}
                        </p>
                      </div>
                    </div>
                  </div>
  
                  {/* Image */}
                  <div className="w-full xl:w-[600px] relative">
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/[0.15] to-transparent
                      opacity-0 group-hover:opacity-0 transition-opacity duration-500 z-10 w-full" />
                    <Image
                      src={post.metadata.image || ""}
                      alt={post.metadata.title}
                      width={600}
                      height={400}
                      className="rounded-lg transition-transform duration-500 w-full
                        group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
  
                {/* Bottom Gradient Line */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </section>
  
  );
}
