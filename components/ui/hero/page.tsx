// 'use client'
// import React, { useState } from 'react';
// import { BrainCircuit as Circuit, Cpu, Network, ChevronRight, Code, Cloud, Shield } from 'lucide-react';

// function App() {
//   const [activeNode, setActiveNode] = useState<number | null>(null);

//   return (
//     <div className="relative w-screen min-h-screen  overflow-hidden">
//       {/* Animated Thread Background */}
//       {/* <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.03)_50%,transparent_75%)] bg-[length:4px_4px] animate-thread" />
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />
//       </div> */}

//       {/* HUD-style Overlay Elements */}
//       <div className="absolute top-0 left-0 w-64 h-64 border border-white/10 rounded-br-[100px]">
//         <div className="absolute top-4 left-4 w-2 h-2 bg-white/50" />
//         <div className="absolute bottom-4 right-4 w-2 h-2 bg-white/50" />
//       </div>
//       <div className="absolute top-0 right-0 w-64 h-64 border border-white/10 rounded-bl-[100px]">
//         <div className="absolute top-4 right-4 w-2 h-2 bg-white/50" />
//         <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/50" />
//       </div>

//       <div className="relative ">
       

//         {/* Hero Section */}
//         <div className="flex items-center justify-center mx-auto lg:max-w-[1280px] max-w-[90%]  h-screen">
//           <div className="grid lg:grid-cols-2 gap-12 lg:pt-10 w-full lg:mt-[20px] mt-[10px] lg:px-[0px] ">
//             {/* Left Column */}
//             <div className="flex  flex-col justify-center relative">
//               {/* Decorative Elements */}
//               <div className="absolute -left-4 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/50 to-transparent" />
              
//               {/* <div className="mb-8">
//                 <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 text-sm text-white">
//                   <span className="text-white/70">Enterprise-Grade Solutions</span>
//                   <ChevronRight className="w-4 h-4 text-white/50" />
//                 </div>
//               </div> */}
              
//               <h1 className="text-5xl lg:text-8xl font-bold text-white leading-tight mb-6">
//               Human 
//                 <span className="text-transparent ml-[12px] bg-clip-text bg-gradient-to-r from-white via-gray-400 to-white">
//                 First
//                 </span>
//               </h1>
              
//               <p className="text-gray-400 text-xl mb-8 max-w-lg">
//               Technology shouldn’t complicate things. We design AI that feels personal and seamless, so you can innovate without losing that human touch.
//               </p>
              
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <a href="#product">
//                 <button className="cursor-pointer group relative bg-white/5 text-white px-20 py-3 transition-all backdrop-blur-sm border-y border-white/20 hover:border-white/40">
//                   <div className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white/50 to-transparent group-hover:via-white" />
//                   <div className="absolute right-0 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white/50 to-transparent group-hover:via-white" />
//                   <div className="relative flex items-center space-x-2">
//                     <span className="relative z-10">Browse Our Tools</span>
//                     <div className="w-4 h-4 relative">
//                       <div className="absolute inset-0 bg-white/20 group-hover:bg-white/40 animate-ping" />
//                       <div className="absolute inset-0 bg-white/40" />
//                     </div>
//                   </div>
//                   <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity" />
//                 </button>
//                 </a>
//               </div>

