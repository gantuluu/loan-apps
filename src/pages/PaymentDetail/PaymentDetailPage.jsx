import { Block, BlockTitle, Button, List, ListItem } from 'konsta/react';
import { useNavigate } from 'react-router-dom';
import { activeLoan, money } from '../../data/mock.js';
import { StatusBadge } from '../../components/common/UI.jsx';
export default function PaymentDetailPage(){const navigate=useNavigate();return <><Block strong inset className="text-center"><div className="success-icon" aria-hidden="true">✓</div><StatusBadge tone="success">Payment successful</StatusBadge><h1 className="text-xl font-bold">{money(activeLoan.nextPayment)}</h1><p className="text-sm text-slate-500">Payment reference PAY-20261020</p></Block><BlockTitle>Payment details</BlockTitle><List strong inset className="!mb-8"><ListItem title="Date" after="20 Oct 2026"/><ListItem title="Method" after="Bank transfer"/><ListItem title="Loan" after={activeLoan.id}/></List><Block><Button large rounded outline onClick={()=>navigate('/loan/active')}>Back to loan</Button></Block></>}
