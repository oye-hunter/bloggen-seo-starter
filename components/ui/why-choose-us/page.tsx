// import React from 'react';
// import { Rocket, Lightbulb, ArrowUpRight, Shield, Bot, Headphones } from 'lucide-react';

// function page() {
//   return (
//     <div id="why-choose-us" className="flex overflow-hidden flex-col justify-center items-center py-20 w-full bg-[#111111]">
//       <div className="flex flex-col justify-center w-full max-w-[1280px] ">
//         <div className="flex flex-col justify-center w-full">
//           <div className="flex flex-col gap-6 justify-between w-full">
//             <div className="text-7xl font-bold tracking-wide text-white leading-[72px] max-w-[740px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
//               Why We Stand Out
//             </div>
//             <div className="text-xl tracking-normal leading-7 text-zinc-400 max-md:max-w-full">
//               We believe in crafting products that combine quality, simplicity, and a bit of everyday magic. <br /> Here's what drives us:
//             </div>
//           </div>

//           <div className="flex flex-wrap gap-5 items-start w-full mt-10">
//             <div className="flex flex-col flex-1 shrink justify-center p-5 rounded-md basis-0 bg-zinc-900 md:min-w-[413px] min-w-full">
//               <div className="flex flex-col w-full min-h-[160px]">
//                 <div className="flex justify-center items-center p-4 w-14 h-14 rounded-lg bg-zinc-800">
//                   <Rocket className="w-6 h-6 text-white" />
//                 </div>
//                 <div className="flex flex-col mt-2 w-full">
//                   <div className="text-2xl font-semibold tracking-normal leading-none text-zinc-100">
//                     We Evolve with You
//                   </div>
//                   <div className="mt-1.5 text-lg tracking-normal leading-7 text-zinc-400">
//                     Our software scales with your bold ambitions, ensuring you're never held back.
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col flex-1 shrink justify-center p-5 rounded-md basis-0 bg-zinc-900 md:min-w-[413px] min-w-full">
//               <div className="flex flex-col w-full min-h-[160px]">
//                 <div className="flex justify-center items-center p-4 w-14 h-14 rounded-lg bg-zinc-800">
//                   <Lightbulb className="w-6 h-6 text-white" />
//                 </div>
//                 <div className="flex flex-col mt-2 w-full">
//                   <div className="text-2xl font-semibold tracking-normal leading-none text-zinc-100">
//                     Straightforward & Simple
//                   </div>
//                   <div className="mt-1.5 text-lg tracking-normal leading-7 text-zinc-400">
//                     Easy-to-use interfaces mean less guesswork and more getting things done.
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col flex-1 shrink justify-center p-5 rounded-md basis-0 bg-zinc-900 md:min-w-[413px] min-w-full">
//               <div className="flex flex-col w-full min-h-[160px]">
//                 <div className="flex justify-center items-center p-4 w-14 h-14 rounded-lg bg-zinc-800">
//                   <ArrowUpRight className="w-6 h-6 text-white" />
//                 </div>
//                 <div className="flex flex-col mt-2 w-full">
//                   <div className="text-2xl font-semibold tracking-normal leading-none text-zinc-100">
//                     Always Evolving
//                   </div>
//                   <div className="mt-1.5 text-lg tracking-normal leading-7 text-zinc-400">
//                     We roll out seamless updates, so you're always equipped with the latest features.
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col flex-1 shrink justify-center p-5 rounded-md basis-0 bg-zinc-900 md:min-w-[413px] min-w-full">
//               <div className="flex flex-col w-full min-h-[160px]">
//                 <div className="flex justify-center items-center p-4 w-14 h-14 rounded-lg bg-zinc-800">
//                   <Shield className="w-6 h-6 text-white" />
//                 </div>
//                 <div className="flex flex-col mt-2 w-full">
//                   <div className="text-2xl font-semibold tracking-normal leading-none text-zinc-100">
//                     Serious About Security
//                   </div>
//                   <div className="mt-1.5 text-lg tracking-normal leading-7 text-zinc-400">
//                     We prioritize robust protection to safeguard your data and your trust.
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col flex-1 shrink justify-center p-5 rounded-md basis-0 bg-zinc-900 md:min-w-[413px] min-w-full">
//               <div className="flex flex-col w-full min-h-[160px]">
//                 <div className="flex justify-center items-center p-4 w-14 h-14 rounded-lg bg-zinc-800">
//                   <Bot className="w-6 h-6 text-white" />
//                 </div>
//                 <div className="flex flex-col mt-2 w-full">
//                   <div className="text-2xl font-semibold tracking-normal leading-none text-zinc-100">
//                     Automation That Frees You
//                   </div>
//                   <div className="mt-1.5 text-lg tracking-normal leading-7 text-zinc-400">
//                     Smart tools handle repetitive tasks, letting you spend time on bigger goals.
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col flex-1 shrink justify-center p-5 rounded-md basis-0 bg-zinc-900 md:min-w-[413px] min-w-full">
//               <div className="flex flex-col w-full min-h-[160px]">
//                 <div className="flex justify-center items-center p-4 w-14 h-14 rounded-lg bg-zinc-800">
//                   <Headphones className="w-6 h-6 text-white" />
//                 </div>
//                 <div className="flex flex-col mt-2 w-full">
//                   <div className="text-2xl font-semibold tracking-normal leading-none text-zinc-100">
//                     We've Got Your Back
//                   </div>
//                   <div className="mt-1.5 text-lg tracking-normal leading-7 text-zinc-400">
//                     Friendly, human support is just a click away whenever you need it.
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default page;








