"use client"

import { useState, useEffect, useRef } from "react"
import ScrollReveal from './ScrollReveal';

const slides = [
  {
    title: "A",
    subtitle: "Is for Apple",
    description: "Fresh, crisp, and naturally sweet",
    img: "/placeholder.svg?height=800&width=1200&text=Fresh Red Apple in Orchard",
    realImg: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=1200&h=800&fit=crop&crop=center",
    color: "from-red-500/20 to-orange-500/20",
  },
  {
    title: "B",
    subtitle: "Is for Banana",
    description: "Tropical sweetness in golden yellow",
    img: "/placeholder.svg?height=800&width=1200&text=Tropical Banana Plantation",
    realImg: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=1200&h=800&fit=crop&crop=center",
    color: "from-yellow-500/20 to-orange-500/20",
  },
  {
    title: "C",
    subtitle: "Is for Car",
    description: "Engineering excellence in motion",
    img: "/placeholder.svg?height=800&width=1200&text=Modern Sports Car",
    realImg: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&h=800&fit=crop&crop=center",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "D",
    subtitle: "Is for Desk",
    description: "Where creativity meets productivity",
    img: "/placeholder.svg?height=800&width=1200&text=Modern Workspace Desk",
    realImg: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop&crop=center",
    color: "from-green-500/20 to-blue-500/20",
  },
  {
    title: "E",
    subtitle: "Is for Eggs",
    description: "Nature's perfect protein package",
    img: "/placeholder.svg?height=800&width=1200&text=Fresh Farm Eggs",
    realImg: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=1200&h=800&fit=crop&crop=center",
    color: "from-orange-500/20 to-yellow-500/20",
  },
  {
    title: "F",
    subtitle: "Is for Fabulous",
    description: "Extraordinary beauty and elegance",
    img: "/placeholder.svg?height=800&width=1200&text=Fabulous Fashion Model",
    realImg: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&h=800&fit=crop&crop=center",
    color: "from-purple-500/20 to-pink-500/20",
  },
]

