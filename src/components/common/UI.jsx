import { Badge, Button, Card, Progressbar } from 'konsta/react';
import { money } from '../../data/mock.js';

export function StatusBadge({ children, tone = 'primary' }) {
  const colors = {
    primary: { bg: 'bg-blue-600', text: 'text-white' },
    success: { bg: 'bg-emerald-600', text: 'text-white' },
    warning: { bg: 'bg-amber-500', text: 'text-white' },
    danger: { bg: 'bg-red-600', text: 'text-white' },
    neutral: { bg: 'bg-slate-500', text: 'text-white' },
  };
  return <Badge colors={colors[tone] || colors.primary}>{children}</Badge>;
}

export function LoanOfferCard({ amount = 5000000, tenor = 6, onApply }) {
  return (
    <Card className="loan-card" header={<div className="flex items-center justify-between"><strong>Flexible Cash Loan</strong><StatusBadge>New</StatusBadge></div>}>
      <div className="space-y-4">
        <div>
          <div className="loan-label">Up to</div>
          <div className="loan-display mt-1">{money(amount)}</div>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
            <div className="loan-label">Tenor</div>
            <strong>{tenor} months</strong>
          </div>
          <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
            <div className="loan-label">Starting rate</div>
            <strong>1.2% / month</strong>
          </div>
        </div>
        <Button large rounded onClick={onApply}>Apply now</Button>
      </div>
    </Card>
  );
}

export function ActiveLoanCard({ loan, onDetail }) {
  return (
    <Card className="loan-card" header={<div className="flex items-center justify-between"><strong>Active Loan</strong><StatusBadge tone="success">Active</StatusBadge></div>}>
      <div className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <div className="min-w-0">
            <div className="loan-label">Outstanding</div>
            <div className="loan-display mt-1 truncate">{money(loan.outstanding)}</div>
          </div>
          <div className="shrink-0 text-right">
            <div className="loan-label">Next payment</div>
            <strong className="loan-amount block mt-1">{money(loan.nextPayment)}</strong>
          </div>
        </div>
        <Progressbar progress={loan.progress} aria-label={`Loan ${loan.progress}% paid`} />
        <div className="flex justify-between text-xs text-slate-500">
          <span>{loan.progress}% paid</span>
          <span>Due {loan.dueDate}</span>
        </div>
        <Button large rounded outline onClick={onDetail}>View loan</Button>
      </div>
    </Card>
  );
}
