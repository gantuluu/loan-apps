import React, { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Page,
  Navbar,
  NavbarBackLink,
  Block,
  BlockTitle,
  Card,
  Button,
  List,
  ListItem,
  ListInput,
  Range,
  Radio,
  Badge,
  Progressbar,
  Tabbar,
  TabbarLink,
  ToolbarPane,
  Dialog,
  DialogButton,
  Sheet,
  Segmented,
  SegmentedButton,
} from 'konsta/react';

const money = (value) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value);

const navItems = [
  { key: 'home', label: 'Home', icon: '⌂', path: '/' },
  { key: 'loans', label: 'Loans', icon: '▣', path: '/loans' },
  { key: 'profile', label: 'Profile', icon: '●', path: '/profile' },
];

function AppHeader({ title = 'Loan App', notification = false }) {
  return (
    <Navbar
      title={title}
      right={notification ? <Button clear className="!min-w-0">🔔</Button> : null}
    />
  );
}

function StatusBadge({ children, tone = 'primary' }) {
  const colors = {
    primary: { bg: 'bg-blue-600', text: 'text-white' },
    success: { bg: 'bg-emerald-600', text: 'text-white' },
    warning: { bg: 'bg-amber-500', text: 'text-white' },
    danger: { bg: 'bg-red-600', text: 'text-white' },
    neutral: { bg: 'bg-slate-500', text: 'text-white' },
  };
  return <Badge colors={colors[tone]}>{children}</Badge>;
}

function LoanOfferCard({ amount = 5000000, tenor = 6, onApply }) {
  return (
    <Card className="loan-card" header={<div className="flex items-center justify-between"><strong>Flexible Cash Loan</strong><StatusBadge>New</StatusBadge></div>}>
      <div className="space-y-3">
        <div>
          <div className="text-xs text-slate-500">Up to</div>
          <div className="text-2xl font-bold">{money(amount)}</div>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-xl bg-slate-50 p-3"><div className="text-xs text-slate-500">Tenor</div><strong>{tenor} months</strong></div>
          <div className="rounded-xl bg-slate-50 p-3"><div className="text-xs text-slate-500">Starting rate</div><strong>1.2% / month</strong></div>
        </div>
        <Button large rounded onClick={onApply}>Apply now</Button>
      </div>
    </Card>
  );
}

function ActiveLoanCard({ onDetail }) {
  return (
    <Card className="loan-card" header={<div className="flex items-center justify-between"><strong>Active Loan</strong><StatusBadge tone="success">Active</StatusBadge></div>}>
      <div className="space-y-4">
        <div className="flex items-end justify-between">
          <div><div className="text-xs text-slate-500">Outstanding</div><div className="text-2xl font-bold">Rp 4.200.000</div></div>
          <div className="text-right"><div className="text-xs text-slate-500">Next payment</div><strong>Rp 850.000</strong></div>
        </div>
        <Progressbar progress={58} />
        <div className="flex justify-between text-xs text-slate-500"><span>58% paid</span><span>Due 20 Oct 2026</span></div>
        <Button large rounded outline onClick={onDetail}>View loan</Button>
      </div>
    </Card>
  );
}

function BottomNav({ active }) {
  const navigate = useNavigate();
  return (
    <Tabbar labels icons className="loan-tabbar left-0 bottom-0 fixed">
      <ToolbarPane>
        {navItems.map((item) => (
          <TabbarLink key={item.key} active={active === item.key} onClick={() => navigate(item.path)} icon={<span className="text-xl">{item.icon}</span>} label={item.label} />
        ))}
      </ToolbarPane>
    </Tabbar>
  );
}

function HomePage() {
  const navigate = useNavigate();
  return (
    <Page className="loan-page">
      <AppHeader title="Good afternoon" notification />
      <main className="loan-content">
        <Block className="!mb-2">
          <p className="m-0 text-sm text-slate-500">Welcome back, Alex</p>
          <h1 className="mt-1 text-2xl font-bold">Your finances at a glance</h1>
        </Block>
        <BlockTitle>Financial summary</BlockTitle>
        <Block className="!pt-0">
          <div className="grid grid-cols-2 gap-3">
            <Card className="summary-card"><div className="text-xs text-slate-500">Available limit</div><div className="mt-1 text-xl font-bold">Rp 8.000.000</div></Card>
            <Card className="summary-card"><div className="text-xs text-slate-500">Outstanding</div><div className="mt-1 text-xl font-bold">Rp 4.200.000</div></Card>
          </div>
        </Block>
        <BlockTitle>Active loan</BlockTitle>
        <Block className="!pt-0"><ActiveLoanCard onDetail={() => navigate('/loan/active')} /></Block>
        <BlockTitle>Quick actions</BlockTitle>
        <Block className="!pt-0">
          <div className="grid grid-cols-3 gap-2">
            <Button rounded outline onClick={() => navigate('/apply')}>Apply</Button>
            <Button rounded outline onClick={() => navigate('/repayment')}>Repay</Button>
            <Button rounded outline onClick={() => navigate('/loans')}>History</Button>
          </div>
        </Block>
        <BlockTitle>Loan offers</BlockTitle>
        <Block className="!pt-0"><LoanOfferCard onApply={() => navigate('/apply')} /></Block>
        <BlockTitle>Recent transactions</BlockTitle>
        <List strong inset className="!mb-8">
          <ListItem title="Loan disbursement" subtitle="02 Oct 2026" after={<strong>+Rp 5.000.000</strong>} />
          <ListItem title="Repayment" subtitle="20 Sep 2026" after={<strong>-Rp 850.000</strong>} />
        </List>
      </main>
      <BottomNav active="home" />
    </Page>
  );
}

