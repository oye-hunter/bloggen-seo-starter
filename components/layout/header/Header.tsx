// 'use client'
// import { useState } from "react";

// const Header = () => {
//   const [header, setHeader] = useState(false);
//   const ToggleHeader = () => {
//     setHeader(!header);
//   };

//   return (
//     <div className="header-main w-full flex items-center justify-center flex-col fixed top-0 z-[11] bg-opacity-90 backdrop-blur-md">
//       <div className="flex items-center lg:flex-row flex-col justify-between w-[90%] xl:w-[1280px] mt-[16px] lg:h-16 h-fit px-[24px] max-w-[1280px] bg-[#191919] rounded-xl shadow-md border border-[#3a3a3a]">
        
//         {/* Logo + Hamburger */}
//         <div className="logo flex lg:w-fit w-full lg:h-fit h-16 justify-between items-center">
//           <a
//             href="/"
//             className="text-[#eeeeee] text-lg font-bold font-['Geist'] leading-7 tracking-tight"
//           >
//             Silverthreadlabs
//           </a>
//           <div
//             className="hamburger-icon lg:hidden flex text-white"
//             onClick={ToggleHeader}
//           >
//             {header ? (
//               /* X icon */
//               <svg
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M4.92871 19.0708L19.0708 4.92867"
//                   stroke="white"
//                   strokeWidth="2"
//                   strokeLinecap="square"
//                   strokeLinejoin="round"
//                 />
//                 <path
//                   d="M19.0708 19.0708L4.92866 4.92866"
//                   stroke="white"
//                   strokeWidth="2"
//                   strokeLinecap="square"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             ) : (
//               /* Hamburger icon */
//               <svg
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M2 8H22"
//                   stroke="white"
//                   strokeWidth="2"
//                   strokeLinecap="square"
//                   strokeLinejoin="round"
//                 />
//                 <path
//                   d="M2 16H22"
//                   stroke="white"
//                   strokeWidth="2"
//                   strokeLinecap="square"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             )}
//           </div>
//         </div>

//         {/* Header Links */}
//         <div
//           className={`
//             header-links 
//             flex flex-col lg:flex-row 
//             items-center lg:justify-center 
//             lg:gap-[40px] gap-[20px] 
//             overflow-hidden
//             transition-all duration-300
//             ${header ? "h-[180px] py-4" : "h-0 py-0"} 
//             lg:h-auto lg:py-0
//           `}
//         >
//           <div className="links-wrap flex items-center justify-center lg:gap-[16px] gap-[20px] lg:flex-row flex-col">
//             <a
// 			onClick={ToggleHeader}
//               href="/#about"
//               className="text-center text-[#b4b4b4] text-sm font-medium font-['Geist'] leading-tight tracking-tight hover:text-[#ffffff] transition-colors duration-300"
//             >
//               About
//             </a>
//             <a
// 			onClick={ToggleHeader}
//               href="/#product"
//               className="text-center text-[#b4b4b4] text-sm font-medium font-['Geist'] leading-tight tracking-tight hover:text-[#ffffff] transition-colors duration-300"
//             >
//               Products
//             </a>
//             <a
// 			onClick={ToggleHeader}
//               href="/#why-choose-us"
//               className="text-center text-[#b4b4b4] text-sm font-medium font-['Geist'] leading-tight tracking-tight hover:text-[#ffffff] transition-colors duration-300"
//             >
//               Why us
//             </a>
//             <a
// 			onClick={ToggleHeader}
//               href="/blog"
//               className="text-center text-[#b4b4b4] text-sm font-medium font-['Geist'] leading-tight tracking-tight hover:text-[#ffffff] transition-colors duration-300"
//             >
//               Blogs
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;



'use client'
import Logo from "@/components/Logo"
import { useState, useEffect } from "react"

