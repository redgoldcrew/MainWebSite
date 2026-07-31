import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ScrollText, ShieldCheck } from 'lucide-react';
import indruLogo from '../../assets/Indrulogo.png';

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
    <div className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_left,_rgba(196,28,28,0.22),_transparent_35%),linear-gradient(135deg,_#070d1a_0%,_#0d1a2e_100%)] text-slate-100">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-navy-darkest/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link to="/indru" className="flex items-center gap-3 text-lg font-semibold uppercase tracking-[0.25em] text-white">
            <img src={indruLogo} alt="Indru logo" className="h-10 w-10 rounded-2xl object-contain bg-white/10 p-1 ring-1 ring-white/10" />
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

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col px-6 py-8 lg:px-8 lg:py-12 pb-16">
        <section className="mb-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur">
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <span className="rounded-full border border-gold-primary/40 bg-gold-primary/10 px-3 py-1 text-gold-primary">Calm planner app</span>
            <span className="rounded-full border border-red-primary/40 bg-red-primary/10 px-3 py-1 text-red-200">Built for focus</span>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <img src={indruLogo} alt="Indru logo" className="h-16 w-16 rounded-[1.25rem] border border-white/10 bg-white/10 object-contain p-2 shadow-lg shadow-black/20" />
            <div>
              <h1 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h1>
              <p className="mt-2 max-w-2xl text-base leading-7 text-slate-300">{description}</p>
            </div>
          </div>
        </section>

        {children}
      </main>

      <footer className="border-t border-white/10 bg-navy-darkest/70 px-6 py-8 text-sm text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img src={indruLogo} alt="Indru logo" className="h-9 w-9 rounded-2xl object-contain bg-white/10 p-1 ring-1 ring-white/10" />
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