function LoansPage() {
  const navigate = useNavigate();
  return (
    <Page className="loan-page">
      <AppHeader title="Loans" />
      <main className="loan-content">
        <BlockTitle>Loan overview</BlockTitle>
        <Block className="!pt-0"><Card><div className="flex items-center justify-between"><div><div className="text-xs text-slate-500">Available limit</div><div className="text-2xl font-bold">Rp 8.000.000</div></div><StatusBadge tone="success">Eligible</StatusBadge></div></Card></Block>
        <BlockTitle>Available offers</BlockTitle>
        <Block className="!pt-0"><LoanOfferCard amount={8000000} tenor={12} onApply={() => navigate('/apply')} /></Block>
        <BlockTitle>Active loans</BlockTitle>
        <List strong inset>
          <ListItem title="Flexible Cash Loan" subtitle="Rp 5.000.000 · 6 months" after={<StatusBadge tone="success">Active</StatusBadge>} link onClick={() => navigate('/loan/active')} />
        </List>
        <BlockTitle>Loan history</BlockTitle>
        <List strong inset className="!mb-8">
          <ListItem title="Personal Loan" subtitle="Completed · 2026" after={<StatusBadge tone="success">Paid</StatusBadge>} />
          <ListItem title="Emergency Loan" subtitle="Completed · 2025" after={<StatusBadge tone="success">Paid</StatusBadge>} />
        </List>
      </main>
      <BottomNav active="loans" />
    </Page>
  );
}

function ProfilePage() {
  const navigate = useNavigate();
  const [dark, setDark] = useState(false);
  return (
    <Page className="loan-page">
      <AppHeader title="Profile" />
      <main className="loan-content">
        <Block className="!mb-2">
          <Card className="profile-card">
            <div className="flex items-center gap-4"><div className="avatar">A</div><div><h2 className="m-0 text-lg font-bold">Alex Morgan</h2><p className="m-0 text-sm text-slate-500">+62 812-3456-7890</p><StatusBadge tone="success">Verified</StatusBadge></div></div>
          </Card>
        </Block>
        <BlockTitle>Account</BlockTitle>
        <List strong inset>
          <ListItem title="Personal information" link />
          <ListItem title="Phone number" after="Verified" />
          <ListItem title="Email" after="Verified" />
        </List>
        <BlockTitle>Verification & banking</BlockTitle>
        <List strong inset>
          <ListItem title="KYC verification" after={<StatusBadge tone="success">Verified</StatusBadge>} />
          <ListItem title="Bank account" after="BCA •••• 1288" />
        </List>
        <BlockTitle>Security & settings</BlockTitle>
        <List strong inset className="!mb-8">
          <ListItem title="Change password" link />
          <ListItem title="Dark theme" after={<input aria-label="Dark theme" type="checkbox" checked={dark} onChange={(e) => setDark(e.target.checked)} />} />
          <ListItem title="Logout" className="text-red-600" onClick={() => navigate('/')} />
        </List>
      </main>
      <BottomNav active="profile" />
    </Page>
  );
}

function Standalone({ title, children, onBack }) {
  return <Page className="loan-page standalone-page"><Navbar left={<NavbarBackLink text="Back" showText="auto" onClick={onBack} />} title={title} /><main className="loan-content standalone-content">{children}</main></Page>;
}

