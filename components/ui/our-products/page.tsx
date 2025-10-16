// // src/components/ProjectsSection.tsx

// import * as React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const ProjectsSection: React.FC = () => {
//   return (
//     <div id="product">
//     <div className="flex overflow-hidden flex-col justify-center items-center lg:py-20 py-[60px]">
//       <div className="flex flex-col justify-center w-full max-w-[1280px] max-md:max-w-full ">
//         {/* Header Section */}
//         <div className="flex flex-col w-full max-md:max-w-full max-w-[769px] gap-6">
//           <h1 className="text-7xl font-bold tracking-wide text-white leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
//             Products
//           </h1>
//           <p className="text-xl tracking-normal leading-7 text-zinc-400 max-md:max-w-full">
//           We pour our passion into every detail, crafting products that not only simplify daily tasks,
// but bring a touch of ease and delight to every moment of your life.
//           </p>
//         </div>

//         {/* Projects Section */}
//         <div className="flex flex-col mt-10 w-full max-md:max-w-full gap-[20px]">
//           {/* First Project Card */}
//           <Link className="flex gap-2" href="https://glanceai.io/" target="#blank">
//           <div className="flex flex-col lg:flex-row gap-9 justify-between items-start p-6 w-full rounded-xl bg-zinc-900 max-md:px-5">
//             {/* Content Section */}
//             <div className="flex flex-col w-full max-md:max-w-full">
//               <div className="flex gap-7 self-start">
//                 <div className="text-9xl font-bold tracking-wider leading-none text-zinc-800 max-md:text-4xl">
//                   01
//                 </div>
//                 <div className="flex flex-col justify-center">
//                   <div className="text-4xl font-bold tracking-normal leading-none text-zinc-100">
//                     GlanceAi.io
//                   </div>
//                   <div className="flex gap-0.5 items-start mt-3 text-sm tracking-normal leading-none text-zinc-400">
                  
//                     <div>Visit Project</div>
//                     <img
//                       loading="lazy"
//                       src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e25cbde340dd8d0e57d79d1d6bb3cb69d91327a13389c32b8cb12e76c472fcb?placeholderIfAbsent=true&apiKey=84be6ce3e68749b9babcf3f30ce4953a" // Example icon URL
//                       alt="Visit"
//                       className="object-contain shrink-0 w-5 aspect-square"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-2 text-base tracking-normal leading-6 text-zinc-400">
//               GlanceAI is a browser extension that enhances your web experience by providing key points, AI chat, concise summaries, and related links for any webpage. It streamlines browsing and research with cutting-edge AI technology.
//               </div>
//             </div>

//             {/* Image Section */}
//               {/* Ensure the image exists at public/assets/68609556_p0.jpg */}
//               <Image
//                 src="/assets/glanceai.png" // Path relative to the public folder
//                 alt="GlanceAi.io Project"
//                 width={600}
//                 height={400}
//                 className="object-cover rounded-lg w-full"
//               />

//           </div>
//           </Link>
//           {/* Second Project Card */}
//           <Link className="flex gap-2" href="https://designrift-coming-soon.vercel.app/" target="#blank">
//           <div className="flex flex-col lg:flex-row gap-9 justify-between items-start p-6 w-full rounded-xl bg-zinc-900 max-md:px-5">
//             {/* Content Section */}
//             <div className="flex flex-col w-full max-md:max-w-full">
//               <div className="flex gap-7 self-start">
//                 <div className="text-9xl font-bold tracking-wider leading-none text-zinc-800 max-md:text-4xl">
//                   02
//                 </div>
//                 <div className="flex flex-col justify-center">
//                   <div className="text-4xl font-bold tracking-normal leading-none text-zinc-100">
//                     Designrift
//                   </div>
//                   <div className="flex gap-0.5 items-start mt-3 text-sm tracking-normal leading-none text-zinc-400">
//                     <div>Visit Project</div>
//                     <img
//                       loading="lazy"
//                       src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e25cbde340dd8d0e57d79d1d6bb3cb69d91327a13389c32b8cb12e76c472fcb?placeholderIfAbsent=true&apiKey=84be6ce3e68749b9babcf3f30ce4953a" // Example icon URL
//                       alt="Visit"
//                       className="object-contain shrink-0 w-5 aspect-square"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-2 text-base tracking-normal leading-6 text-zinc-400">
//               DesignRift is a dynamic web tool designed for developers and designers to streamline their workflow. Users can select custom colors for their project themes, and the platform generates corresponding CSS variables and Tailwind CSS variables. 
//               </div>
//             </div>