//               {/* Feature Grid */}
//               <div className="grid grid-cols-3 gap-4 mt-16">
//                 <div className="flex flex-col items-center p-4 bg-white/5 border border-white/10 backdrop-blur-sm">
//                   <Cloud className="w-6 h-6 text-white mb-2" />
//                   <span className="text-white/70 text-sm text-center">Infinite Scale</span>
//                 </div>
//                 <div className="flex flex-col items-center p-4 bg-white/5 border border-white/10 backdrop-blur-sm">
//                   <Shield className="w-6 h-6 text-white mb-2" />
//                   <span className="text-white/70 text-sm text-center">Ironclad Security</span>
//                 </div>
//                 <div className="flex flex-col items-center p-4 bg-white/5 border border-white/10 backdrop-blur-sm">
//                   <Code className="w-6 h-6 text-white mb-2" />
//                   <span className="text-white/70 text-sm text-center">Powerful Code</span>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column - Interactive Neural Network Visualization */}
//             <div className="relative hidden lg:block">
//               <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent blur-3xl opacity-20" />
//               <div className="relative h-full flex items-center justify-center">
//                 <div className="w-[500px] h-[500px] relative">
//                   {/* Neural Network Nodes */}
//                   {[...Array(12)].map((_, i) => (
//                     <div
//                       key={i}
//                       className={`absolute w-3 h-3 transition-all duration-500 ${
//                         activeNode === i ? 'scale-150' : ''
//                       }`}
//                       style={{
//                         left: `${Math.sin((i / 12) * Math.PI * 2) * 200 + 250}px`,
//                         top: `${Math.cos((i / 12) * Math.PI * 2) * 200 + 250}px`
//                       }}
//                       onMouseEnter={() => setActiveNode(i)}
//                       onMouseLeave={() => setActiveNode(null)}
//                     >
//                       <div className="absolute inset-0 bg-white rounded-full animate-pulse" />
//                       <div className="absolute inset-0 bg-white/30 rounded-full animate-ping" />
//                       {/* Connection Lines */}
//                       {[...Array(12)].map((_, j) => (
//                         <div
//                           key={j}
//                           className={`absolute left-1/2 top-1/2 h-[1px] bg-gradient-to-r from-white/20 to-transparent origin-left transition-opacity duration-300 ${
//                             activeNode === i || activeNode === j ? 'opacity-100' : 'opacity-30'
//                           }`}
//                           style={{
//                             width: '200px',
//                             transform: `rotate(${(j / 12) * 360}deg)`
//                           }}
//                         />
//                       ))}
//                     </div>
//                   ))}
//                   {/* Center Node */}
//                   <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
//                     <div className="w-6 h-6 bg-white rounded-full animate-pulse" />
//                     <div className="absolute inset-0 bg-white/30 rounded-full animate-ping" />
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

// export default App;



// 'use client'
// import React from 'react';
// import { motion } from 'framer-motion';
// import { Code, Cloud, Shield } from 'lucide-react';
// import { ThreadAnimation } from '../../ThreadAnimation';

// function page() {
// 	return (
// 		<div className="relative w-screen min-h-screen overflow-hidden ">
// 			{/* <ThreadAnimation /> */}

// 			{/* HUD Elements */}
// 			<motion.div
// 				initial={{ opacity: 0 }}
// 				animate={{ opacity: 1 }}
// 				transition={{ duration: 1 }}
// 				className="absolute top-0 left-0 w-64 h-64 border border-white/10 rounded-br-[100px] z-10"
// 			>
// 				<motion.div
// 					animate={{ scale: [1, 1.2, 1] }}
// 					transition={{ duration: 2, repeat: Infinity }}
// 					className="absolute top-4 left-4 w-2 h-2 bg-white/50"
// 				/>
// 				<motion.div
// 					animate={{ scale: [1, 1.2, 1] }}
// 					transition={{ duration: 2, repeat: Infinity, delay: 1 }}
// 					className="absolute bottom-4 right-4 w-2 h-2 bg-white/50"
// 				/>
// 			</motion.div>

// 			<motion.div
// 				initial={{ opacity: 0 }}
// 				animate={{ opacity: 1 }}
// 				transition={{ duration: 1 }}
// 				className="absolute top-0 right-0 w-64 h-64 border border-white/10 rounded-bl-[100px] z-10"
// 			>
// 				<motion.div
// 					animate={{ scale: [1, 1.2, 1] }}
// 					transition={{ duration: 2, repeat: Infinity }}
// 					className="absolute top-4 right-4 w-2 h-2 bg-white/50"
// 				/>
// 				<motion.div
// 					animate={{ scale: [1, 1.2, 1] }}
// 					transition={{ duration: 2, repeat: Infinity, delay: 1 }}
// 					className="absolute bottom-4 left-4 w-2 h-2 bg-white/50"
// 				/>
// 			</motion.div>

