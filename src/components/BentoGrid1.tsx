"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ArrowRight, Menu } from "lucide-react"

interface ExpeditionCardProps {
  title: string
  location: string
  videoUrl: string
  className?: string
}

const ExpeditionCard = ({ title, location, videoUrl, className }: ExpeditionCardProps) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, damping: 25 },
    },
  }

  return (
    <motion.div
      variants={variants}
      className={cn(
        "group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-[1.02]",
        className,
      )}
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <video autoPlay muted loop playsInline className="h-full w-full object-cover">
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full flex-col justify-start p-6">
        <div className="text-white">
          <h3 className="text-2xl font-bold mb-1">{title}</h3>
          <p className="text-lg font-medium opacity-90">{location}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function BentoGrid1() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <div className="flex items-center justify-between px-6 py-6">
        <h1 className="text-2xl font-bold">NOMADIC ROAD</h1>
        <div className="flex items-center gap-4">
          <span className="text-lg font-semibold">EXPLORE ALL EXPEDITIONS</span>
          <Menu className="size-6" />
        </div>
      </div>

      {/* Expeditions Section */}
      <div className="px-6 pb-12">
        <h2 className="text-4xl font-bold mb-8">UPCOMING EXPEDITIONS</h2>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-3 grid-rows-2 gap-4 h-[600px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Nomadic Summer Mongolia - Top Left (2 columns) */}
          <ExpeditionCard
            title="Nomadic Summer"
            location="Mongolia"
            videoUrl="/videos/mongolia-desert.mp4"
            className="col-span-2 row-span-1"
          />

          {/* Uncharted Sierra Peru - Top Right (1 column) */}
          <ExpeditionCard
            title="Uncharted Sierra"
            location="Peru"
            videoUrl="/videos/peru-mountains.mp4"
            className="col-span-1 row-span-1"
          />

          {/* Ruthless RN5 Madagascar - Bottom Left (1 column) */}
          <ExpeditionCard
            title="Ruthless RN5"
            location="Madagascar"
            videoUrl="/videos/madagascar-road.mp4"
            className="col-span-1 row-span-1"
          />

          {/* Cold Steppes Mongolia - Bottom Right (2 columns) */}
          <ExpeditionCard
            title="Cold Steppes"
            location="Mongolia"
            videoUrl="/videos/mongolia-winter.mp4"
            className="col-span-2 row-span-1"
          />
        </motion.div>
      </div>

      {/* Curate Personal Expedition Section */}
      <div className="px-6 py-16 max-w-6xl">
        <h2 className="text-5xl font-bold mb-12 tracking-tight">CURATE A PERSONAL EXPEDITION</h2>

        <div className="space-y-8 text-lg leading-relaxed max-w-4xl">
          <p>
            For years, Nomadic Road has made dream journeys a reality for countless explorers. Adventurers turn to us
            for thrilling overland expeditions they once only imagined.
          </p>

          <p>
            With four wheels, the world is at your fingertips. Accessibility takes on a new meaning. Be it across a
            country or a continent, we craft adventurous expeditions to your specifications.
          </p>

          <p>No dream is too far-fetched. We'll take you anywhere you dare to go.</p>
        </div>

        <div className="mt-12">
          <button className="flex items-center gap-2 text-lg font-semibold hover:gap-4 transition-all duration-300">
            <span>EXPLORE</span>
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>

      {/* See It To Believe It Section */}
      <div className="px-6 py-16 bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl">
          {/* Left Content */}
          <div>
            <h2 className="text-5xl font-bold mb-8 tracking-tight">SEE IT TO BELIEVE IT</h2>

            <p className="text-lg leading-relaxed mb-12 max-w-lg">
              When we say we take you to remote places, it entails hot deserts, wet jungles, tall mountains, cold
              glaciers, or wherever nature is at its best. You can't script this level of reality. This is as real as
              'real' can get.
            </p>

            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">Watch our Unscripted Expedition films:</h3>

              <div className="space-y-4">
                {[
                  "The Great Kalahari, Africa",
                  "Uncharted Sierra, Peru",
                  "Ruthless RN5, Madagascar",
                  "Cold Steppes, Mongolia",
                  "Andean Plateau, Bolivia",
                  "Puna De Atacama, Argentina",
                ].map((film, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-gray-300">
                    <span className="text-lg">{film}</span>
                    <button className="flex items-center gap-2 font-semibold hover:gap-3 transition-all duration-300">
                      <span>PLAY</span>
                      <div className="w-0 h-0 border-l-[8px] border-l-black border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"></div>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-8">
              <button className="flex items-center gap-2 text-lg font-semibold hover:gap-4 transition-all duration-300">
                <span>ABOUT US</span>
                <ArrowRight className="size-5" />
              </button>
              <button className="flex items-center gap-2 text-lg font-semibold hover:gap-4 transition-all duration-300">
                <span>IN THE PRESS</span>
                <ArrowRight className="size-5" />
              </button>
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="grid grid-cols-2 gap-4 h-[600px]">
            {/* Top Left - Large mountain landscape */}
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Mountain expedition"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top Right - Building in snow */}
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Mountain shelter"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Left - Desert landscape */}
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Desert expedition"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Right - Landscape scene */}
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Expedition convoy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
