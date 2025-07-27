import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Packages() {
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
  };

  return (
    <div className="min-h-screen bg-white">
      <main>
        <section className="px-6 py-16 bg-white">
          <h1 className="text-5xl font-bold text-center mb-16 tracking-wider">
            CHOOSE YOUR ADVENTURE
          </h1>

          {/* Navigation */}
          <div className="flex items-center justify-center mb-12 space-x-4">
            <Button variant="ghost" size="sm" className="p-2">
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>

            <Button variant="ghost" size="sm" className="p-2">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {Object.entries(expeditions).map(([month, trips]) => (
              <div key={month} className="space-y-4">
                <div className="bg-gray-400 text-white text-center py-4 rounded-lg">
                  <div className="text-sm font-medium">2025</div>
                  <div className="text-3xl font-bold">{month.charAt(0).toUpperCase() + month.slice(1)}</div>
                </div>
                <div className="space-y-4">
                  {trips.map((expedition) => (
                    <div key={expedition.id} className="flex space-x-3 p-3 bg-gray-50 rounded-lg">
                      <img
                        src={expedition.image || "/placeholder.svg"}
                        alt={expedition.title}
                        className="w-16 h-12 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <Badge className={`${expedition.editionColor} text-white text-xs mb-1 font-medium`}>
                          {expedition.edition}
                        </Badge>
                        <h3 className="font-bold text-sm leading-tight mb-1">
                          {expedition.title}
                        </h3>
                        <p className="text-xs text-gray-600">{expedition.dates}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