// 			{/* Main Content */}
// 			<div className="relative z-10">
// 				<div className="flex items-center justify-center min-h-screen">
// 					<div className="text-center max-w-[90%] w-[800px] mx-auto">
// 						<motion.h1
// 							initial={{ opacity: 0, y: 20 }}
// 							animate={{ opacity: 1, y: 0 }}
// 							transition={{ duration: 0.8, delay: 0.2 }}
// 							className="text-5xl lg:text-8xl font-bold text-white leading-tight mb-6"
// 						>
// 							Human
// 							<motion.span
// 								animate={{
// 									backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
// 								}}
// 								transition={{ duration: 5, repeat: Infinity }}
// 								className="text-transparent ml-[12px] bg-clip-text bg-gradient-to-r from-white via-gray-400 to-white bg-[length:200%_auto]"
// 							>
// 								First
// 							</motion.span>
// 						</motion.h1>

// 						<motion.p
// 							initial={{ opacity: 0, y: 20 }}
// 							animate={{ opacity: 1, y: 0 }}
// 							transition={{ duration: 0.8, delay: 0.4 }}
// 							className="text-gray-400 text-xl mb-8 mx-auto"
// 						>
// 							Technology shouldn't complicate things. We design AI that feels personal and seamless, so you can innovate without losing that human touch.
// 						</motion.p>

// 						<motion.div
// 							initial={{ opacity: 0, y: 20 }}
// 							animate={{ opacity: 1, y: 0 }}
// 							transition={{ duration: 0.8, delay: 0.6 }}
// 							className="flex justify-center mb-16"
// 						>
// 							<a href="#product">
// 								<button className="cursor-pointer group relative bg-white/5 text-white px-20 py-3 transition-all backdrop-blur-sm border-y border-white/20 hover:border-white/40">
// 									<div className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white/50 to-transparent group-hover:via-white" />
// 									<div className="absolute right-0 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white/50 to-transparent group-hover:via-white" />
// 									<div className="relative flex items-center space-x-2">
// 										<span className="relative z-10">Browse Our Tools</span>
// 										<div className="w-4 h-4 relative">
// 											<div className="absolute inset-0 bg-white/20 group-hover:bg-white/40 animate-ping" />
// 											<div className="absolute inset-0 bg-white/40" />
// 										</div>
// 									</div>
// 									<div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity" />
// 								</button>
// 							</a>
// 						</motion.div>

// 						<motion.div
// 							initial={{ opacity: 0, y: 20 }}
// 							animate={{ opacity: 1, y: 0 }}
// 							transition={{ duration: 0.8, delay: 0.8 }}
// 							className="grid grid-cols-3 gap-4 max-w-[600px] mx-auto"
// 						>
// 							<div className="flex flex-col items-center p-4 bg-white/5 border border-white/10 backdrop-blur-sm">
// 								<Cloud className="w-6 h-6 text-white mb-2" />
// 								<span className="text-white/70 text-sm text-center">Infinite Scale</span>
// 							</div>
// 							<div className="flex flex-col items-center p-4 bg-white/5 border border-white/10 backdrop-blur-sm">
// 								<Shield className="w-6 h-6 text-white mb-2" />
// 								<span className="text-white/70 text-sm text-center">Ironclad Security</span>
// 							</div>
// 							<div className="flex flex-col items-center p-4 bg-white/5 border border-white/10 backdrop-blur-sm">
// 								<Code className="w-6 h-6 text-white mb-2" />
// 								<span className="text-white/70 text-sm text-center">Powerful Code</span>
// 							</div>
// 						</motion.div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default page;


'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cloud, Shield } from 'lucide-react';
// import { NetworkEffect } from '@/components/NetworkEffect';
import { useState } from 'react';

interface FeatureCard {
  icon: React.ReactElement;
  title: string;
  description: string;
}
const features: FeatureCard[] = [
	{
	  icon: <Cloud className="w-5 h-5" />,
	  title: "Infinite Scale",
	  description: "Scale seamlessly as your needs grow"
	},
	{
	  icon: <Shield className="w-5 h-5" />,
	  title: "Ironclad Security",
	  description: "Enterprise-grade protection built-in"
	},
	{
	  icon: <Code className="w-5 h-5" />,
	  title: "Powerful Code",
	  description: "Clean, efficient, and maintainable"
	}
  ];
