import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const links = [
  { label: 'Story', href: '#story' },
  { label: 'Signatures', href: '#signatures' },
  { label: 'Menu', href: '#menu' },
  { label: 'Experience', href: '#experience' },
  { label: 'Reserve', href: '#reserve' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-ink-950/85 backdrop-blur-xl border-b border-gold-400/10 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/40 text-gold-300 transition-colors group-hover:border-gold-300 group-hover:text-gold-200">
            <span className="font-script text-lg leading-none">മ</span>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-xl tracking-wide text-cream-50">Malabar House</span>
            <span className="text-[0.6rem] uppercase tracking-widest text-gold-400/80">Kerala Kitchen</span>
          </span>
        </a>

        <ul className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-medium tracking-wide text-cream-200/80 transition-colors duration-300 hover:text-gold-200 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold-300 after:transition-all after:duration-500 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+914844001234"
            className="flex items-center gap-2 text-sm text-cream-200/70 transition-colors hover:text-gold-200"
          >
            <Phone className="h-4 w-4" />
            +91 484 400 1234
          </a>
          <a href="#reserve" className="btn-gold !px-6 !py-2.5 !text-xs">
            Book a Table
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/30 text-gold-200 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          open ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-4 mt-3 rounded-2xl border border-gold-400/10 bg-ink-900/95 p-6 backdrop-blur-xl">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-base text-cream-100 transition-colors hover:bg-gold-400/5 hover:text-gold-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#reserve"
            onClick={() => setOpen(false)}
            className="btn-gold mt-4 w-full"
          >
            Book a Table
          </a>
        </div>
      </div>
    </header>
  );
}
