export const user = { name: 'Alex Morgan', phone: '+62 812-3456-7890', email: 'alex@example.com', verified: true, bank: 'BCA •••• 1288' };
export const financialSummary = { availableLimit: 8000000, outstanding: 4200000 };
export const loanOffer = { name: 'Flexible Cash Loan', amount: 8000000, tenor: 12, rate: 1.2 };
export const activeLoan = { id: 'LN-20261017', name: 'Flexible Cash Loan', principal: 5000000, outstanding: 4200000, nextPayment: 850000, progress: 58, dueDate: '20 Oct 2026', tenor: 6, rate: 1.2 };
export const transactions = [
  { title: 'Loan disbursement', date: '02 Oct 2026', amount: 5000000, type: 'credit' },
  { title: 'Repayment', date: '20 Sep 2026', amount: 850000, type: 'debit' },
];
export const loanHistory = [
  { name: 'Personal Loan', detail: 'Completed · 2026' },
  { name: 'Emergency Loan', detail: 'Completed · 2025' },
];
export const money = (value) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value);
