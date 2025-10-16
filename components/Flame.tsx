// "use client"
// import { useState, type RefObject, useEffect } from "react"

// interface Props {
// 	cursor: { x: number; y: number }
// 	cardRef: RefObject<HTMLElement>
// 	mouseOnCard: boolean
// }

// const Flame = ({ cursor, cardRef, mouseOnCard }: Props) => {
// 	const [gradientCenter, setGradientCenter] = useState({ cx: "50%", cy: "50%" })

// 	useEffect(() => {
// 		if (cardRef.current && cursor.x !== null && cursor.y !== null) {
// 			const cardRect = cardRef.current.getBoundingClientRect()
// 			const cxPercentage = (cursor.x / cardRect.width) * 100 - 24
// 			const cyPercentage = (cursor.y / cardRect.height) * 100
// 			setGradientCenter({
// 				cx: `${cxPercentage}%`,
// 				cy: `${cyPercentage}%`,
// 			})
// 		}
// 	}, [cursor, cardRef])

// 	return (
// 		<svg
// 			xmlns="http://www.w3.org/2000/svg"
// 			viewBox="0 0 24 24"
// 			className="w-full xl:w-[540px] duration-200 transition-all"
// 		>
// 			<defs>
// 				<radialGradient
// 					id="emeraldGradient"
// 					gradientUnits="userSpaceOnUse"
// 					r="35%"
// 					cx={gradientCenter.cx}
// 					cy={gradientCenter.cy}
// 				>
// 					{mouseOnCard && <stop stopColor="#FFF" />}
// 					<stop offset={1} stopColor="#404040" />
// 				</radialGradient>
// 			</defs>
// 			<path
// 				strokeLinecap="round"
// 				strokeLinejoin="round"
// 				className="fill-neutral-950/50"
// 				stroke="url(#emeraldGradient)"
// 				d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
// 			/>
// 			<path
// 				strokeLinecap="round"
// 				strokeLinejoin="round"
// 				className="fill-neutral-800/50"
// 				stroke="url(#emeraldGradient)"
// 				d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
// 			/>
// 		</svg>
// 	)
// }

// export default Flame


"use client"
import { useState, type RefObject, useEffect } from "react"

interface Props {
  cursor: { x: number; y: number }
  cardRef: RefObject<HTMLElement>
  mouseOnCard: boolean
}

const Flame = ({ cursor, cardRef, mouseOnCard }: Props) => {
  const [gradientCenter, setGradientCenter] = useState({ cx: "50%", cy: "50%" })

  useEffect(() => {
    if (cardRef.current && cursor.x !== null && cursor.y !== null) {
      const cardRect = cardRef.current.getBoundingClientRect()
      const cxPercentage = (cursor.x / cardRect.width) * 100 - 24
      const cyPercentage = (cursor.y / cardRect.height) * 100
      setGradientCenter({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      })
    }
  }, [cursor, cardRef])

  return (
    <div className="relative w-full h-full aspect-square max-w-[540px] mx-auto">
      <div 
        className="absolute inset-0 w-full h-full rounded"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff20 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff20 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px'
        }}
      />
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full duration-200 transition-all relative z-10"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <radialGradient
            id="emeraldGradient"
            gradientUnits="userSpaceOnUse"
            r="35%"
            cx={gradientCenter.cx}
            cy={gradientCenter.cy}
          >
            {mouseOnCard && <stop stopColor="#FFF" />}
            <stop offset={1} stopColor="#404040" />
          </radialGradient>
          <clipPath id="clip0_4884_3984">
            <rect width="40" height="40" rx="1" fill="white"/>
          </clipPath>
        </defs>
        <g clipPath="url(#clip0_4884_3984)">
          <mask id="path-2-inside-1_4884_3984" fill="white">
            <path d="M0 0H40V40H0V0Z"/>
          </mask>
          <path 
            d="M0 0V-2H-5V0H0ZM40 0H42V-2H40V0ZM40 40V45H42V40H40ZM0 40H-5V45H0V40ZM0 2H40V-2H0V2ZM38 0V40H42V0H38ZM40 35H0V45H40V35ZM5 40V0H-5V40H5Z" 
            fill="url(#emeraldGradient)" 
            mask="url(#path-2-inside-1_4884_3984)"
            className="stroke-2"
          />
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M29 32H33.5C33.7761 32 34 31.7761 34 31.5V19.5C34 19.2239 33.7761 19 33.5 19H29.5C29.2239 19 29 19.2239 29 19.5V26.5C29 26.7761 28.7761 27 28.5 27H9.5C9.22386 27 9 27.2239 9 27.5V31.5C9 31.7761 9.22386 32 9.5 32H29Z" 
            fill="url(#emeraldGradient)"
            className="stroke-2"
          />
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M14 5H9.5C9.22386 5 9 5.22386 9 5.5V17.5C9 17.7761 9.22386 18 9.5 18H13.5C13.7761 18 14 17.7761 14 17.5V10.5C14 10.2239 14.2239 10 14.5 10H33.5C33.7761 10 34 9.77614 34 9.5V5.5C34 5.22386 33.7761 5 33.5 5H14Z" 
            fill="url(#emeraldGradient)"
            className="stroke-2"
          />
          <rect 
            x="17.5" 
            y="16.25" 
            width="7.5" 
            height="3.75" 
            rx="0.5" 
            fill="url(#emeraldGradient)"
            className="stroke-2"
          />
        </g>
      </svg>
    </div>
  )
}

export default Flame
