import About from "@/components/ui/about/page";
import Header from "@/components/layout/header/Header";
import WhyChooseUs from "@/components/ui/why-choose-us/page";
import Products from "@/components/ui/our-products/page";
import Hero from "@/components/ui/hero/page";
import Footer from "@/components/layout/footer/Footer";
import BackgroundGrid from "@/components/layout/BackgroundGrid";
import { baseUrl } from "app/sitemap";
// import { BlogPosts } from "@/components/posts";
// import { createPageMetadata } from "@/lib/seo/metadata/createPageMetadata";
import { Metadata } from "next";
import TeamSection from "@/components/ui/team/TeamSection";
// import { homeMetadata } from "@/lib/seo/metadata/home";
// export { homeMetadata as metadata };

// const meta = {
//   pageTitle: "Digital Innovation Studio",
// };


// export const homeMetadata: Metadata = {
//   ...defaultMetadata,

//   title: {
//     default: `${meta.pageTitle}`,
//     template: `%s | ${meta.pageTitle}`,
//   },
//   openGraph: {
//     ...defaultMetadata.openGraph,
//     title: meta.pageTitle,
    
//   },
//   twitter: {
//     ...defaultMetadata.twitter,
//     title: meta.pageTitle,
//   },
// };

// export const metadata: Metadata = createPageMetadata({
//   path: "Digital Innovation Studio",

// });

export default function Page() {
  return (
    <main className="w-full flex flex-col items-center bg-black  justify-center overflow-hidden relative">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Silverthread Labs",
            description:
              "We design AI that feels personal and empowers everyday innovation. Join our community of creators building open-source AI tools that simplify daily life. From custom automation to collaborative projects, Silverthread Labs transforms ideas into accessible solutions that make technology work for you, not the other way around. Start building, automating, and simplifying with us today.",
            url: `${baseUrl}`,
            // image: `${baseUrl}/og?title=${encodeURIComponent(home.title)}`,
            foundingDate: "2024-08-01",
            email: "silverthreadlabs@gmail.com",
            telephone: "+923138414777",
            sameAs: ["https://www.linkedin.com/company/silverthreadlabs/"],
          }),
        }}
      />
      <BackgroundGrid />
      <Header />
      <Hero />
      <div className="flex max-w-full  w-full  flex-col items-center justify-center">
        <About />
        <Products />
        <TeamSection/> 

        {/* <BlogPosts isHomePage={true}/> */}
        <WhyChooseUs />
      </div>
      {/* <Footer /> */}
    </main>
  );
}
