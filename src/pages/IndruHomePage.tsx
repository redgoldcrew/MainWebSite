import { useEffect } from 'react';
import { BellRing, CalendarDays, CheckCircle2, Sparkles, TrendingUp, CircleCheckBig } from 'lucide-react';
import { Link } from 'react-router-dom';
import IndruLayout from '../components/indru/IndruLayout';

const features = [
  {
    title: 'Daily, Weekly & Monthly Planner',
    description: 'Plan your day, week, and month with clarity. Stay organized with a simple, focused view of what matters most.',
    icon: CalendarDays,
  },
  {
    title: 'Smart Task Management',
    description: 'Create tasks, set priorities, and track progress effortlessly. Stay on top of your work with clear, actionable steps.',
    icon: CheckCircle2,
  },
  {
    title: 'Habit & Routine Tracking',
    description: 'Build healthy habits and consistent routines. Track your streaks and stay motivated every day.',
    icon: TrendingUp,
  },
  {
    title: 'Progress Tracking & Insights',
    description: 'See what you’ve completed and what’s next. Track your growth with streaks, insights, and weekly or monthly progress views.',
    icon: CircleCheckBig,
  },
  {
    title: 'Reminders & Notifications',
    description: 'Get timely reminders for important tasks and upcoming plans. Stay updated with alerts throughout the day.',
    icon: BellRing,
  },
  {
    title: 'Clean, Calm Design',
    description: 'A simple, distraction-free interface that helps you focus on what matters.',
    icon: Sparkles,
  },
];

const steps = [
  'Plan your day – Add tasks, set priorities, and organize your schedule.',
  'Build routines – Create daily, weekly, and monthly habits that stick.',
  'Track progress – See your completed tasks, streaks, and growth over time.',
  'Stay on time – Get smart reminders and never miss what matters.',
];

const faqs = [
  {
    question: 'What is Indru?',
    answer: 'Indru is a simple daily planner app that helps you organize tasks, build routines, and track your progress.',
  },
  {
    question: 'Is Indru free to use?',
    answer: 'Yes, Indru is free to download and use. Optional premium features may be added in the future.',
  },
  {
    question: 'Which platforms is Indru available on?',
    answer: 'Indru is available on Android. iOS and web versions are coming soon.',
  },
  {
    question: 'Can I use Indru offline?',
    answer: 'Yes, you can use Indru offline. Your data is stored locally on your device.',
  },
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
      <section className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-primary/40 bg-gold-primary/10 px-3 py-1 text-sm text-gold-primary">
            <Sparkles className="h-4 w-4" />
            Plan your day. Live clearly.
          </div>
          <h2 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Plan Your Day. Live Clearly.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Indru is a simple daily planner that helps you organize tasks, build routines, and track your progress — all in one calm, focused app.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#"
              className="rounded-full bg-gradient-to-r from-red-primary to-gold-primary px-5 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Get the App
            </a>
            <a
              href="#"
              className="rounded-full border border-white/15 bg-white/10 px-5 py-3 font-semibold text-slate-100 transition hover:bg-white/20"
            >
              Download on Google Play
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/15 to-white/5 p-4 shadow-2xl shadow-black/20">
          <div className="rounded-[1.5rem] border border-white/10 bg-navy-darkest/90 p-4">
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <div>
                <p className="text-sm text-slate-400">Today</p>
                <p className="text-lg font-semibold text-white">4 tasks ahead</p>
              </div>
              <div className="rounded-full bg-gold-primary/20 p-2 text-gold-primary">
                <CheckCircle2 className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-4 space-y-3">
              {['Morning routine', 'Client follow-up', 'Workout reset', 'Weekly review'].map((task, index) => (
                <div key={task} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className={`h-2.5 w-2.5 rounded-full ${index === 0 ? 'bg-gold-primary' : 'bg-red-primary'}`} />
                    <span className="text-sm text-slate-200">{task}</span>
                  </div>
                  <span className="text-xs uppercase tracking-[0.25em] text-slate-400">{index === 1 ? 'High' : 'Medium'}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-primary">Why Indru?</p>
          <h3 className="mt-3 text-3xl font-semibold text-white">In a world of complex tools and endless features, Indru keeps things simple.</h3>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            It helps you focus on what matters most: today. With a clean design, smart task management, and gentle reminders, Indru makes planning your day feel effortless.
          </p>
        </div>
      </section>

      <section className="mt-24 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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

      <section className="mt-24 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-8 shadow-2xl shadow-black/20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-primary">How It Works</p>
          <div className="mt-6 space-y-4">
            {steps.map((step, index) => (
              <div key={step} className="flex gap-4 rounded-2xl border border-white/10 bg-navy-darkest/70 p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-red-primary to-gold-primary text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <p className="text-sm leading-7 text-slate-200">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-24 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-primary">Social Proof</p>
          <h3 className="mt-3 text-3xl font-semibold text-white">Trusted by people who want to plan better.</h3>
          <div className="mt-6 space-y-4">
            <blockquote className="rounded-2xl border border-white/10 bg-navy-darkest/70 p-5 text-slate-200">
              “Indru helps me stay organized and focused every day. It’s simple, clean, and just works.”
              <span className="mt-3 block text-sm text-gold-primary">— Early User</span>
            </blockquote>
            <blockquote className="rounded-2xl border border-white/10 bg-navy-darkest/70 p-5 text-slate-200">
              “I love how easy it is to plan my day and track my habits. Indru makes planning feel effortless.”
              <span className="mt-3 block text-sm text-gold-primary">— Beta Tester</span>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="mt-24 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-8 shadow-2xl shadow-black/20 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-primary">Call to Action</p>
        <h3 className="mt-3 text-3xl font-semibold text-white">Start planning your day with clarity.</h3>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#" className="rounded-full bg-gradient-to-r from-red-primary to-gold-primary px-5 py-3 font-semibold text-white transition hover:opacity-90">
            Get the App
          </a>
          <a href="#" className="rounded-full border border-white/15 bg-white/10 px-5 py-3 font-semibold text-slate-100 transition hover:bg-white/20">
            Download on Google Play
          </a>
        </div>
      </section>

      <section className="mt-24 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-primary">FAQ</p>
          <div className="mt-6 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-white/10 bg-navy-darkest/70 p-5">
                <h4 className="text-lg font-semibold text-white">{faq.question}</h4>
                <p className="mt-2 text-sm leading-7 text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="mt-24 rounded-[2rem] border border-white/10 bg-navy-darkest/80 px-8 py-8 text-center shadow-2xl shadow-black/20">
        <h3 className="text-2xl font-semibold text-white">Indru – Plan Your Day. Live Clearly.</h3>
        <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-slate-300">
          <Link to="/indru/privacy" className="transition hover:text-white">Privacy Policy</Link>
          <Link to="/indru/terms" className="transition hover:text-white">Terms of Use</Link>
          <a href="#" className="transition hover:text-white">Contact</a>
        </div>
      </footer>
    </IndruLayout>
  );
}
