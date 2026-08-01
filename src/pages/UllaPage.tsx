import { useEffect } from 'react';
import { CalendarDays, CheckCircle2, Compass, ReceiptIndianRupee, UsersRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import ullaLogo from '../assets/Ullalogo.png';

const features = [
  { title: 'One shared trip hub', text: 'Keep the destination, dates, plans, and important details in one place everyone can reach.', icon: Compass },
  { title: 'Split expenses clearly', text: 'Add group expenses, see who paid, and keep shared costs easy to understand.', icon: ReceiptIndianRupee },
  { title: 'Tasks that move the trip forward', text: 'Assign packing, bookings, and other trip tasks so nothing gets missed.', icon: CheckCircle2 },
  { title: 'Every traveller included', text: 'Manage participants and make sure the whole group stays on the same page.', icon: UsersRound },
];

const steps = [
  ['Create a trip', 'Add your destination, dates, budget, and the details that set the plan in motion.'],
  ['Invite your group', 'Share a simple join code so friends can enter the trip hub together.'],
  ['Plan and travel together', 'Organize tasks, expenses, and participants from one shared space.'],
];

export default function UllaPage() {
  useEffect(() => {
    document.title = 'Ulla — Group trip planner by RedGoldCrew';
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#07111f] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(196,28,28,.24),transparent_32%),radial-gradient(circle_at_90%_22%,rgba(212,160,23,.18),transparent_27%)]" />
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#07111f]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link to="/" className="flex items-center gap-3 font-rajdhani text-sm font-bold uppercase tracking-[.2em] text-slate-200 hover:text-white">
            <span className="text-gold-primary">←</span> RedGoldCrew
          </Link>
          <Link to="/ulla" className="flex items-center gap-2 font-rajdhani text-lg font-bold uppercase tracking-[.14em]">
            <img src={ullaLogo} alt="Ulla logo" className="h-10 w-10 rounded-xl border border-white/10 bg-white/10 object-contain p-1" />
            Ulla
          </Link>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-16 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:px-8 lg:pt-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-primary/40 bg-gold-primary/10 px-4 py-2 font-rajdhani text-sm font-bold uppercase tracking-wider text-gold-primary">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" /> Android group trip planner
            </div>
            <h1 className="mt-7 font-bebas text-6xl leading-[.88] sm:text-8xl">
              YOUR TRIP.<br /><span className="bg-gradient-to-r from-red-primary to-gold-primary bg-clip-text text-transparent">TOGETHER.</span>
            </h1>
            <p className="mt-6 max-w-xl font-nunito text-lg leading-8 text-slate-300">
              Ulla brings your group’s plans, expenses, tasks, and travellers into one shared trip hub. Less chasing messages. More enjoying the journey.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#features" className="rounded bg-red-primary px-7 py-3.5 font-rajdhani font-bold uppercase tracking-wider shadow-[0_0_24px_rgba(196,28,28,.45)] transition hover:bg-red-500">Explore features</a>
              <a href="#how-it-works" className="rounded border border-gold-primary px-7 py-3.5 font-rajdhani font-bold uppercase tracking-wider text-gold-primary transition hover:bg-gold-primary hover:text-[#07111f]">How it works</a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute inset-8 rounded-full bg-red-primary/25 blur-3xl" />
            <div className="relative rounded-[2.6rem] border-4 border-slate-700 bg-[#111d2d] p-2 shadow-2xl shadow-black/60">
              <div className="overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#1c3048] to-[#0c1625] p-5">
                <div className="mx-auto mb-6 h-5 w-24 rounded-b-xl bg-[#111d2d]" />
                <div className="flex items-center gap-3"><img src={ullaLogo} alt="" className="h-10 w-10 rounded-xl object-contain" /><div><p className="font-rajdhani text-xs uppercase tracking-widest text-slate-400">Your next trip</p><p className="font-rajdhani text-2xl font-bold">Munnar Escape</p></div></div>
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/10 p-4"><p className="font-rajdhani text-sm text-gold-primary">12 DAYS TO GO</p><p className="mt-1 font-nunito text-sm text-slate-300">4 friends · 8–12 August</p></div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/8 p-3"><ReceiptIndianRupee className="h-5 text-gold-primary" /><p className="mt-2 font-rajdhani text-sm font-bold">Expenses</p><p className="text-xs text-slate-400">All settled</p></div>
                  <div className="rounded-2xl bg-white/8 p-3"><CheckCircle2 className="h-5 text-green-400" /><p className="mt-2 font-rajdhani text-sm font-bold">Tasks</p><p className="text-xs text-slate-400">6 of 8 done</p></div>
                </div>
                <div className="mt-4 flex items-center gap-2 rounded-2xl bg-red-primary/15 p-3 text-sm text-slate-200"><UsersRound className="h-5 text-red-300" /> Everyone is in the loop.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0b1727]/80 py-8">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 text-center sm:grid-cols-3 lg:px-8">
            {[['One shared space', 'For every part of the trip'], ['Built for groups', 'Plans that stay visible'], ['Android app', 'Made for travel together']].map(([title, text]) => <div key={title}><p className="font-rajdhani text-xl font-bold uppercase text-gold-primary">{title}</p><p className="mt-1 font-nunito text-sm text-slate-400">{text}</p></div>)}
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="font-rajdhani font-bold uppercase tracking-[.22em] text-red-primary">Everything your group needs</p>
          <h2 className="mt-3 font-bebas text-5xl leading-none sm:text-6xl">PLAN LESS CHAOS.<br /><span className="text-gold-primary">TRAVEL MORE.</span></h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {features.map(({ title, text, icon: Icon }) => <article key={title} className="rounded-2xl border border-white/10 bg-white/5 p-7 transition hover:border-gold-primary/60 hover:bg-white/[.07]"><Icon className="h-9 w-9 text-gold-primary" /><h3 className="mt-5 font-rajdhani text-2xl font-bold uppercase">{title}</h3><p className="mt-3 font-nunito leading-7 text-slate-300">{text}</p></article>)}
          </div>
        </section>

        <section id="how-it-works" className="border-y border-white/10 bg-[#0b1727]/70 px-6 py-24 lg:px-8"><div className="mx-auto max-w-7xl"><p className="font-rajdhani font-bold uppercase tracking-[.22em] text-red-primary">Simple from the start</p><h2 className="mt-3 font-bebas text-5xl sm:text-6xl">HOW ULLA WORKS</h2><div className="mt-12 grid gap-6 md:grid-cols-3">{steps.map(([title, text], index) => <article key={title} className="rounded-2xl border border-white/10 bg-[#07111f] p-7"><span className="font-bebas text-6xl text-red-primary/50">0{index + 1}</span><h3 className="mt-4 font-rajdhani text-2xl font-bold uppercase text-gold-primary">{title}</h3><p className="mt-3 font-nunito leading-7 text-slate-300">{text}</p></article>)}</div></div></section>

        <section className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-8"><CalendarDays className="mx-auto h-10 w-10 text-gold-primary" /><h2 className="mt-5 font-bebas text-5xl leading-none sm:text-6xl">YOUR NEXT TRIP<br /><span className="text-gold-primary">STARTS HERE.</span></h2><p className="mx-auto mt-5 max-w-2xl font-nunito text-lg leading-8 text-slate-300">From the first plan to the final split, Ulla helps everyone travel together.</p><div className="mt-8 flex flex-wrap justify-center gap-4"><Link to="/ulla/privacy" className="rounded border border-gold-primary px-7 py-3.5 font-rajdhani font-bold uppercase tracking-wider text-gold-primary transition hover:bg-gold-primary hover:text-[#07111f]">Privacy policy</Link><Link to="/ulla/terms" className="rounded border border-white/20 px-7 py-3.5 font-rajdhani font-bold uppercase tracking-wider text-white transition hover:border-white">Terms of use</Link><Link to="/ulla/account-deletion" className="rounded border border-red-primary px-7 py-3.5 font-rajdhani font-bold uppercase tracking-wider text-red-200 transition hover:bg-red-primary hover:text-white">Delete account</Link></div></section>
      </main>
      <footer className="relative z-10 border-t border-white/10 px-6 py-8 text-center font-nunito text-sm text-slate-400">Ulla by <Link to="/" className="text-gold-primary hover:text-white">RedGoldCrew</Link> · Group trips, made simpler.</footer>
    </div>
  );
}
