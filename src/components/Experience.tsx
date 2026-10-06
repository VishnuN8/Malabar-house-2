import { Clock, MapPin, CalendarDays, Users } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const experiences = [
  {
    image: 'https://images.pexels.com/photos/29222614/pexels-photo-29222614.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'The Chef’s Table',
    duration: '2.5 hours · 8 guests',
    description:
      'A seat at our open kitchen pass, where Chef Rajan builds a nine-course tasting menu before your eyes. Each course arrives with the story of its spice, its coast, and its season.',
    price: 'From ₹4,500 per guest',
  },
  {
    image: 'https://images.pexels.com/photos/31970868/pexels-photo-31970868.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'The Sadhya Feast',
    duration: 'Sundays · Lunch only',
    description:
      'The traditional Kerala banquet served on banana leaf — twenty-two preparations, three payasams, and red matta rice. Eaten by hand, as it should be, in our courtyard under the jackfruit trees.',
    price: '₹1,800 per guest',
  },
  {
    image: 'https://images.pexels.com/photos/32568165/pexels-photo-32568165.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Spice & Story Evening',
    duration: 'First Friday monthly',
    description:
      'A guided dinner through the spice history of the Malabar coast — from the Arab traders who brought cardamom to the Portuguese who left their chilli. Six courses, six stories, one remarkable evening.',
    price: '₹3,200 per guest',
  },
];

const hours = [
  { day: 'Tuesday – Thursday', time: '6:00 pm – 10:30 pm' },
  { day: 'Friday – Saturday', time: '12:30 pm – 11:00 pm' },
  { day: 'Sunday', time: '12:30 pm – 10:00 pm' },
  { day: 'Monday', time: 'Closed' },
];

export default function Experience() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="experience" className="relative overflow-hidden bg-ink-900 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mb-16 text-center`}>
          <div className="section-label mb-6 justify-center">
            <span className="h-px w-12 bg-gold-400/60" />
            <span>More Than a Meal</span>
            <span className="h-px w-12 bg-gold-400/60" />
          </div>
          <h2 className="font-display text-4xl leading-tight text-cream-50 md:text-5xl lg:text-6xl">
            Ways to dine
            <span className="italic text-gold-200"> with us.</span>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {experiences.map((exp, i) => (
            <article
              key={exp.title}
              className={`reveal ${visible ? 'is-visible' : ''} group relative overflow-hidden rounded-3xl border border-gold-400/10 bg-ink-950/50`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
                <div className="absolute bottom-4 left-5 flex items-center gap-2 text-xs uppercase tracking-widest text-gold-200">
                  <Clock className="h-3.5 w-3.5" />
                  {exp.duration}
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl text-cream-50">{exp.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-cream-100/70">{exp.description}</p>
                <p className="mt-5 text-sm font-medium text-gold-200">{exp.price}</p>
                <a
                  href="#reserve"
                  className="mt-5 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-cream-200/70 transition-colors hover:text-gold-200"
                >
                  Enquire
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 grid gap-8 rounded-3xl border border-gold-400/10 bg-ink-950/50 p-8 lg:grid-cols-2 lg:p-12">
          <div>
            <h3 className="font-display text-3xl text-cream-50">Opening Hours</h3>
            <p className="mt-2 text-sm text-cream-200/60">Reservations recommended for weekend service.</p>
            <ul className="mt-6 space-y-4">
              {hours.map((h) => (
                <li key={h.day} className="flex items-center justify-between border-b border-gold-400/10 pb-3">
                  <span className="flex items-center gap-3 text-cream-100/80">
                    <CalendarDays className="h-4 w-4 text-gold-300/70" />
                    {h.day}
                  </span>
                  <span className={`text-sm ${h.time === 'Closed' ? 'text-bronze-400' : 'text-cream-100/70'}`}>
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-between rounded-2xl bg-gradient-to-br from-ink-800/60 to-ink-950/60 p-8">
            <div>
              <h3 className="font-display text-3xl text-cream-50">Find Us</h3>
              <div className="mt-6 space-y-4 text-cream-100/75">
                <p className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-gold-300/70" />
                  <span>
                    14 Bazaar Road, Fort Kochi
                    <br />
                    Kochi, Kerala 682001
                    <br />
                    India
                  </span>
                </p>
                <p className="flex items-center gap-3">
                  <Users className="h-5 w-5 flex-shrink-0 text-gold-300/70" />
                  <span>Parties of up to 12 · Private dining on request</span>
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#reserve" className="btn-gold flex-1">
                Book a Table
              </a>
              <a href="tel:+914844001234" className="btn-outline flex-1">
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