function page() {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
	return (
		<div className="relative w-screen min-h-screen overflow-hidden">
			{/* <NetworkEffect /> */}

			{/* HUD Elements */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className="absolute top-0 left-0 w-64 h-64 border border-white/10 rounded-br-[100px] z-10"
			>
				<motion.div
					animate={{ scale: [1, 1.2, 1] }}
					transition={{ duration: 2, repeat: Infinity }}
					className="absolute top-4 left-4 w-2 h-2 bg-white/50"
				/>
				<motion.div
					animate={{ scale: [1, 1.2, 1] }}
					transition={{ duration: 2, repeat: Infinity, delay: 1 }}
					className="absolute bottom-4 right-4 w-2 h-2 bg-white/50"
				/>
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className="absolute top-0 right-0 w-64 h-64 border border-white/10 rounded-bl-[100px] z-10"
			>
				<motion.div
					animate={{ scale: [1, 1.2, 1] }}
					transition={{ duration: 2, repeat: Infinity }}
					className="absolute top-4 right-4 w-2 h-2 bg-white/50"
				/>
				<motion.div
					animate={{ scale: [1, 1.2, 1] }}
					transition={{ duration: 2, repeat: Infinity, delay: 1 }}
					className="absolute bottom-4 left-4 w-2 h-2 bg-white/50"
				/>
			</motion.div>

			{/* Main Content */}
			<div className="relative z-10">
				<div className="flex items-center justify-center min-h-screen">
					<div className="text-center max-w-[90%] w-[800px] mx-auto">
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="text-5xl lg:text-8xl font-bold text-white leading-tight mb-6"
						>
							Human
							<motion.span
								animate={{
									backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
								}}
								transition={{ duration: 5, repeat: Infinity }}
								className="text-transparent ml-[12px] bg-clip-text bg-gradient-to-r from-white via-gray-400 to-white bg-[length:200%_auto]"
							>
								First
							</motion.span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							className="text-gray-400 text-xl mb-8 mx-auto"
						>
							Technology shouldn't complicate things. We design AI that feels personal and seamless, so you can innovate without losing that human touch.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.6 }}
							className="flex justify-center mb-16"
						>
							<a href="/products">
								<button className="cursor-pointer group relative bg-white/5 text-white px-20 py-3 transition-all backdrop-blur-sm border-y border-white/20 hover:border-white/40">
									<div className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white/50 to-transparent group-hover:via-white" />
									<div className="absolute right-0 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white/50 to-transparent group-hover:via-white" />
									<div className="relative flex items-center space-x-2">
										<span className="relative z-10">Browse Our Products</span>
										<div className="w-4 h-4 relative">
											<div className="absolute inset-0 bg-white/20 group-hover:bg-white/40 animate-ping" />
											<div className="absolute inset-0 bg-white/40" />
										</div>
									</div>
									<div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity" />
								</button>
							</a>
						</motion.div>

						<motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="grid grid-cols-3 gap-3 max-w-[400px] mx-auto"
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          initial={false}
          animate={{
            scale: hoveredIndex === index ? 1.05 : 1,
            transition: { duration: 0.2 }
          }}
        >
          <div className={`
            relative z-10
            w-full h-[100px] sm:h-[110px]
            bg-gradient-to-br from-white/[0.08] to-transparent
            border border-white/[0.08]
            backdrop-blur-sm
            transition-all duration-500
            overflow-hidden
            ${hoveredIndex === index ? 'from-white/[0.12] border-white/[0.15]' : ''}
          `}>
            {/* Top Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-[1px]">
              <div className={`
                absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
                transition-opacity duration-500
                ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}
              `} />
            </div>

            {/* Content Container with Fixed Height */}
            <div className="flex flex-col items-center justify-center h-full p-3 gap-2">
              {/* Icon Container */}
              <div className={`
                p-2 rounded-lg
                bg-white/5
                transition-colors duration-300
                ${hoveredIndex === index ? 'text-white' : 'text-white/70'}
              `}>
                {feature.icon}
              </div>

              {/* Title - Fixed Height and Width */}
              <span className="text-white/70 text-xs font-medium leading-tight text-center w-full px-1 truncate">
                {feature.title}
              </span>
            </div>

            {/* Bottom Gradient Line */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px]">
              <div className={`
                absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                transition-opacity duration-500
                ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}
              `} />
            </div>
          </div>

          {/* Background Glow Effect */}
          <div className={`
            absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0
            opacity-0 transition-opacity duration-500 blur-xl
            ${hoveredIndex === index ? 'opacity-20' : ''}
          `} />
        </motion.div>
      ))}
    </motion.div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default page;
