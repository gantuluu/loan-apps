import { Block, BlockTitle, Card, List, ListItem } from 'konsta/react';
import { useNavigate } from 'react-router-dom';
import { activeLoan, financialSummary, loanHistory, loanOffer, money } from '../../data/mock.js';
import { LoanOfferCard, StatusBadge } from '../../components/common/UI.jsx';
import { AppHeader } from '../../components/navigation/AppNavigation.jsx';

export default function LoansPage() {
  const navigate = useNavigate();
  return <><AppHeader title="Loans"/><section aria-labelledby="loans-title"><h1 id="loans-title" className="sr-only">Loans</h1><BlockTitle>Loan overview</BlockTitle><Block className="!pt-0"><Card><div className="flex items-center justify-between"><div><div className="text-xs text-slate-500">Available limit</div><div className="text-2xl font-bold">{money(financialSummary.availableLimit)}</div></div><StatusBadge tone="success">Eligible</StatusBadge></div></Card></Block><BlockTitle>Available offers</BlockTitle><Block className="!pt-0"><LoanOfferCard amount={loanOffer.amount} tenor={loanOffer.tenor} onApply={() => navigate('/apply')}/></Block><BlockTitle>Active loans</BlockTitle><List strong inset><ListItem title={activeLoan.name} subtitle={`${money(activeLoan.principal)} · ${activeLoan.tenor} months`} after={<StatusBadge tone="success">Active</StatusBadge>} link onClick={() => navigate('/loan/active')}/></List><BlockTitle>Loan history</BlockTitle><List strong inset className="!mb-8">{loanHistory.map((loan) => <ListItem key={loan.name} title={loan.name} subtitle={loan.detail} after={<StatusBadge tone="success">Paid</StatusBadge>}/>)}</List></section></>;
}
