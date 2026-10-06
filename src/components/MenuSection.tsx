import { useState } from 'react';
import { menu } from '@/data/menu';
import { useReveal } from '@/hooks/useReveal';

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(menu[0].id);
  const { ref, visible } = useReveal<HTMLDivElement>();
  const category = menu.find((c) => c.id === activeCategory) ?? menu[0];

  return (
    <section id="menu" className="relative overflow-hidden bg-ink-950 bg-grain py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mb-12 text-center`}>
          <div className="section-label mb-6 justify-center">
            <span className="h-px w-12 bg-gold-400/60" />
            <span>The Full Table</span>
            <span className="h-px w-12 bg-gold-400/60" />
          </div>
          <h2 className="font-display text-4xl leading-tight text-cream-50 md:text-5xl lg:text-6xl">
            A menu in
            <span className="italic text-gold-200"> four movements.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-cream-100/70">
            From the first bite of a dry-roasted prawn to the last spoon of payasam, the menu moves as a meal should — with rhythm, restraint, and warmth.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-2 sm:gap-4">
          {menu.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-6 py-3 text-sm font-medium uppercase tracking-widest transition-all duration-500 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-gold-300 to-gold-500 text-ink-950 shadow-[0_0_30px_-8px_rgba(212,162,58,0.5)]'
                  : 'border border-gold-400/20 text-cream-200/70 hover:border-gold-400/40 hover:text-gold-200'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <div key={category.id} className="animate-fade-in">
          <p className="mb-10 text-center text-sm uppercase tracking-widest text-gold-300/70">
            {category.subtitle}
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {category.dishes.map((dish, i) => (
              <article
                key={dish.name}
                className="dish-card group animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent" />
                  <span className="absolute right-4 top-4 rounded-full bg-ink-950/80 px-3 py-1 text-sm font-medium text-gold-200 backdrop-blur-sm">
                    {dish.price}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl text-cream-50">{dish.name}</h3>
                  {dish.malayalam && (
                    <p className="mt-0.5 font-script text-lg text-gold-200/60">{dish.malayalam}</p>
                  )}
                  <p className="mt-3 text-sm leading-relaxed text-cream-100/70">{dish.description}</p>
                  <div className="mt-4 border-t border-gold-400/10 pt-4">
                    <p className="mb-2 text-[0.65rem] uppercase tracking-widest text-gold-300/60">Components</p>
                    <div className="flex flex-wrap gap-1.5">
                      {dish.components.map((c) => (
                        <span
                          key={c}
                          className="rounded-md bg-gold-400/5 px-2.5 py-1 text-xs text-cream-200/60"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-cream-200/50">
            A note on spice — every dish is prepared to your preferred heat. Please inform us of any allergies.
          </p>
          <a href="#reserve" className="btn-gold mt-6">
            Reserve Your Table
          </a>
        </div>
      </div>
    </section>
  );
}
