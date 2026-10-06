import { ChevronDown, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/28674566/pexels-photo-28674566.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Spiced lamb curry in a brass pot"
          className="h-full w-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-ink-950/55 to-ink-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/70 via-transparent to-ink-950/40" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-24 lg:px-10">
        <div className="animate-fade-in">
          <div className="section-label mb-8">
            <span className="h-px w-12 bg-gold-400/60" />
            <span>Est. 1998 · Kochi, Kerala</span>
          </div>

          <h1 className="font-display text-5xl leading-[1.05] text-cream-50 text-shadow-lux sm:text-6xl md:text-7xl lg:text-8xl">
            The spice coast,
            <br />
            <span className="italic text-gold-200">reimagined.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-cream-100/80">
            A destination table on the Malabar shore, where backwaters, banana leaf, and open flame meet the discipline of fine dining. Every dish begins with a spice and ends with a story.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#reserve" className="btn-gold">
              Reserve a Table
            </a>
            <a href="#menu" className="btn-outline">
              Explore the Menu
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex items-center gap-1 text-gold-300">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold-300 text-gold-300" />
              ))}
            </div>
            <p className="text-sm text-cream-200/70">
              <span className="font-medium text-cream-100">Three decades</span> of coastal craft · Featured in Condé Nast Traveller
            </p>
          </div>
        </div>
      </div>

      <a
        href="#story"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-gold-300/70 transition-colors hover:text-gold-200"
      >
        <span className="text-[0.65rem] uppercase tracking-widest">Discover</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
