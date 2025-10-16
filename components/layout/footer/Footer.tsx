'use client'
import { useState, useEffect } from 'react'

const email = 'silverthreadlabs@gmail.com'
const subject = 'Inquiry from your portfolio website'
const body = 'Hello,\n\nI am interested in discussing a Web Development project with you.'

const Footer = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const text = "Silverthread Labs"
  const letters = text.split('')

  const handleClick = () => {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMousePosition({ x, y })
  }

  return (
    <footer className="relative w-full bg-[#080808] overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated thread grid */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={`vertical-${i}`}
              className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/[0.07] to-transparent animate-pulse"
              style={{ left: `${(i + 1) * 5}%`, animationDelay: `${i * 0.1}s` }}
            />
          ))}
          {[...Array(10)].map((_, i) => (
            <div
              key={`horizontal-${i}`}
              className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent animate-pulse"
              style={{ top: `${(i + 1) * 10}%`, animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>

        {/* Dynamic thread effect */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={`dynamic-${i}`}
              className="absolute h-[200px] w-[1px] animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.2), transparent)',
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${5 + Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-radial-gradient opacity-80" />
      </div>

      {/* Top Border with Enhanced Thread Effect */}
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-white/20 to-transparent blur-lg" />
      </div>

      {/* Large Text Section */}
      <div 
        className="relative flex justify-center items-center min-h-[300px] py-20"
        onMouseMove={handleMouseMove}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
        <h2 className="relative text-[120px] md:text-[160px] font-bold leading-none px-4 text-center max-w-[1280px] mx-auto w-full select-none">
          {letters.map((letter, index) => (
            <span
              key={index}
              className="relative inline-block text-white/10 hover:text-white/90 transition-all duration-500"
              // onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ margin: letter === ' ' ? '0 1rem' : '-0.05em' }}
            >
              {letter}
              {hoveredIndex === index && (
                <>
                  {/* Vertical threads */}
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={`v-${i}`}
                      className="absolute top-full left-1/2 w-[1px] transform -translate-x-1/2"
                      style={{
                        height: `${100 + i * 30}px`,
                        background: 'linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)',
                        left: `${50 + (i - 1) * 20}%`,
                        filter: 'blur(0.5px)',
                        opacity: 1 - i * 0.2
                      }}
                    />
                  ))}
                  
                  {/* Horizontal threads */}
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={`h-${i}`}
                      className="absolute top-1/2 left-0 h-[1px] w-full transform"
                      style={{
                        background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.6), transparent)',
                        top: `${50 + (i - 1) * 10}%`,
                        filter: 'blur(0.5px)',
                        opacity: 1 - i * 0.2
                      }}
                    />
                  ))}

                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-white/10 blur-2xl" />
                </>
              )}
            </span>
          ))}
        </h2>
      </div>

      {/* Footer Content with Enhanced Thread Effects */}
      <div className="relative mx-auto max-w-[1280px] px-6">
        <div className="relative flex flex-col md:flex-row justify-between items-center md:items-center py-12 space-y-8 md:space-y-0">
          {/* Decorative thread border */}
          <div className="absolute top-0 left-0 w-full h-[1px]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-md" />
            {[...Array(5)].map((_, i) => (
              <div
                key={`border-${i}`}
                className="absolute top-0 w-[1px] h-[20px] bg-gradient-to-b from-white/30 to-transparent"
                style={{ left: `${20 + i * 20}%` }}
              />
            ))}
          </div>

          <button 
            onClick={handleClick}
            className="group relative cursor-pointer"
          >
            <div className="flex justify-start space-x-3 items-center w-fit">
              <div className="relative h-px w-8">
                <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent group-hover:from-white/70 transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent group-hover:from-white/40 blur-sm transition-all duration-300" />
              </div>
              <span className="text-lg text-white/60 group-hover:text-white transition-colors duration-300">
                {email}
              </span>
            </div>
            <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-white/60 to-transparent group-hover:w-full transition-all duration-500" />
          </button>

          <div className="flex items-start lg:items-center justify-center lg:justify-center flex-wrap gap-[42px] lg:gap-[32px]">
            {[
              { href: "https://www.linkedin.com/company/silverthreadlabs", label: "Linkedin", target: "_blank" },
              { href: "/about", label: "About" },
              { href: "/products", label: "Products" },
              { href: "/contact", label: "Contact" },
              { href: "/blog", label: "Blog" }
            ].map((link, index) => (
              <a 
                key={index}
                href={link.href}
                target={link.target}
                rel={link.target === "_blank" ? "noopener noreferrer" : ""}
                className="group relative"
              >
                <span className="text-white/60 group-hover:text-white transition-colors duration-300">
                  {link.label}
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-white/60 to-transparent group-hover:w-full transition-all duration-300" />
                {/* Vertical thread on hover */}
                <div className="absolute bottom-0 left-1/2 w-[1px] h-0 bg-gradient-to-b from-white/30 to-transparent group-hover:h-[20px] transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
