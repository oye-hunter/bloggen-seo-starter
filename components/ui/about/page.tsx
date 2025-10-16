// import React from 'react'

// const page = () => {
//   return (
//     <div id="about" className="bg-[#111111] min-h-screen">
//     <div className="lg:max-w-[1280px] max-w-full mx-auto ">
//       <div className="w-full flex flex-col-reverse xl:flex-row py-[60px] lg:pb-[60px] lg:pt-[112px] items-center gap-10 lg:gap-20">
//         <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
//           <div className="self-stretch flex-col justify-start items-start gap-6 flex">
// 			  <div className="self-stretch text-white text-4xl md:text-7xl font-bold leading-[72px] tracking-tight max-md:leading-10">
//               About SilverThreadLabs
//             </div>
// 			<div className="self-stretch text-zinc-400 text-xl font-normal leading-7 tracking-tight">
//               We are a team of developers and designers who genuinely love turning bright ideas into something people truly find useful in their day-to-day lives. It all began with a few late-night brainstorming sessions in the car and it blossomed into a mission to build digital experiences that really make a difference.
//             </div>
//           </div>
//         </div>
        
//         <div className="w-full xl:w-[600px] xl:h-[538px]">
//           <img 
//             className="rounded-lg w-full h-full object-cover shadow-2xl transition-transform duration-500 hover:scale-[1.02]" 
//             src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
//             alt="Team collaboration" 
//           />
//         </div>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default page


'use client'
import Image from 'next/image'
import Flame from '../../Flame'
import { useRef, useState } from "react"

  

const page = () => {
	const [isHovered, setIsHovered] = useState(false)
	const cardsRef = useRef<HTMLElement>(null!);

	const [cursor, setCursor] = useState({ x: 0, y: 0 })
	const [mouseOnCard, setMouseOnCard] = useState(false)

	const handleMouseMove = (
		event: React.MouseEvent<HTMLElement, MouseEvent>
	) => {
		if (cardsRef.current !== null) {
			const rect = cardsRef.current.getBoundingClientRect()
			const x = event.clientX - rect.left
			const y = event.clientY - rect.top
			setCursor({ x: x, y: y })
		}
	}
	return (
		<section id="about" className="card relative w-full overflow-hidden" 
			ref={cardsRef}
			onMouseEnter={() => setMouseOnCard(true)}
			onMouseLeave={() => setMouseOnCard(false)}
			onMouseMove={(event) => handleMouseMove(event)}>
			{/* Background Elements */}
			{/* <div className="absolute inset-0">
				<div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.03)_50%,transparent_75%)] bg-[length:4px_4px]" />
				<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />
			</div> */}

			<div className="relative py-20">
				<div className="max-w-[90%] xl:max-w-[1280px] mx-auto">
					<div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24">
						{/* Content */}
						<div className="flex-1 space-y-8">
							{/* Header */}
							<div className="space-y-6">
								<div className="flex items-center space-x-3">
									<div className="h-px w-12 bg-white/30" />
									<span className="text-white/50 text-sm uppercase tracking-wider">About Us</span>
								</div>
								<h2 className="text-4xl md:text-7xl font-bold text-white leading-[1.1]">
									About SilverThread Labs
								</h2>
							</div>

							{/* Description */}
							<div className="space-y-6">
								<p className="text-xl text-white/60 leading-relaxed">
									We are a team of developers and designers who genuinely love turning bright ideas into something
									people truly find useful in their day-to-day lives. It all began with a few late-night brainstorming sessions in the car and it blossomed into
									a mission to build digital experiences that really make a difference.
								</p>
							</div>
						</div>

						{/* GRADIENT SVG EFFECT */}
						<div className="bg-black rounded">
								
								<Flame cursor={cursor} cardRef={cardsRef} mouseOnCard={mouseOnCard} />

						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default page
