"use client"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Navbar from "@/components/Navbar"
import ParallaxSection from "@/components/ParallaxSection"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Packages() {
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

  const packages = [
    {
      name: "Spiti Valley Explorer",
      duration: "7 Days",
      price: "₹45,000",
      difficulty: "Moderate",
      dates: "15-22 June 2024",
      description: "Experience the mystical Spiti Valley with our comprehensive 7-day expedition.",
      highlights: ["Visit Key Monastery", "Chandratal Lake", "Kunzum Pass", "Local Villages"],
      status: "Available"
    },
    {
      name: "Himalayan Adventure",
      duration: "10 Days",
      price: "₹65,000",
      difficulty: "Challenging",
      dates: "1-10 July 2024",
      description: "A challenging trek through the high Himalayas with expert guides.",
      highlights: ["High Altitude Trek", "Mountain Passes", "Remote Villages", "Stargazing"],
      status: "Limited"
    },
    {
      name: "Ladakh Discovery",
      duration: "12 Days",
      price: "₹78,000",
      difficulty: "Moderate",
      dates: "20-31 July 2024",
      description: "Discover the beauty of Ladakh with cultural experiences and adventure.",
      highlights: ["Pangong Lake", "Nubra Valley", "Monasteries", "Local Culture"],
      status: "Available"
    },
    {
      name: "Manali to Spiti",
      duration: "8 Days",
      price: "₹52,000",
      difficulty: "Easy",
      dates: "5-12 August 2024",
      description: "Perfect for beginners, explore the scenic route from Manali to Spiti.",
      highlights: ["Rohtang Pass", "Atal Tunnel", "Spiti Valley", "Comfortable Stays"],
      status: "Available"
    }
  ]

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
                ADVENTURE PACKAGES
                <br />
                FOR EVERY EXPLORER
              </h2>

              {/* Subheading */}
              <p
                className="text-white text-lg md:text-xl lg:text-2xl font-light tracking-[0.2em] uppercase"
                style={{
                  textShadow: "0 2px 8px #000, 1px 1px 0 #000, -1px -1px 0 #000",
                  WebkitTextStroke: "0.5px #000"
                }}
              >
                CHOOSE YOUR PERFECT EXPEDITION
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
              BOOK NOW
            </p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <ParallaxSection>
        <section className="py-20 bg-gray-900">
          <div className="max-w-6xl mx-auto px-8">
            <h3 className="text-4xl font-bold text-white mb-8 text-center">
              Our Adventure Packages
            </h3>
            <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto mb-16">
              From beginner-friendly expeditions to challenging adventures, we have the perfect package for every explorer.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {packages.map((pkg, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-2">{pkg.name}</h4>
                      <div className="flex gap-2 mb-3">
                        <Badge variant="secondary">{pkg.duration}</Badge>
                        <Badge variant={pkg.difficulty === "Easy" ? "default" : pkg.difficulty === "Moderate" ? "secondary" : "destructive"}>
                          {pkg.difficulty}
                        </Badge>
                        <Badge variant={pkg.status === "Available" ? "default" : "destructive"}>
                          {pkg.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-white">{pkg.price}</p>
                      <p className="text-gray-400 text-sm">{pkg.dates}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{pkg.description}</p>
                  
                  <div className="mb-6">
                    <h5 className="text-white font-semibold mb-2">Highlights:</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {pkg.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="text-green-400 mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full" disabled={pkg.status === "Sold out"}>
                    {pkg.status === "Available" ? "Book Now" : pkg.status === "Limited" ? "Limited Spots" : "Sold Out"}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Custom Package Section */}
      <ParallaxSection>
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <h3 className="text-4xl font-bold text-white mb-8">
              Need a Custom Package?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Can't find the perfect package? Let us create a custom expedition tailored to your preferences and schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
              <Button size="lg">
                Custom Quote
              </Button>
            </div>
          </div>
        </section>
      </ParallaxSection>
    </main>
  )
} 