import { useState } from 'react';
import { Block, BlockTitle, Button, List, ListItem, Radio, Sheet } from 'konsta/react';
import { useNavigate } from 'react-router-dom';
import { activeLoan, money } from '../../data/mock.js';

const paymentMethods = [
  { id: 'bank', title: 'Bank transfer', subtitle: 'BCA virtual account' },
  { id: 'online', title: 'Online payment', subtitle: 'Available payment providers' },
];

export default function RepaymentPage() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [method, setMethod] = useState('bank');

  return (
    <>
      <Block strong inset className="text-center">
        <p className="m-0 text-sm text-slate-500">Amount due</p>
        <h1 className="text-3xl font-bold">{money(activeLoan.nextPayment)}</h1>
        <p className="text-sm text-slate-500">Due {activeLoan.dueDate}</p>
      </Block>

      <BlockTitle>Payment method</BlockTitle>
      <List strong inset>
        {paymentMethods.map((item) => (
          <ListItem
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            media={<Radio name="method" checked={method === item.id} onChange={() => setMethod(item.id)} aria-label={item.title} />}
            link
            onClick={() => setMethod(item.id)}
          />
        ))}
      </List>

      <Block className="action-bar">
        <Button large rounded onClick={() => setOpen(true)}>Continue payment</Button>
      </Block>

      <Sheet opened={open} onBackdropClick={() => setOpen(false)}>
        <div className="p-5">
          <h2 className="text-lg font-bold">Confirm repayment</h2>
          <p className="text-sm text-slate-500">Pay {money(activeLoan.nextPayment)} using {paymentMethods.find((item) => item.id === method)?.title.toLowerCase()}?</p>
          <Button large rounded onClick={() => { setOpen(false); navigate('/payment'); }}>Confirm payment</Button>
        </div>
      </Sheet>
    </>
  );
}
