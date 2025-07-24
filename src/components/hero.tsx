"use client"

import { useState, useEffect } from "react"

export default function Hero() {
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
          <div className="px-8 md:px-12 lg:px-16 max-w-4xl">
            {/* Main Headline */}
            <h2
              className={`text-white text-4xl md:text-4xl lg:text-4xl xl:text-6xl font-black leading-[0.9] tracking-tight uppercase mb-8 transition-all duration-1000 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                fontWeight: 900,
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              }}
            >
              MOTORING EXPEDITIONS
              <br />
              INTO THE UNCHARTED
            </h2>

            {/* Subheading */}
            <p
              className={`text-white/90 text-lg md:text-xl lg:text-2xl font-light tracking-[0.2em] uppercase transition-all duration-1000 delay-300 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              STEP INTO OUR WORLD
            </p>
          </div>
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
