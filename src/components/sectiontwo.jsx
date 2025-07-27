"use client"

import { useState, useEffect } from "react"
import ScrollVelocity from './ScrollVelocity';

export default function SectionTwo() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
    <div className="absolute inset-0">
      <video
        src="\12147600_2558_1440_30fps.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover object-center"
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />
    </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col">
      

        {/* Main Content */}
        <div className="flex flex-1 items-center">
         <ScrollVelocity
  texts={['Adarsh Srivastava', 'Software Engineer']} 
  velocity={100} 
  className="custom-scroll-text"
/>
        </div>

        {/* Bottom Right Text */}
        <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 lg:bottom-16 lg:right-16">
          <p
            className={`text-white/70 text-sm md:text-base font-light tracking-[0.3em] uppercase transition-all duration-1000 delay-500 ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            DISCOVER
          </p>
        </div>
      </div>
    </section>
  )
}
