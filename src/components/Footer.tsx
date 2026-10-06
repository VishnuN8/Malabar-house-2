import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gold-400/10 bg-ink-950 bg-grain pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-400/40 text-gold-300">
                <span className="font-script text-lg leading-none">മ</span>
              </span>
              <div>
                <p className="font-serif text-2xl text-cream-50">Malabar House</p>
                <p className="text-[0.6rem] uppercase tracking-widest text-gold-400/80">Kerala Kitchen · Est. 1998</p>
              </div>
            </div>
            <p className="mt-6 max-w-md text-base leading-relaxed text-cream-100/60">
              A destination table on the Malabar coast, cooking the food of Kerala with fire, spice, and the patience of three decades.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/20 text-gold-200/70 transition-all hover:border-gold-300 hover:text-gold-100 hover:bg-gold-400/5">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/20 text-gold-200/70 transition-all hover:border-gold-300 hover:text-gold-100 hover:bg-gold-400/5">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold-300/70">Visit</h4>
            <ul className="mt-5 space-y-4 text-sm text-cream-100/65">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-300/60" />
                <span>14 Bazaar Road, Fort Kochi<br />Kochi, Kerala 682001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-gold-300/60" />
                <a href="tel:+914844001234" className="transition-colors hover:text-gold-200">+91 484 400 1234</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-gold-300/60" />
                <a href="mailto:table@malabarhouse.in" className="transition-colors hover:text-gold-200">table@malabarhouse.in</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold-300/70">Hours</h4>
            <ul className="mt-5 space-y-3 text-sm text-cream-100/65">
              <li>Tue – Thu · 6pm – 10:30pm</li>
              <li>Fri – Sat · 12:30pm – 11pm</li>
              <li>Sunday · 12:30pm – 10pm</li>
              <li className="text-bronze-400">Monday · Closed</li>
            </ul>
            <a href="#reserve" className="btn-gold mt-6 !px-6 !py-2.5 !text-xs">
              Book a Table
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gold-400/10 pt-8 sm:flex-row">
          <p className="text-xs text-cream-200/40">
            © {new Date().getFullYear()} Malabar House. All rights reserved.
          </p>
          <p className="font-script text-lg text-gold-200/40">നന്ദി · Thank you</p>
          <div className="flex gap-6 text-xs text-cream-200/40">
            <a href="#" className="transition-colors hover:text-gold-200">Privacy</a>
            <a href="#" className="transition-colors hover:text-gold-200">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
