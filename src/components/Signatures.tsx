import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { signatureDishes } from '@/data/menu';
import { useReveal } from '@/hooks/useReveal';

export default function Signatures() {
  const [active, setActive] = useState(0);
  const { ref, visible } = useReveal<HTMLDivElement>();
  const dish = signatureDishes[active];

  const go = (dir: number) => {
    setActive((prev) => (prev + dir + signatureDishes.length) % signatureDishes.length);
  };

  return (
    <section id="signatures" className="relative overflow-hidden bg-ink-900 py-28 lg:py-36">
      <div className="absolute inset-0 bg-grain opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mb-16 text-center`}>
          <div className="section-label mb-6 justify-center">
            <span className="h-px w-12 bg-gold-400/60" />
            <span>Signature Plates</span>
            <span className="h-px w-12 bg-gold-400/60" />
          </div>
          <h2 className="font-display text-4xl leading-tight text-cream-50 md:text-5xl lg:text-6xl">
            Dishes worth the
            <span className="italic text-gold-200"> journey.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-cream-100/70">
            Four preparations that define our kitchen — each rooted in Kerala tradition, refined over decades, and built around a single exceptional ingredient.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-3xl border border-gold-400/15">
            <img
              key={dish.image}
              src={dish.image}
              alt={dish.name}
              className="aspect-square w-full object-cover animate-fade-in"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
            {dish.tags && (
              <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                {dish.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-gold-400/30 bg-ink-950/70 px-3 py-1 text-[0.65rem] uppercase tracking-widest text-gold-200 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <div className="absolute bottom-5 left-5 rounded-full bg-gold-400/90 px-4 py-1.5 text-sm font-medium text-ink-950">
              {dish.price}
            </div>
          </div>

          <div key={dish.name} className="animate-fade-up">
            <p className="text-sm uppercase tracking-widest text-gold-300/80">{dish.course}</p>
            <h3 className="mt-3 font-display text-4xl text-cream-50 md:text-5xl">{dish.name}</h3>
            {dish.malayalam && (
              <p className="mt-1 font-script text-2xl text-gold-200/70">{dish.malayalam}</p>
            )}
            <p className="mt-6 text-lg leading-relaxed text-cream-100/80">{dish.description}</p>

            <div className="mt-8">
              <p className="mb-4 text-xs uppercase tracking-widest text-gold-300/70">The Components</p>
              <ul className="space-y-3">
                {dish.components.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-base text-cream-100/75">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-400" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => go(-1)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-400/30 text-gold-200 transition-all hover:border-gold-300 hover:bg-gold-400/10"
                  aria-label="Previous dish"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => go(1)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-400/30 text-gold-200 transition-all hover:border-gold-300 hover:bg-gold-400/10"
                  aria-label="Next dish"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                <span className="ml-3 text-sm text-cream-200/60">
                  {String(active + 1).padStart(2, '0')} / {String(signatureDishes.length).padStart(2, '0')}
                </span>
              </div>
              <div className="flex gap-2">
                {signatureDishes.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      i === active ? 'w-8 bg-gold-400' : 'w-2 bg-gold-400/30'
                    }`}
                    aria-label={`Go to dish ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
