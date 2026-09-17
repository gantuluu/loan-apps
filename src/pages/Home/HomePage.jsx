import { Block, BlockTitle, Button, Card, List, ListItem } from 'konsta/react';
import { useNavigate } from 'react-router-dom';
import { activeLoan, financialSummary, loanOffer, money, transactions, user } from '../../data/mock.js';
import { ActiveLoanCard, LoanOfferCard } from '../../components/common/UI.jsx';
import { AppHeader } from '../../components/navigation/AppNavigation.jsx';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <AppHeader title="Good afternoon" notification />
      <section aria-labelledby="home-title">
        <Block className="!mb-2">
          <p className="loan-caption m-0">Welcome back, {user.name}</p>
          <h1 id="home-title" className="mt-1 !mb-0">Your finances at a glance</h1>
        </Block>

        <BlockTitle>Financial summary</BlockTitle>
        <Block className="!pt-0">
          <div className="grid grid-cols-2 gap-3">
            <Card className="summary-card">
              <div className="loan-label">Available limit</div>
              <div className="loan-amount mt-1 text-xl">{money(financialSummary.availableLimit)}</div>
            </Card>
            <Card className="summary-card">
              <div className="loan-label">Outstanding</div>
              <div className="loan-amount mt-1 text-xl">{money(financialSummary.outstanding)}</div>
            </Card>
          </div>
        </Block>

        <BlockTitle>Active loan</BlockTitle>
        <Block className="!pt-0"><ActiveLoanCard loan={activeLoan} onDetail={() => navigate('/loan/active')} /></Block>

        <BlockTitle>Quick actions</BlockTitle>
        <Block className="!pt-0">
          <div className="grid grid-cols-3 gap-2">
            <Button large rounded tonal onClick={() => navigate('/apply')}>Apply</Button>
            <Button large rounded tonal onClick={() => navigate('/repayment')}>Repay</Button>
            <Button large rounded tonal onClick={() => navigate('/loans')}>History</Button>
          </div>
        </Block>

        <BlockTitle>Loan offers</BlockTitle>
        <Block className="!pt-0"><LoanOfferCard amount={loanOffer.amount} tenor={loanOffer.tenor} onApply={() => navigate('/apply')} /></Block>

        <BlockTitle>Recent transactions</BlockTitle>
        <List strong inset className="!mb-8">
          {transactions.map((tx) => (
            <ListItem key={`${tx.title}-${tx.date}`} title={tx.title} subtitle={tx.date} after={<strong className="loan-amount">{tx.type === 'credit' ? '+' : '-'}{money(tx.amount)}</strong>} />
          ))}
        </List>
      </section>
    </>
  );
}
