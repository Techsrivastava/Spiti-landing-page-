import Image from "next/image"

export function CoterieSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/coterie-hero.jpg"
        alt="Silhouette of person at sunset"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">COTERIE</h1>
            <p className="text-xl lg:text-2xl text-white leading-relaxed">
              We believe in breaking away from the pack. Our overland journeys are for the curious and the bold. We keep
              our expeditions intimate, with just 10 explorers. These adventurers have journeyed far and wide but seek
              to experience the world in a new light. They dare to defy the status quo and travel with strangers beyond
              borders. The outcome? Transformative journeys and connections that live on. Still, if you prefer to do it
              yourself, consider our custom expeditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