//             {/* Image Section */}
//             {/* <div className="flex w-full lg:w-[477px] rounded-lg bg-zinc-600"> */}
//               {/* Ensure the image exists at public/assets/68609556_p0.jpg */}
//               <Image
//                 src="/assets/designrift.png" // Path relative to the public folder
//                 alt="GlanceAi.io Project"
//                 width={600}
//                 height={400}
//                 className="object-cover rounded-lg w-full"
//               />
//           </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default ProjectsSection;


'use client'
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from 'lucide-react'

const page = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      number: "01",
      title: "BlogGen",
      description: "Bloggen is a powerful blogging platform designed to help writers and content creators craft, manage, and publish their stories effortlessly. It offers intuitive tools and seamless integrations for a smooth writing experience.",
      image: "/assets/bloggen.webp",
      link: "https://www.silverthreadlabs.com/products/bloggen"
    },
    {
      number: "02",
      title: "Designrift",
      description: "DesignRift is a dynamic web tool designed for developers and designers to streamline their workflow. Users can select custom colors for their project themes, and the platform generates corresponding CSS variables and Tailwind CSS variables.",
      image: "/assets/designrift.webp",
      link: "https://www.silverthreadlabs.com/products/designrift"
    },
    {
      number: "03",
      title: "GlanceAi.io",
      description: "GlanceAI is a browser extension that enhances your web experience by providing key points, AI chat, concise summaries, and related links for any webpage. It streamlines browsing and research with cutting-edge AI technology.",
      image: "/assets/glanceai.webp",
      link: "https://www.silverthreadlabs.com/products/glanceai"
    },
    
 
  ]

  return (
    <section id="product" className="relative w-full overflow-hidden">
      {/* Background Elements */}
      {/* <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.03)_50%,transparent_75%)] bg-[length:4px_4px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div> */}

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
              We pour our passion into every detail, crafting products that not only simplify daily tasks,
              but bring a touch of ease and delight to every moment of your life.
            </p>
          </div>

          {/* Projects */}
          <div className="mt-20 space-y-8">
            {projects.map((project, index) => (
              <Link 
                key={index}
                href={project.link}
                target="_blank"
                className="block"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className={`
                  relative  border border-white/[0.08]
                  bg-[#111111] from-white/[0.08] to-transparent
                  transition-all duration-500
                  hover:border-white/[0.15] hover:from-white/[0.12]
                  overflow-hidden
                `}>
                  {/* Top Gradient Line */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] z-10">
                    <div className={`
                      absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
                      transition-opacity duration-500
                      ${hoveredProject === index ? 'opacity-100' : 'opacity-0'}
                    `} />
                  </div>

                  <div className="flex flex-col xl:flex-row gap-12 p-8">
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex gap-8 items-start">
                        <span className={`
                          lg:flex hidden text-8xl font-bold transition-colors duration-500
                          ${hoveredProject === index ? 'text-white/10' : 'text-white/5'}
                        `}>
                          {project.number}
                        </span>
                        <div className="space-y-6 pt-4">
                          <div className="space-y-2">
                            <h3 className="text-4xl font-bold text-white">
                              {project.title}
                            </h3>
                            <div className="flex items-center space-x-2 text-white/60 group-hover:text-white/80">
                              <span className="text-sm">Visit Project</span>
                              <ArrowUpRight className={`
                                w-4 h-4 transition-all duration-500
                                ${hoveredProject === index ? 'translate-x-0.5 -translate-y-0.5' : ''}
                              `} />
                            </div>
                          </div>
                          <p className="text-white/60 leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="w-full xl:w-[600px] relative">
                      <div className={`
                        absolute inset-0 rounded-lg bg-gradient-to-r from-white/[0.15] to-transparent
                        transition-opacity duration-500 z-10 w-full
                        ${hoveredProject === index ? 'opacity-0' : 'opacity-0'}
                      `} />
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className={`
                          rounded-lg transition-transform duration-500 w-full
                          ${hoveredProject === index ? 'scale-[1.02]' : 'scale-100'}
                        `}
                      />
                    </div>
                  </div>

                  {/* Bottom Gradient Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] z-10">
                    <div className={`
                      absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                      transition-opacity duration-500
                      ${hoveredProject === index ? 'opacity-100' : 'opacity-0'}
                    `} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
