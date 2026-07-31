import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CalendarCheck2, ScrollText, ShieldCheck } from 'lucide-react';

type IndruLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
};

const links = [
  { label: 'Home', to: '/indru' },
  { label: 'Privacy', to: '/indru/privacy' },
  { label: 'Terms', to: '/indru/terms' },
];

export default function IndruLayout({ title, description, children }: IndruLayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(196,28,28,0.22),_transparent_35%),linear-gradient(135deg,_#070d1a_0%,_#0d1a2e_100%)] text-slate-100">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-navy-darkest/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link to="/indru" className="flex items-center gap-3 text-lg font-semibold uppercase tracking-[0.25em] text-white">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-red-primary to-gold-primary shadow-lg shadow-red-primary/30">
              <CalendarCheck2 className="h-5 w-5" />
            </div>
            Indru
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            {links.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`transition ${isActive ? 'text-gold-primary' : 'hover:text-white'}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col px-6 py-8 lg:px-8 lg:py-12">
        <section className="mb-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur">
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <span className="rounded-full border border-gold-primary/40 bg-gold-primary/10 px-3 py-1 text-gold-primary">Calm planner app</span>
            <span className="rounded-full border border-red-primary/40 bg-red-primary/10 px-3 py-1 text-red-200">Built for focus</span>
          </div>
          <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">{title}</h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">{description}</p>
        </section>

        {children}
      </main>

      <footer className="border-t border-white/10 bg-navy-darkest/70 px-6 py-8 text-sm text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-red-primary to-gold-primary">
              <CalendarCheck2 className="h-4 w-4" />
            </div>
            <span className="font-semibold uppercase tracking-[0.25em] text-slate-200">Indru</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/indru/privacy" className="flex items-center gap-2 hover:text-white">
              <ShieldCheck className="h-4 w-4" /> Privacy
            </Link>
            <Link to="/indru/terms" className="flex items-center gap-2 hover:text-white">
              <ScrollText className="h-4 w-4" /> Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
