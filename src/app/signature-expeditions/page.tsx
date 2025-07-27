"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Navbar from "@/components/Navbar"
import Packages from "@/components/Packages"
import ComponentThree from "@/components/expeditions-page"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function SignatureExpeditions() {
  const [isLoaded, setIsLoaded] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(true)

    // GSAP Parallax Effect
    const hero = heroRef.current
    const video = videoRef.current
    const content = contentRef.current

    if (hero && video && content) {
      // Parallax effect for video background - subtle
      gsap.to(video, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      })
      // Parallax effect for content - very subtle
      gsap.to(content, {
        yPercent: -3,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      })
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])
  const expeditions = {
    aug: [
      {
        id: 1,
        image: "/placeholder.svg?height=80&width=120",
        title: "Nomadic Summer Mongolia",
        dates: "2 - 11 Aug - Sold out",
        edition: "SIGNATURE EDITION",
        editionColor: "bg-blue-600",
      },
      {
        id: 2,
        image: "/placeholder.svg?height=80&width=120",
        title: "The Great Kalahari Southern Africa",
        dates: "3 - 16 Aug - Sold out",
        edition: "FOUNDER LED EDITION",
        editionColor: "bg-gray-700",
      },
      {
        id: 3,
        image: "/placeholder.svg?height=80&width=120",
        title: "Trans Gobi Mongolia",
        dates: "26 Aug - 7 Sep - Sold out",
        edition: "FOUNDER LED EDITION",
        editionColor: "bg-gray-700",
      },
      {
        id: 4,
        image: "/placeholder.svg?height=80&width=120",
        title: "Signature Expedition Name",
        dates: "Date range - Status",
        edition: "SIGNATURE EDITION",
        editionColor: "bg-blue-600",
      },
    ],
    oct: [
      {
        id: 5,
        image: "/placeholder.svg?height=80&width=120",
        title: "Uncharted Sierra Peru",
        dates: "10 - 21 Oct - Bookings open",
        edition: "SIGNATURE EDITION",
        editionColor: "bg-blue-600",
      },
      {
        id: 6,
        image: "/placeholder.svg?height=80&width=120",
        title: "Andean Plateau Bolivia",
        dates: "4 - 16 Oct - Bookings open",
        edition: "FOUNDER LED EDITION",
        editionColor: "bg-gray-700",
      },
    ],
    nov: [
      {
        id: 7,
        image: "/placeholder.svg?height=80&width=120",
        title: "Ruthless RN5 Madagascar",
        dates: "29 Nov - 10 Dec - Almost full",
        edition: "FOUNDER LED EDITION",
        editionColor: "bg-gray-700",
      },
      {
        id: 8,
        image: "/placeholder.svg?height=80&width=120",
        title: "Untamed Wilderness Madagascar",
        dates: "15 - 24 Nov - Almost full",
        edition: "INAUGURAL EDITION",
        editionColor: "bg-gray-700",
      },
    ],
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden bg-black">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            src="\12147600_2558_1440_30fps.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover object-center"
            style={{ backgroundColor: '#000' }}
          />
          {/* Lighter overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content Container */}
        <div ref={contentRef} className="relative z-20 flex h-full flex-col">
          {/* Main Content */}
          <div className="flex flex-1 items-center">
            <div className="px-8 md:px-12 lg:px-16 max-w-4xl">
              {/* Main Headline */}
              <h2
                className="text-white text-4xl md:text-4xl lg:text-4xl xl:text-6xl font-black leading-[0.9] tracking-tight uppercase mb-8"
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  fontWeight: 900,
                  textShadow: "0 4px 24px #000, 0 1px 2px #000, 2px 2px 0 #000, -2px -2px 0 #000",
                  WebkitTextStroke: "1px #000"
                }}
              >
                SIGNATURE EXPEDITIONS
                <br />
                INTO THE WILD
              </h2>

              {/* Subheading */}
              <p
                className="text-white text-lg md:text-xl lg:text-2xl font-light tracking-[0.2em] uppercase"
                style={{
                  textShadow: "0 2px 8px #000, 1px 1px 0 #000, -1px -1px 0 #000",
                  WebkitTextStroke: "0.5px #000"
                }}
              >
                PREMIUM ADVENTURE EXPERIENCES
              </p>
            </div>
          </div>

          {/* Bottom Right Text */}
          <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 lg:bottom-16 lg:right-16">
            <p
              className="text-white text-sm md:text-base font-light tracking-[0.3em] uppercase"
              style={{
                textShadow: "0 2px 8px #000, 1px 1px 0 #000, -1px -1px 0 #000",
                WebkitTextStroke: "0.5px #000"
              }}
            >
              EXPLORE
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <Packages />
      <ComponentThree/>
     

      
    </main>
  )
} 