function LoanApplicationPage() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(5000000);
  const [tenor, setTenor] = useState(6);
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const monthly = useMemo(() => Math.round((amount * 1.012) / tenor), [amount, tenor]);
  const next = () => step < 5 ? setStep(step + 1) : setSubmitted(true);
  if (submitted) return <Standalone title="Application submitted" onBack={() => navigate('/')}><Block strong inset className="text-center"><div className="success-icon">✓</div><h2 className="text-xl font-bold">Application received</h2><p className="text-slate-500">Your application <strong>LN-20261017</strong> is being reviewed.</p><Button large rounded onClick={() => navigate('/status')}>View status</Button></Block></Standalone>;
  return (
    <Standalone title="Apply for a loan" onBack={() => navigate(-1)}>
      <Block className="!pt-0"><div className="flex items-center justify-between text-xs text-slate-500"><span>Step {step} of 5</span><span>{step * 20}%</span></div><Progressbar progress={step * 20} className="mt-2" /></Block>
      {step === 1 && <><BlockTitle>Loan amount</BlockTitle><Block strong inset><div className="text-center"><div className="text-sm text-slate-500">You request</div><div className="my-2 text-3xl font-bold">{money(amount)}</div><Range value={amount} min={1000000} max={8000000} step={500000} onChange={(e) => setAmount(Number(e.target.value))} /></div><div className="mt-4 grid grid-cols-2 gap-3"><div className="rounded-xl bg-slate-50 p-3 text-xs">Minimum<strong className="block text-base">Rp 1.000.000</strong></div><div className="rounded-xl bg-slate-50 p-3 text-xs">Maximum<strong className="block text-base">Rp 8.000.000</strong></div></div></Block></>}
      {step === 2 && <><BlockTitle>Choose tenor</BlockTitle><Block strong inset><Segmented strong rounded>{[3,6,9,12].map((v) => <SegmentedButton key={v} active={tenor === v} onClick={() => setTenor(v)}>{v}m</SegmentedButton>)}</Segmented><div className="mt-6 space-y-2"><div className="flex justify-between"><span>Amount</span><strong>{money(amount)}</strong></div><div className="flex justify-between"><span>Rate</span><strong>1.2% / month</strong></div><div className="flex justify-between"><span>Tenor</span><strong>{tenor} months</strong></div></div></Block></>}
      {step === 3 && <><BlockTitle>Loan simulation</BlockTitle><Card header="Estimated repayment"><div className="space-y-3"><div className="flex justify-between"><span>Principal</span><strong>{money(amount)}</strong></div><div className="flex justify-between"><span>Interest</span><strong>{money(Math.round(amount * 0.012 * tenor))}</strong></div><div className="flex justify-between"><span>Admin fee</span><strong>{money(25000)}</strong></div><div className="border-t pt-3 flex justify-between"><span>Monthly installment</span><strong className="text-lg">{money(monthly)}</strong></div></div></Card></>}
      {step === 4 && <><BlockTitle>Personal information</BlockTitle><List strong inset><ListInput label="Full name" floatingLabel value="Alex Morgan" readOnly /><ListInput label="Phone" floatingLabel type="tel" value="+62 812-3456-7890" readOnly /><ListInput label="Employment" floatingLabel value="Full-time employee" readOnly /><ListInput label="Monthly income" floatingLabel value="Rp 10.000.000" readOnly /></List><BlockTitle>Verification</BlockTitle><List strong inset><ListItem title="KYC verification" after={<StatusBadge tone="success">Verified</StatusBadge>} /><ListItem title="Bank account" after="BCA •••• 1288" /></List></>}
      {step === 5 && <><BlockTitle>Review application</BlockTitle><Card header="Application summary"><div className="space-y-3"><div className="flex justify-between"><span>Loan amount</span><strong>{money(amount)}</strong></div><div className="flex justify-between"><span>Tenor</span><strong>{tenor} months</strong></div><div className="flex justify-between"><span>Monthly installment</span><strong>{money(monthly)}</strong></div><div className="flex justify-between"><span>KYC</span><StatusBadge tone="success">Verified</StatusBadge></div></div></Card><List strong inset><ListItem title="I confirm that the information provided is accurate" media={<Radio checked readOnly />} /></List></>}
      <Block className="action-bar"><Button large rounded onClick={next}>{step === 5 ? 'Submit application' : 'Continue'}</Button></Block>
    </Standalone>
  );
}

function LoanStatusPage() {
  const navigate = useNavigate();
  return <Standalone title="Loan status" onBack={() => navigate('/')}><Block strong inset className="text-center"><StatusBadge>Under review</StatusBadge><h2 className="mt-3 text-xl font-bold">Application LN-20261017</h2><p className="text-sm text-slate-500">We are reviewing your application.</p></Block><BlockTitle>Application timeline</BlockTitle><List strong inset><ListItem title="Application submitted" subtitle="17 Oct 2026 · Completed" after={<StatusBadge tone="success">✓</StatusBadge>} /><ListItem title="Identity verification" subtitle="Completed" after={<StatusBadge tone="success">✓</StatusBadge>} /><ListItem title="Credit review" subtitle="In progress" after={<StatusBadge>Now</StatusBadge>} /><ListItem title="Approval" subtitle="Waiting" /><ListItem title="Disbursement" subtitle="Waiting" /></List></Standalone>;
}

