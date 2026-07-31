import { useEffect } from 'react';
import { ArrowRight, BellRing, CalendarDays, CheckCircle2, Sparkles, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import IndruLayout from '../components/indru/IndruLayout';

const features = [
  {
    title: 'Plan your day',
    description: 'Organize today, tomorrow, and the week ahead in one calm view.',
    icon: CalendarDays,
  },
  {
    title: 'Never miss a beat',
    description: 'Set reminders that keep important plans visible and on time.',
    icon: BellRing,
  },
  {
    title: 'Build momentum',
    description: 'Track habits, streaks, and progress with simple weekly insights.',
    icon: TrendingUp,
  },
];

const checklist = [
  'Create tasks in seconds',
  'Prioritize with one tap',
  'Review progress by week or month',
  'Stay calm with a distraction-free flow',
];

export default function IndruHomePage() {
  useEffect(() => {
    document.title = 'Indru — Calm daily planner';
  }, []);

  return (
    <IndruLayout
      title="Indru"
      description="A simple, calm daily planner designed to help people organize their day, build routines, and stay on track."
    >
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-primary/40 bg-gold-primary/10 px-3 py-1 text-sm text-gold-primary">
            <Sparkles className="h-4 w-4" />
            Focus on what matters most: today
          </div>
          <h2 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl">
            A planner that helps you feel organized, focused, and consistent.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Indru makes it easy to plan your day, set priorities, track habits, and keep your routine moving forward without clutter.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/indru"
              className="rounded-full bg-gradient-to-r from-red-primary to-gold-primary px-5 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Start planning
            </Link>
            <Link
              to="/indru/privacy"
              className="rounded-full border border-white/15 bg-white/10 px-5 py-3 font-semibold text-slate-100 transition hover:bg-white/20"
            >
              Read privacy policy
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { value: 'Daily', label: 'focus view' },
              { value: 'Smart', label: 'reminders' },
              { value: 'Calm', label: 'routine flow' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/15 to-white/5 p-4 shadow-2xl shadow-black/20">
            <div className="rounded-[1.5rem] border border-white/10 bg-navy-darkest/90 p-4">
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <div>
                  <p className="text-sm text-slate-400">Today</p>
                  <p className="text-lg font-semibold text-white">3 priorities</p>
                </div>
                <div className="rounded-full bg-gold-primary/20 p-2 text-gold-primary">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-4 space-y-3">
                {['Morning routine', 'Client follow-up', 'Workout reset'].map((task, index) => (
                  <div key={task} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className={`h-2.5 w-2.5 rounded-full ${index === 0 ? 'bg-gold-primary' : 'bg-red-primary'}`} />
                      <span className="text-sm text-slate-200">{task}</span>
                    </div>
                    <span className="text-xs uppercase tracking-[0.25em] text-slate-400">{index === 1 ? 'High' : 'Medium'}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-red-primary/20 bg-red-primary/10 p-4">
                <p className="text-sm font-medium text-red-200">Reminder set</p>
                <p className="mt-1 text-sm text-slate-300">Your evening planning block starts in 30 minutes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div key={feature.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-red-primary/20 to-gold-primary/20 text-gold-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">{feature.description}</p>
            </div>
          );
        })}
      </section>

      <section className="mt-16 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-8 shadow-2xl shadow-black/20">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-primary">Built for everyday life</p>
            <h3 className="mt-3 text-3xl font-semibold text-white">A simple experience, designed to feel easy from the first tap.</h3>
            <p className="mt-3 text-lg leading-8 text-slate-300">
              Whether you are building a routine, planning work, or keeping your home life in order, Indru gives you a calm place to focus.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {checklist.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-navy-darkest/80 p-4">
                <p className="text-sm leading-7 text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </IndruLayout>
  );
}
