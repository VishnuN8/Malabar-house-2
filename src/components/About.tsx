import { Leaf, Flame, Waves } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const pillars = [
  {
    icon: Waves,
    title: 'From the Backwaters',
    text: 'Each morning our kitchen receives the day’s catch from the Vembanad — pearl spot, prawns, crab, and kingfish — landed by fishermen we know by name.',
  },
  {
    icon: Flame,
    title: 'Cooked Over Fire',
    text: 'Our tandoor and open charcoal hearth impart a smoke that no stove can replicate. Banana leaf, coconut husk, and dried curry-leaf stalks fuel the flame.',
  },
  {
    icon: Leaf,
    title: 'Twelve Hand-Ground Spices',
    text: 'We grind every masala fresh, each morning, on a stone mortar — cardamom, clove, pepper, fennel, and the rest, measured by hand and instinct.',
  },
];

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="story" className="relative overflow-hidden bg-ink-950 bg-grain py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} grid gap-16 lg:grid-cols-2 lg:items-center`}
        >
          <div>
            <div className="section-label mb-6">
              <span className="h-px w-12 bg-gold-400/60" />
              <span>Our Story</span>
            </div>
            <h2 className="font-display text-4xl leading-tight text-cream-50 md:text-5xl">
              A kitchen that began as a
              <span className="italic text-gold-200"> family table.</span>
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-cream-100/75">
              <p>
                Malabar House opened in 1998 in a restored spice-merchant’s home on the Kochi waterfront. What began as a single communal table — where our founder, Mariamma Thomas, fed travellers the food she cooked for her own family — has grown into one of South India’s most quietly celebrated dining rooms.
              </p>
              <p>
                We have never strayed from her rule: cook what the coast gives you, grind your own spices, and never let a guest leave hungry. The plates have grown more precise, the room more refined, but the hearth is the same one she lit nearly thirty years ago.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <p className="font-display text-4xl text-gold-200">27</p>
                <p className="text-sm uppercase tracking-widest text-cream-200/60">Years of service</p>
              </div>
              <div>
                <p className="font-display text-4xl text-gold-200">42</p>
                <p className="text-sm uppercase tracking-widest text-cream-200/60">Dishes on the menu</p>
              </div>
              <div>
                <p className="font-display text-4xl text-gold-200">12</p>
                <p className="text-sm uppercase tracking-widest text-cream-200/60">Spices, ground daily</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-gold-400/10">
              <img
                src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Ambient candlelit dining room"
                className="aspect-[4/5] w-full object-cover transition-transform duration-[1.4s] hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
            </div>
            <div className="absolute -bottom-8 -left-8 hidden overflow-hidden rounded-2xl border border-gold-400/20 shadow-2xl md:block">
              <img
                src="https://images.pexels.com/photos/9142634/pexels-photo-9142634.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Fresh green cardamom pods"
                className="h-48 w-40 object-cover"
              />
            </div>
            <div className="absolute -right-4 -top-4 rounded-full border border-gold-400/30 bg-ink-900/80 px-6 py-3 backdrop-blur-md">
              <p className="font-script text-2xl text-gold-200">സ്വാഗതം</p>
              <p className="text-center text-[0.6rem] uppercase tracking-widest text-cream-200/60">Welcome</p>
            </div>
          </div>
        </div>

        <div className="mt-24 grid gap-8 md:grid-cols-3">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`reveal ${visible ? 'is-visible' : ''} group rounded-2xl border border-gold-400/10 bg-ink-900/50 p-8 transition-all duration-700 hover:border-gold-400/30 hover:bg-ink-800/50`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-gold-400/30 text-gold-300 transition-colors group-hover:bg-gold-400/10">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-2xl text-cream-50">{p.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-cream-100/70">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
