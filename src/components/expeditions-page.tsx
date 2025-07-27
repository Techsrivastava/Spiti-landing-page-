"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const expeditions = [
  {
    id: 1,
    title: "NOMADIC SUMMER MONGOLIA",
    image: "/placeholder.svg?height=400&width=600",
    terrain: "desert",
    region: "asia",
    difficulty: "moderate",
  },
  {
    id: 2,
    title: "ANDEAN PLATEAU BOLIVIA",
    image: "/placeholder.svg?height=400&width=600",
    terrain: "mountain",
    region: "south-america",
    difficulty: "challenging",
  },
  {
    id: 3,
    title: "UNCHARTED SIERRA PERU",
    image: "/placeholder.svg?height=400&width=600",
    terrain: "desert",
    region: "south-america",
    difficulty: "expert",
  },
  {
    id: 4,
    title: "SAHARA CROSSING MOROCCO",
    image: "/placeholder.svg?height=400&width=600",
    terrain: "desert",
    region: "africa",
    difficulty: "challenging",
  },
  {
    id: 5,
    title: "PATAGONIA WILDERNESS CHILE",
    image: "/placeholder.svg?height=400&width=600",
    terrain: "mountain",
    region: "south-america",
    difficulty: "expert",
  },
  {
    id: 6,
    title: "ARCTIC TUNDRA ICELAND",
    image: "/placeholder.svg?height=400&width=600",
    terrain: "tundra",
    region: "europe",
    difficulty: "moderate",
  },
]

export default function ComponentThree() {
  const [terrainFilter, setTerrainFilter] = useState<string>("")
  const [regionFilter, setRegionFilter] = useState<string>("")
  const [difficultyFilter, setDifficultyFilter] = useState<string>("")

  const filteredExpeditions = expeditions.filter((expedition) => {
    return (
      (!terrainFilter || expedition.terrain === terrainFilter) &&
      (!regionFilter || expedition.region === regionFilter) &&
      (!difficultyFilter || expedition.difficulty === difficultyFilter)
    )
  })

  const clearFilters = () => {
    setTerrainFilter("")
    setRegionFilter("")
    setDifficultyFilter("")
  }

  return (
    <div className="min-h-screen bg-white">
    

      {/* Main Content */}
      <main className="px-6 py-12">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 tracking-tight">
          DISCOVER OUR EXPEDITIONS
        </h1>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <Select value={terrainFilter} onValueChange={setTerrainFilter}>
            <SelectTrigger className="w-[140px] bg-white border-gray-300">
              <SelectValue placeholder="Terrain" />
              <ChevronDown className="h-4 w-4 opacity-50" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="desert">Desert</SelectItem>
              <SelectItem value="mountain">Mountain</SelectItem>
              <SelectItem value="tundra">Tundra</SelectItem>
              <SelectItem value="forest">Forest</SelectItem>
            </SelectContent>
          </Select>

          <Select value={regionFilter} onValueChange={setRegionFilter}>
            <SelectTrigger className="w-[140px] bg-white border-gray-300">
              <SelectValue placeholder="Region" />
              <ChevronDown className="h-4 w-4 opacity-50" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asia">Asia</SelectItem>
              <SelectItem value="africa">Africa</SelectItem>
              <SelectItem value="europe">Europe</SelectItem>
              <SelectItem value="south-america">South America</SelectItem>
              <SelectItem value="north-america">North America</SelectItem>
            </SelectContent>
          </Select>

          <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
            <SelectTrigger className="w-[140px] bg-white border-gray-300">
              <SelectValue placeholder="Difficulty" />
              <ChevronDown className="h-4 w-4 opacity-50" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="easy">Easy</SelectItem>
              <SelectItem value="moderate">Moderate</SelectItem>
              <SelectItem value="challenging">Challenging</SelectItem>
              <SelectItem value="expert">Expert</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" onClick={clearFilters} className="bg-white border-gray-300 hover:bg-gray-50">
            Clear
          </Button>
        </div>

        {/* Results Counter */}
        <div className="text-center mb-8">
          <span className="text-lg">
            Showing <span className="text-orange-500 font-semibold">{filteredExpeditions.length}</span> results
          </span>
        </div>

        {/* Expeditions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredExpeditions.map((expedition) => (
            <div
              key={expedition.id}
              className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[4/5] bg-gray-100"
            >
              <Image
                src={expedition.image || "/placeholder.svg"}
                alt={expedition.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl md:text-2xl font-bold leading-tight">{expedition.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