const Header = () => {
  const [header, setHeader] = useState(false)
  const [hoveredLink, setHoveredLink] = useState(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const ToggleHeader = () => {
    setHeader(!header)
  }

  const links = [
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blogs" }
  ]

  return (
    <div className="header-main w-full flex items-center justify-center flex-col fixed top-0 z-[11]">
      {/* Background with thread effects */}
      <div className="absolute inset-0 backdrop-blur-md">
        <div className="absolute inset-0 " />
        {/* Animated thread grid */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <div
              key={`vertical-${i}`}
              className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/[0.07] to-transparent animate-pulse"
              style={{ left: `${(i + 1) * 10}%`, animationDelay: `${i * 0.1}s` }}
            />
          ))}
          {[...Array(3)].map((_, i) => (
            <div
              key={`horizontal-${i}`}
              className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent animate-pulse"
              style={{ top: `${(i + 1) * 33}%`, animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>

      <div className={`
        relative flex items-center lg:flex-row flex-col justify-between 
        w-[90%] xl:w-[1280px] mt-[16px] lg:h-16 h-fit px-[24px] 
        max-w-[1280px] rounded-xl transition-all duration-300
        ${scrolled ? 'bg-[#111]/80' : 'bg-[#111]/60'}
        backdrop-blur-sm
      `}>
        {/* Border effect */}
        <div className="absolute inset-0 rounded-xl border border-white/10 overflow-hidden">
          <div className="absolute inset-0">
            {[...Array(4)].map((_, i) => (
              <div
                key={`border-${i}`}
                className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse"
                style={{ 
                  left: `${25 * i}%`,
                  animationDelay: `${i * 0.2}s`,
                  opacity: 0.5
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Logo + Hamburger */}
        <div className="logo flex lg:w-fit w-full lg:h-fit h-16 justify-between items-center relative">
          <a
            href="/"
            className="text-white text-lg font-bold  leading-7 tracking-tight relative group"
            // onMouseEnter={() => setHoveredLink('logo')}
            onMouseLeave={() => setHoveredLink(null)}
          >
           <Logo/>
            {/* Logo hover effect */}
            <div className={`
              absolute -bottom-1 left-0 w-full h-[1px] 
              transition-all duration-300 overflow-hidden
              ${hoveredLink === 'logo' ? 'opacity-100' : 'opacity-0'}
            `}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent blur-sm" />
            </div>
          </a>

          <button
            className="hamburger-icon lg:hidden flex text-white relative"
            onClick={ToggleHeader}
          >
            <div className="relative z-10">
              {header ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="transition-transform duration-300 rotate-90"
                >
                  <path
                    d="M4.92871 19.0708L19.0708 4.92867M19.0708 19.0708L4.92866 4.92866"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="transition-transform duration-300"
                >
                  <path
                    d="M2 8H22M2 16H22"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                </svg>
              )}
            </div>
          </button>
        </div>

        {/* Header Links */}
        <div className={`
          header-links 
          flex flex-col lg:flex-row 
          items-center lg:justify-center 
          lg:gap-[40px] gap-[20px] 
          overflow-hidden
          transition-all duration-500 ease-out
          ${header ? "h-[200px] py-4" : "h-0 py-0"} 
          lg:h-auto lg:py-0
        `}>
          <div className="links-wrap flex items-center justify-center lg:gap-[32px] gap-[20px] lg:flex-row flex-col ">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={ToggleHeader}
                // onMouseEnter={() => setHoveredLink(link.label)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative group text-white/60 hover:text-white transition-colors duration-300"
              >
                {link.label}
                {/* Link hover effects */}
                <div className={` 
                  absolute -bottom-1 left-0 w-full h-[1px] 
                  transition-all duration-300 overflow-hidden
                  ${hoveredLink === link.label ? 'opacity-100' : 'opacity-0'}
                `}>
                
                </div>
                {/* Vertical thread on hover */}
                <div className={`
                  absolute -bottom-1 left-1/2 w-[1px] 
                  transition-all duration-300
                  ${hoveredLink === link.label ? 'h-[12px] opacity-100' : 'h-0 opacity-0'}
                `}>
                  
                </div>
                {/* Vertical thread on hover */}
                <div className="absolute bottom-0 left-1/2 w-[1px] h-0 bg-gradient-to-b from-white/30 to-transparent group-hover:h-[20px] transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