function LoanDetailPage() {
  const navigate = useNavigate();
  return <Standalone title="Loan detail" onBack={() => navigate('/loans')}><Card header={<div className="flex justify-between"><strong>Flexible Cash Loan</strong><StatusBadge tone="success">Active</StatusBadge></div>}><div className="text-sm text-slate-500">Outstanding balance</div><div className="text-3xl font-bold">Rp 4.200.000</div><div className="mt-4"><Progressbar progress={58} /></div><div className="mt-2 flex justify-between text-xs text-slate-500"><span>58% repaid</span><span>4 of 6 installments</span></div></Card><BlockTitle>Installment schedule</BlockTitle><List strong inset><ListItem title="Installment 5" subtitle="20 Oct 2026" after="Rp 850.000" /><ListItem title="Installment 6" subtitle="20 Nov 2026" after="Rp 850.000" /><ListItem title="Paid installment 4" subtitle="20 Sep 2026" after={<StatusBadge tone="success">Paid</StatusBadge>} /></List><BlockTitle>Loan information</BlockTitle><List strong inset className="!mb-8"><ListItem title="Principal" after="Rp 5.000.000" /><ListItem title="Interest" after="1.2% / month" /><ListItem title="Due date" after="20 Oct 2026" /><ListItem title="Contract" link after="View" /></List><Block className="action-bar"><Button large rounded onClick={() => navigate('/repayment')}>Make repayment</Button></Block></Standalone>;
}

function RepaymentPage() {
  const navigate = useNavigate();
  const [method, setMethod] = useState('Bank transfer');
  const [sheet, setSheet] = useState(false);
  return <Standalone title="Repayment" onBack={() => navigate('/loan/active')}><Card header="Amount due"><div className="text-3xl font-bold">Rp 850.000</div><p className="m-0 text-sm text-slate-500">Due 20 Oct 2026</p></Card><BlockTitle>Payment method</BlockTitle><List strong inset><ListItem title="Bank transfer" subtitle="BCA Virtual Account" media={<Radio checked={method === 'Bank transfer'} onChange={() => setMethod('Bank transfer')} />} /><ListItem title="Virtual account" subtitle="Available after confirmation" media={<Radio checked={method === 'Virtual account'} onChange={() => setMethod('Virtual account')} />} /></List><Block strong inset><div className="flex justify-between"><span>Payment amount</span><strong>Rp 850.000</strong></div></Block><Block className="action-bar"><Button large rounded onClick={() => setSheet(true)}>Pay now</Button></Block><Sheet opened={sheet} onBackdropClick={() => setSheet(false)}><div className="p-5 pb-8"><h3 className="text-lg font-bold">Confirm repayment</h3><p className="text-sm text-slate-500">You are about to pay Rp 850.000 using {method}.</p><Button large rounded className="mt-4" onClick={() => navigate('/payment')}>Confirm payment</Button></div></Sheet></Standalone>;
}

function PaymentDetailPage() {
  const navigate = useNavigate();
  return <Standalone title="Payment detail" onBack={() => navigate('/loan/active')}><Block strong inset className="text-center"><div className="success-icon">✓</div><StatusBadge tone="success">Payment successful</StatusBadge><div className="mt-3 text-3xl font-bold">Rp 850.000</div><p className="text-sm text-slate-500">Your repayment has been recorded.</p></Block><List strong inset><ListItem title="Payment date" after="20 Oct 2026" /><ListItem title="Payment method" after="Bank transfer" /><ListItem title="Reference" after="PAY-20261020-001" /></List><Block className="action-bar"><Button large rounded onClick={() => navigate('/loan/active')}>Done</Button></Block></Standalone>;
}

function KYCPage() {
  const navigate = useNavigate();
  return <Standalone title="KYC verification" onBack={() => navigate('/apply')}><Block strong inset><StatusBadge tone="success">Verified</StatusBadge><h2 className="mt-3 text-xl font-bold">Identity verified</h2><p className="text-sm text-slate-500">Your identity documents have been verified successfully.</p></Block><List strong inset><ListItem title="Identity information" after={<StatusBadge tone="success">Done</StatusBadge>} /><ListItem title="Identity document" after={<StatusBadge tone="success">Done</StatusBadge>} /><ListItem title="Selfie verification" after={<StatusBadge tone="success">Done</StatusBadge>} /></List></Standalone>;
}

export default function App() {
  const location = useLocation();
  const path = location.pathname;
  if (path === '/') return <HomePage />;
  if (path === '/loans') return <LoansPage />;
  if (path === '/profile') return <ProfilePage />;
  if (path === '/apply') return <LoanApplicationPage />;
  if (path === '/kyc') return <KYCPage />;
  if (path === '/status') return <LoanStatusPage />;
  if (path === '/loan/active') return <LoanDetailPage />;
  if (path === '/repayment') return <RepaymentPage />;
  if (path === '/payment') return <PaymentDetailPage />;
  return <HomePage />;
}
