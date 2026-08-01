import { useEffect } from 'react';
import { FileText, ShieldCheck } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const productDetails = {
  aayiram: {
    name: 'Aayiram',
    description: 'Smart SMS finance tracker for Android.',
    privacy: [
      ['Information Aayiram processes', 'Aayiram processes bank transaction SMS messages on your device to identify transactions and build your personal finance ledger. It does not read unrelated personal messages.'],
      ['Where your data stays', 'Your transaction data and settings are stored locally on your device. Optional backups are initiated by you; they are not made automatically.'],
      ['Permissions', 'SMS access is used only for transaction detection. You can revoke app permissions in Android settings, though this may limit app functionality.'],
    ],
  },
  ulla: {
    name: 'Ulla',
    description: 'Shared group trip planner for Android.',
    privacy: [
      ['Information Ulla uses', 'Ulla uses account and profile information, trip details, group membership, expenses, and tasks that you create or share to provide the shared trip experience.'],
      ['How trip data is shared', 'Trip details are available to the members of that trip. Do not add sensitive information you would not want fellow trip participants to see.'],
      ['Service providers', 'Ulla uses Firebase services for sign-in, shared trip data, and any files you choose to upload. These services process data to provide the app.'],
    ],
  },
  indru: {
    name: 'Indru',
    description: 'Calm daily planner for Android.',
    privacy: [
      ['Information Indru uses', 'Indru uses the tasks, routines, reminders, and planning details you create to provide the app’s planning and progress features.'],
      ['Where your data stays', 'Your planning data is stored on your device unless a feature clearly tells you otherwise.'],
      ['Permissions and notifications', 'Indru may request notification permission so it can send the reminders you choose to enable. You can change this permission at any time in Android settings.'],
    ],
  },
} as const;

type ProductLegalPageProps = {
  product?: keyof typeof productDetails;
};

export default function ProductLegalPage({ product: fixedProduct }: ProductLegalPageProps) {
  const { product: routeProduct, document: documentType = 'privacy' } = useParams();
  const product = fixedProduct ?? (routeProduct as keyof typeof productDetails) ?? 'aayiram';
  const details = productDetails[product] ?? productDetails.aayiram;
  const isPrivacy = documentType === 'privacy';
  const title = `${details.name} — ${isPrivacy ? 'Privacy Policy' : 'Terms of Use'}`;

  useEffect(() => { window.scrollTo(0, 0); document.title = title; }, [title]);

  const sections = isPrivacy
    ? [
      ...details.privacy,
      ['How we use information', `We use information only to operate and improve ${details.name}, provide its core features, maintain security, and respond to support requests.`],
      ['Your choices', 'You can update or delete information within the app where available, manage Android permissions, and stop using the app at any time.'],
      ['Policy updates', 'We may update this policy when the app or applicable requirements change. The latest version will be published on this page.'],
    ]
    : [
      ['Using the app', `${details.name} is provided for personal use. You are responsible for the information you add, the security of your device and account, and your use of the app.`],
      ['Your content and shared information', 'You retain responsibility for the data you add. When you invite others or join shared spaces, you understand that relevant information may be visible to the other participants.'],
      ['Availability and changes', 'We may update, suspend, or discontinue features as we improve the service. We will make reasonable efforts to keep the app available, but do not guarantee uninterrupted operation.'],
      ['No professional advice', details.name === 'Aayiram' ? 'Aayiram provides personal finance tracking tools, not financial, tax, or investment advice. Verify important information independently.' : 'The app is an organizational tool and does not replace professional advice or your own judgment.'],
      ['Updates to these terms', 'We may revise these terms as the app changes. Continuing to use the app after an update means you accept the revised terms.'],
    ];

  return (
    <div className="min-h-screen bg-[#07111f] text-white"><div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(196,28,28,.24),transparent_32%),radial-gradient(circle_at_90%_22%,rgba(212,160,23,.18),transparent_27%)]" />
      <header className="relative z-10 border-b border-white/10 bg-[#07111f]/85 backdrop-blur-xl"><div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"><Link to={`/${product}`} className="font-rajdhani text-sm font-bold uppercase tracking-[.2em] text-slate-200 hover:text-white"><span className="text-gold-primary">←</span> {details.name}</Link><Link to="/" className="font-rajdhani text-sm font-bold uppercase tracking-[.16em] text-gold-primary hover:text-white">RedGoldCrew</Link></div></header>
      <main className="relative z-10 mx-auto max-w-5xl px-6 py-16 lg:py-24"><div className="rounded-2xl border border-gold-primary/30 bg-[#0b1727]/90 p-8 shadow-2xl shadow-black/30 sm:p-12"><div className="flex items-center gap-3 text-gold-primary">{isPrivacy ? <ShieldCheck className="h-7 w-7" /> : <FileText className="h-7 w-7" />}<span className="font-rajdhani text-sm font-bold uppercase tracking-[.2em]">{details.name} legal</span></div><h1 className="mt-6 font-bebas text-5xl leading-none sm:text-6xl">{isPrivacy ? 'PRIVACY POLICY' : 'TERMS OF USE'}</h1><p className="mt-4 font-nunito text-lg text-slate-300">{details.description}</p><p className="mt-3 font-nunito text-sm text-slate-500">Last updated: August 1, 2026</p><div className="mt-10 space-y-8">{sections.map(([heading, body]) => <section key={heading}><h2 className="font-rajdhani text-2xl font-bold uppercase text-gold-primary">{heading}</h2><p className="mt-3 font-nunito leading-8 text-slate-300">{body}</p></section>)}</div><div className="mt-12 flex flex-wrap gap-4 border-t border-white/10 pt-8"><Link to={`/${product}/privacy`} className={`font-rajdhani font-bold uppercase tracking-wider ${isPrivacy ? 'text-gold-primary' : 'text-slate-300 hover:text-white'}`}>Privacy Policy</Link><Link to={`/${product}/terms`} className={`font-rajdhani font-bold uppercase tracking-wider ${!isPrivacy ? 'text-gold-primary' : 'text-slate-300 hover:text-white'}`}>Terms of Use</Link></div></div></main>
    </div>
  );
}
