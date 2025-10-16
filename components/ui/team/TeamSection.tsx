'use client'
import { useState } from 'react'

const TeamSection = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)

  const teamMembers = [
    {
      name: "Syed Saif",
      role: "The Mastermind",
      image: "/assets/team/saif.png",
      hoverImage: "/assets/team/saif-threads.webp",
      portfolio: "https://www.syed-saif.com/",
      description: "My ideas fuel our fire, making the impossible suddenly inevitable."
    },
    {
      name: "Syed Burhan",
      role: "The Soul",
      image: "/assets/team/burhan.png",
      hoverImage: "/assets/team/burhan-threads.jpg",
      portfolio: "https://www.syed-burhan.site/",
      description: "I see no grand plan just good times with my people."
    },
    {
      name: "Asad Hamid",
      role: "The Muscle",
      image: "/assets/team/asad.webp",
      hoverImage: "/assets/team/asad-threads.webp",
      portfolio: "https://www.asadhamid.site/",
      description: "Consistency isn't optional for me, it's my everyday mindset."
    }
  ]

  return (
    <section className="relative w-full overflow-hidden py-20">
      <div className="max-w-[90%] xl:max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center space-x-3">
            <div className="h-px w-12 bg-white/30" />
            <span className="text-white/50 text-sm uppercase tracking-wider">Our Team</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-bold text-white leading-[1.1]">
            The Crew
          </h2>
          <p className="text-xl text-white/60">
            We're a tight-knit squad building the future of AI one idea, meme, and breakthrough at a time.
          </p>
        </div>

        {/* Team Grid */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <a href={member.portfolio} target="_blank" rel="noopener noreferrer">
                <div className={`
                  relative rounded-xl
                  bg-gradient-to-b from-white/[0.08] to-transparent
                  transition-all duration-500 ease-out
                  overflow-hidden
                  backdrop-blur-sm
                  ${hoveredMember === index ? 'from-white/[0.12]' : ''}
                `}>
                  {/* Border Gradient */}
                  <div className="absolute inset-0 rounded-xl border border-white/[0.08] transition-all duration-500" />
                  <div className={`
                    absolute inset-[1px] rounded-xl border border-white/[0.08]
                    transition-all duration-500
                    ${hoveredMember === index ? 'border-white/[0.15]' : ''}
                  `} />

                  {/* Image Container */}
                  <div className="relative w-full h-[300px] overflow-hidden rounded-t-xl">
                    <div className={`
                      absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent
                      transition-opacity duration-500 z-10
                      ${hoveredMember === index ? 'opacity-90' : 'opacity-80'}
                    `} />
                    
                    {/* Default Image */}
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`
                        absolute inset-0 w-full h-full object-cover
                        transition-all duration-700 ease-out
                        ${hoveredMember === index ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}
                      `}
                    />
                    
                    {/* Hover Image */}
                    <img
                      src={member.hoverImage}
                      alt={`${member.name} hover`}
                      className={`
                        absolute inset-0 w-full h-full object-cover
                        transition-all duration-700 ease-out
                        ${hoveredMember === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                      `}
                    />
                    
                    {/* Subtle Image Overlay Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%)] bg-[length:4px_4px] z-20 opacity-50" />
                  </div>

                  {/* Content */}
                  <div className="relative z-20 p-6 -mt-20">
                    {/* Name and Role */}
                    <div className={`
                      relative transition-transform duration-500
                      ${hoveredMember === index ? 'transform -translate-y-2' : ''}
                    `}>
                      <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-white/60 mb-4">{member.role}</p>
                    </div>
                    
                    {/* Description Container */}
                    <div className="relative p-4 bg-white/[0.02] rounded-lg overflow-hidden">
                      {/* Animated Border */}
                      <div className={`
                        absolute inset-0 rounded-lg transition-all duration-500
                        ${hoveredMember === index ? 'border border-white/20' : 'border border-white/[0.08]'}
                      `} />

                      {/* Description Text */}
                      <p className={`
                        relative z-30 text-sm leading-relaxed transition-all duration-500
                        ${hoveredMember === index ? 'text-white/90' : 'text-white/70'}
                      `}>
                        {member.description}
                      </p>

                      {/* Thread Effects Container */}
                      <div className="absolute inset-0 pointer-events-none">
                        {/* Base Threads */}
                        <div className="absolute left-0 top-0 w-[1px] h-full">
                          <div className={`
                            absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent
                            transition-all duration-500
                            ${hoveredMember === index ? 'via-white/40' : ''}
                          `} />
                        </div>
                        <div className="absolute right-0 top-0 w-[1px] h-full">
                          <div className={`
                            absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent
                            transition-all duration-500
                            ${hoveredMember === index ? 'via-white/40' : ''}
                          `} />
                        </div>

                        {/* Hover-activated Threads */}
                        {hoveredMember === index && (
                          <>
                            {/* Subtle Diagonal Threads */}
                            <div className="absolute inset-0">
                              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent transform -rotate-45 translate-y-4 blur-[0.5px]" />
                              <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent transform -rotate-45 -translate-y-4 blur-[0.5px]" />
                            </div>

                            {/* Animated Glow Points */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2">
                              <div className="absolute inset-0 bg-white/20 rounded-full animate-ping" />
                              <div className="absolute inset-0 bg-white/40 rounded-full" />
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
