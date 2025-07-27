import Image from "next/image"

export function CraftsmanshipSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/craftsmanship-hero.jpg"
        alt="Person working on vehicle in desert"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">CRAFTSMANSHIP</h1>
            <p className="text-xl lg:text-2xl text-white leading-relaxed">
              We stand firm in our belief: real adventures await outside our comfort zones. On our overland expeditions,
              Mother Nature has the last word. We can't script this level of reality. Our adventures are designed to
              push limits, where challenges are embraced rather than feared. The catharsis that follows is unmatched.
              Know that we prepare thoroughly, with our expert team always watching from the sidelines.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
