import { useEffect } from 'react';
import { ScrollText, Sparkles, AlertTriangle } from 'lucide-react';
import IndruLayout from '../components/indru/IndruLayout';

const terms = [
  {
    title: 'Use of the app',
    description: 'Indru is provided for personal planning and productivity purposes. You may use the app to manage your tasks, routines, reminders, and progress.',
  },
  {
    title: 'Your responsibilities',
    description: 'You are responsible for the accuracy of the information you add, the security of your account, and the appropriateness of your use of the app.',
  },
  {
    title: 'Updates and changes',
    description: 'We may update the app features or these terms over time to improve performance, add functionality, or respond to legal or technical changes.',
  },
];

export default function IndruTermsPage() {
  useEffect(() => {
    document.title = 'Indru — Terms of Service';
  }, []);

  return (
    <IndruLayout
      title="Terms of Service"
      description="These terms outline how you can use Indru and what to expect from the service."
    >
      <section className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur">
        <div className="flex items-center gap-3 text-gold-primary">
          <ScrollText className="h-6 w-6" />
          <p className="text-sm font-semibold uppercase tracking-[0.3em]">Service terms</p>
        </div>

        <p className="mt-5 text-lg leading-8 text-slate-300">
          By using Indru, you agree to these terms of service. Please read them carefully before planning your day with the app.
        </p>

        <div className="mt-8 space-y-4">
          {terms.map((term) => (
            <div key={term.title} className="rounded-[1.5rem] border border-white/10 bg-navy-darkest/70 p-6">
              <h3 className="text-xl font-semibold text-white">{term.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">{term.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[1.5rem] border border-gold-primary/20 bg-gold-primary/10 p-6">
          <div className="flex items-center gap-3 text-gold-primary">
            <AlertTriangle className="h-5 w-5" />
            <p className="font-semibold text-white">Not legal advice</p>
          </div>
          <p className="mt-2 text-sm leading-7 text-slate-200">
            These terms are a general overview for the app experience and may be updated to match your region, app store requirements, or product changes.
          </p>
        </div>

        <div className="mt-8 flex items-center gap-2 text-sm text-slate-400">
          <Sparkles className="h-4 w-4 text-gold-primary" />
          <span>Thanks for using Indru and building calmer routines with us.</span>
        </div>
      </section>
    </IndruLayout>
  );
}