export default function SectionOne() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [galleryActive, setGalleryActive] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const heroHeight = window.innerHeight
      const scrollTop = window.scrollY
      const sectionTop = sectionRef.current.offsetTop
      const sectionHeight = sectionRef.current.offsetHeight

      // Activate gallery when scrolling past hero
      const heroComplete = scrollTop >= heroHeight * 0.7
      setGalleryActive(heroComplete)

      // Calculate progress within gallery section
      if (scrollTop >= sectionTop) {
        const scrollIntoSection = scrollTop - sectionTop
        const maxScroll = sectionHeight - window.innerHeight
        const progress = Math.min(Math.max(scrollIntoSection / maxScroll, 0), 1)

        setScrollProgress(progress)

        // Calculate active slide based on scroll progress
        const slideIndex = Math.floor(progress * slides.length)
        const newSlide = Math.min(slideIndex, slides.length - 1)

        if (newSlide !== currentSlide && heroComplete) {
          setIsTransitioning(true)
          setCurrentSlide(newSlide)

          setTimeout(() => {
            setIsTransitioning(false)
          }, 800)
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [currentSlide])

  const navigateToSlide = (index: number) => {
    if (!sectionRef.current) return
    const sectionTop = sectionRef.current.offsetTop
    const targetScroll = sectionTop + (index / (slides.length - 1)) * (slides.length - 1) * window.innerHeight
    window.scrollTo({ top: targetScroll, behavior: "smooth" })
  }

  return (
    <>
    

    <section ref={sectionRef} className="relative w-full " style={{ height: `${slides.length * 100 + 50}vh` }}>
      {/* Sticky gallery container */}
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        {/* Gallery entrance overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/50 to-black z-20 transition-all duration-1000 ${
            galleryActive ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div className="h-full flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Welcome to
                </span>
                <br />
                <span className="text-white">The Gallery</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">Continue scrolling to explore each letter</p>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Main gallery content */}
        <div ref={galleryRef} className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-all duration-800 ease-out ${
                index === currentSlide
                  ? "opacity-100 scale-100 z-10"
                  : index < currentSlide
                    ? "opacity-0 scale-95 -translate-x-full z-0"
                    : "opacity-0 scale-105 translate-x-full z-0"
              }`}
            >
              {/* Background image with parallax */}
              <div className="absolute inset-0">
                <img
                  src={slide.realImg || slide.img}
                  alt={slide.subtitle}
                  className={`w-full h-full object-cover transition-transform duration-1200 ${
                    index === currentSlide && galleryActive ? "scale-100" : "scale-110"
                  }`}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = slide.img
                  }}
                />

                {/* Gradient overlays */}
                <div className={`absolute inset-0 bg-gradient-to-br ${slide.color}`} />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
              </div>

              {/* Content overlay */}
              <div className="relative z-10 h-full flex items-center justify-center px-4">
                <div className="text-center text-white max-w-4xl mx-auto">
                  {/* Large alphabet title */}
                  <h1
                    className={`text-[25vw] md:text-[20vw] lg:text-[15vw] xl:text-[12vw] font-black leading-none mb-6 transition-all duration-1000 ${
                      index === currentSlide && !isTransitioning && galleryActive
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-12 scale-90"
                    }`}
                    style={{
                      textShadow: "0 0 60px rgba(0,0,0,0.8), 0 0 120px rgba(0,0,0,0.4)",
                      WebkitTextStroke: "3px rgba(255,255,255,0.1)",
                    }}
                  >
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <h2
                    className={`text-3xl md:text-4xl lg:text-5xl font-light tracking-wider mb-4 transition-all duration-1000 delay-200 ${
                      index === currentSlide && !isTransitioning && galleryActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                    }`}
                    style={{
                      textShadow: "0 4px 30px rgba(0,0,0,0.8)",
                    }}
                  >
                    {slide.subtitle}
                  </h2>

                  {/* Description */}
                  <p
                    className={`text-lg md:text-xl text-gray-300 mb-8 transition-all duration-1000 delay-400 ${
                      index === currentSlide && !isTransitioning && galleryActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{
                      textShadow: "0 2px 20px rgba(0,0,0,0.8)",
                    }}
                  >
                    {slide.description}
                  </p>

                  {/* Decorative elements */}
                  <div
                    className={`flex items-center justify-center space-x-4 transition-all duration-1000 delay-600 ${
                      index === currentSlide && !isTransitioning && galleryActive
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-90"
                    }`}
                  >
                    <div className="w-12 h-0.5 bg-white/60" />
                    <div className="w-3 h-3 border-2 border-white/60 rounded-full" />
                    <div className="w-12 h-0.5 bg-white/60" />
                  </div>
                </div>
              </div>

              {/* Slide number indicator */}
              <div
                className={`absolute top-8 left-8 z-20 transition-all duration-500 ${
                  galleryActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                }`}
              >
                <div className="bg-white/10 backdrop-blur-md rounded-full px-5 py-3 border border-white/20">
                  <span className="text-white font-semibold text-sm">
                    {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Progress indicator */}
          <div
            className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 transition-all duration-500 ${
              galleryActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center space-x-6 bg-white/10 backdrop-blur-md rounded-full px-8 py-4 border border-white/20">
              <div className="flex space-x-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => navigateToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-500 hover:scale-125 ${
                      index === currentSlide
                        ? "bg-white w-10"
                        : index < currentSlide
                          ? "bg-white/70"
                          : "bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}: ${slides[index].title}`}
                  />
                ))}
              </div>
              <div className="w-px h-6 bg-white/30" />
              <span className="text-white text-sm font-medium">
                {slides[currentSlide].title} - {slides[currentSlide].subtitle}
              </span>
            </div>
          </div>

          {/* Scroll progress bar */}
          <div
            className={`absolute top-0 left-0 w-full h-1 bg-white/20 z-30 transition-opacity duration-500 ${
              galleryActive ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="h-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transition-all duration-300 ease-out"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>

          {/* Navigation arrows */}
          <div
            className={`absolute top-1/2 left-8 transform -translate-y-1/2 z-30 transition-all duration-500 ${
              galleryActive && currentSlide > 0 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
          >
            <button
              onClick={() => navigateToSlide(currentSlide - 1)}
              className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          <div
            className={`absolute top-1/2 right-8 transform -translate-y-1/2 z-30 transition-all duration-500 ${
              galleryActive && currentSlide < slides.length - 1
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-4"
            }`}
          >
            <button
              onClick={() => navigateToSlide(currentSlide + 1)}
              className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Scroll hint */}
          <div
            className={`absolute bottom-8 right-8 z-30 transition-all duration-500 ${
              currentSlide === 0 && galleryActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
              <div className="flex items-center space-x-2 text-white text-sm">
                <span>Keep scrolling</span>
                <div className="flex flex-col space-y-1">
                  <div className="w-1 h-1 bg-white rounded-full animate-bounce" />
                  <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                  <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ScrollReveal
  baseOpacity={0}
  enableBlur={true}
  baseRotation={5}
  blurStrength={10}
>
  When does a man die? When he is hit by a bullet? No! When he suffers a disease?
  No! When he ate a soup made out of a poisonous mushroom?
  No! A man dies when he is forgotten!
</ScrollReveal>
   
    </>
  )
}