'use client'
import { useState } from 'react'
import { Rocket, Lightbulb, ArrowUpRight, Shield, Bot, Headphones } from 'lucide-react'

function WhyWeStandOut() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const features = [
    {
      icon: Rocket,
      title: "We Evolve with You",
      description: "Our software scales with your ambitions, ensuring you're never held back."
    },
    {
      icon: Lightbulb,
      title: "Straightforward & Simple",
      description: "Easy-to-use interfaces mean less guesswork and more getting things done."
    },
    {
      icon: ArrowUpRight,
      title: "Always Evolving",
      description: "We roll out seamless updates, so you're always equipped with the latest features."
    },
    {
      icon: Shield,
      title: "Serious About Security",
      description: "We prioritize robust protection to safeguard your data and your trust."
    },
    {
      icon: Bot,
      title: "Automation That Frees You",
      description: "Smart tools handle repetitive tasks, letting you spend time on bigger goals."
    },
    {
      icon: Headphones,
      title: "We've Got Your Back",
      description: "Friendly, human support is just a click away whenever you need it."
    }
  ]

  return (
    <section id="why-choose-us" className="relative w-full overflow-hidden">
      {/* Background Elements */}
      {/* <div className="absolute w-full inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.03)_50%,transparent_75%)] bg-[length:4px_4px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div> */}

      <div className="relative w-full py-20">
			  <div className="max-w-[90%] xl:max-w-[1280px] mx-auto">
          {/* Header */}
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center space-x-3">
              <div className="h-px w-12 bg-white/30" />
              <span className="text-white/50 text-sm uppercase tracking-wider">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-bold text-white leading-[1.1]">
              Why We Stand Out
            </h2>
            <p className="text-xl text-white/60">
              We believe in crafting products that combine quality, simplicity, and a bit of everyday magic. 
              Here's what drives us:
            </p>
          </div>

          {/* Features Grid */}
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`
                  relative p-8 rounded-xl border border-white/[0.08]
                  bg-gradient-to-b from-white/[0.08] to-transparent
                  transition-all duration-500
                  hover:border-white/[0.15] hover:from-white/[0.12]
                `}>
                  {/* Top Gradient Line */}
                  <div className="absolute top-0 left-0 right-0 h-[1px]">
                    <div className={`
                      absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
                      transition-opacity duration-500
                      ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}
                    `} />
                  </div>

                  <div className="flex flex-col space-y-6">
                    {/* Icon */}
                    <div className="relative w-14 h-14">
                      <div className={`
                        absolute inset-0 rounded-xl
                        bg-gradient-to-b from-white/[0.15] to-transparent
                        transition-opacity duration-500
                        ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}
                      `} />
                      <div className="relative flex items-center justify-center w-full h-full  rounded-xl bg-white/[0.03]">
                        <feature.icon className={`
                          w-6 h-6 transition-all duration-500
                          ${hoveredCard === index ? 'text-white scale-100' : 'text-white/70'}
                        `} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className={`
                        text-2xl font-semibold transition-colors duration-500
                        ${hoveredCard === index ? 'text-white' : 'text-white/90'}
                      `}>
                        {feature.title}
                      </h3>
                      <p className={`
                        text-lg leading-relaxed transition-colors duration-500
                        ${hoveredCard === index ? 'text-white/60' : 'text-white/60'}
                      `}>
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Gradient Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-[1px]">
                    <div className={`
                      absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                      transition-opacity duration-500
                      ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}
                    `} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyWeStandOut
