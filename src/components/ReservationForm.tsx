import { useState, type FormEvent } from 'react';
import { Calendar, Clock, Users, User, Mail, Phone, Check, Loader2 } from 'lucide-react';
import { supabase, type Reservation } from '@/lib/supabase';
import { useReveal } from '@/hooks/useReveal';

const timeSlots = [
  '12:30 pm', '1:00 pm', '1:30 pm', '2:00 pm',
  '6:30 pm', '7:00 pm', '7:30 pm', '8:00 pm', '8:30 pm',
];

const occasions = ['Casual dining', 'Anniversary', 'Birthday', 'Business', 'Celebration', 'Other'];

const today = new Date().toISOString().split('T')[0];

export default function ReservationForm() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const [form, setForm] = useState<Reservation>({
    name: '',
    email: '',
    phone: '',
    party_size: 2,
    reservation_date: '',
    reservation_time: '7:00 pm',
    occasion: 'Casual dining',
    special_requests: '',
  });

  const update = (field: keyof Reservation, value: string | number) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const { error } = await supabase.from('reservations').insert({
      name: form.name,
      email: form.email,
      phone: form.phone,
      party_size: form.party_size,
      reservation_date: form.reservation_date,
      reservation_time: form.reservation_time,
      occasion: form.occasion,
      special_requests: form.special_requests || null,
    });

    if (error) {
      setStatus('error');
      setErrorMsg('We could not submit your request. Please check your details and try again, or call us directly.');
      return;
    }
    setStatus('success');
  };

  return (
    <section id="reserve" className="relative overflow-hidden bg-ink-950 py-28 lg:py-36">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/39268201/pexels-photo-39268201.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Restaurant interior"
          className="h-full w-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/90 to-ink-950" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-10">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mb-12 text-center`}>
          <div className="section-label mb-6 justify-center">
            <span className="h-px w-12 bg-gold-400/60" />
            <span>Reservations</span>
            <span className="h-px w-12 bg-gold-400/60" />
          </div>
          <h2 className="font-display text-4xl leading-tight text-cream-50 md:text-5xl lg:text-6xl">
            Reserve your
            <span className="italic text-gold-200"> table.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-cream-100/70">
            We hold a limited number of tables each service. Tell us when you’d like to join us, and we’ll confirm by email within the hour.
          </p>
        </div>

        {status === 'success' ? (
          <div className="animate-fade-in rounded-3xl border border-gold-400/20 bg-ink-900/80 p-12 text-center backdrop-blur-xl">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold-400/15 text-gold-300">
              <Check className="h-8 w-8" />
            </div>
            <h3 className="font-display text-3xl text-cream-50">Request received</h3>
            <p className="mt-4 max-w-md mx-auto text-cream-100/75">
              Thank you, {form.name.split(' ')[0]}. We have your request for {form.party_size} guest{form.party_size > 1 ? 's' : ''} on {form.reservation_date} at {form.reservation_time}. A confirmation will arrive at {form.email} shortly.
            </p>
            <button
              onClick={() => {
                setStatus('idle');
                setForm({
                  name: '', email: '', phone: '', party_size: 2,
                  reservation_date: '', reservation_time: '7:00 pm',
                  occasion: 'Casual dining', special_requests: '',
                });
              }}
              className="btn-outline mt-8"
            >
              Make Another Reservation
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="animate-fade-in rounded-3xl border border-gold-400/15 bg-ink-900/70 p-8 backdrop-blur-xl lg:p-12"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Full Name" icon={User}>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  placeholder="Your name"
                  className="form-input"
                />
              </Field>
              <Field label="Email" icon={Mail}>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  placeholder="you@email.com"
                  className="form-input"
                />
              </Field>
              <Field label="Phone" icon={Phone}>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  placeholder="+91 ..."
                  className="form-input"
                />
              </Field>
              <Field label="Party Size" icon={Users}>
                <select
                  value={form.party_size}
                  onChange={(e) => update('party_size', Number(e.target.value))}
                  className="form-input"
                >
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n} className="bg-ink-900">
                      {n} {n === 1 ? 'guest' : 'guests'}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Date" icon={Calendar}>
                <input
                  type="date"
                  required
                  min={today}
                  value={form.reservation_date}
                  onChange={(e) => update('reservation_date', e.target.value)}
                  className="form-input"
                />
              </Field>
              <Field label="Time" icon={Clock}>
                <select
                  value={form.reservation_time}
                  onChange={(e) => update('reservation_time', e.target.value)}
                  className="form-input"
                >
                  {timeSlots.map((t) => (
                    <option key={t} value={t} className="bg-ink-900">{t}</option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="mt-6">
              <label className="mb-3 block text-xs uppercase tracking-widest text-gold-300/70">
                Occasion
              </label>
              <div className="flex flex-wrap gap-2">
                {occasions.map((o) => (
                  <button
                    key={o}
                    type="button"
                    onClick={() => update('occasion', o)}
                    className={`rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                      form.occasion === o
                        ? 'border border-gold-300 bg-gold-400/15 text-gold-100'
                        : 'border border-gold-400/15 text-cream-200/60 hover:border-gold-400/30 hover:text-gold-200'
                    }`}
                  >
                    {o}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <label className="mb-3 block text-xs uppercase tracking-widest text-gold-300/70">
                Special Requests <span className="normal-case text-cream-200/40">(optional)</span>
              </label>
              <textarea
                value={form.special_requests}
                onChange={(e) => update('special_requests', e.target.value)}
                rows={3}
                placeholder="Dietary needs, seating preference, a surprise..."
                className="form-input resize-none"
              />
            </div>

            {status === 'error' && (
              <p className="mt-6 rounded-lg border border-bronze-400/30 bg-bronze-500/10 px-4 py-3 text-sm text-bronze-300">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-gold mt-8 w-full disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending Request
                </>
              ) : (
                'Confirm Reservation'
              )}
            </button>
            <p className="mt-4 text-center text-xs text-cream-200/40">
              By requesting a table you agree to our cancellation policy. We hold reservations for 15 minutes.
            </p>
          </form>
        )}
      </div>

      <style>{`
        .form-input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid rgba(212, 162, 58, 0.15);
          background: rgba(10, 8, 6, 0.6);
          padding: 0.75rem 1rem 0.75rem 2.75rem;
          color: #f3ead6;
          font-size: 0.95rem;
          transition: border-color 0.3s, background 0.3s;
        }
        .form-input:focus {
          outline: none;
          border-color: rgba(212, 162, 58, 0.5);
          background: rgba(10, 8, 6, 0.8);
        }
        .form-input::placeholder { color: rgba(243, 234, 214, 0.3); }
        .form-input::-webkit-calendar-picker-indicator { filter: invert(0.7) sepia(1) saturate(2) hue-rotate(15deg); }
      `}</style>
    </section>
  );
}

function Field({
  label,
  icon: Icon,
  children,
}: {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <label className="mb-3 block text-xs uppercase tracking-widest text-gold-300/70">{label}</label>
      <Icon className="pointer-events-none absolute left-3.5 top-[2.15rem] h-4 w-4 text-gold-300/50" />
      {children}
    </div>
  );
}
