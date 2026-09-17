import { Block, BlockTitle, Button, Card, List, ListInput, Progressbar, Radio, Range, Segmented, SegmentedButton } from 'konsta/react';
import { money, user } from '../../data/mock.js';

export function ApplicationProgress({ step }) {
  return (
    <Block className="!pt-0">
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span>Step {step} of 5</span>
        <span>{step * 20}%</span>
      </div>
      <Progressbar progress={step * 20} className="mt-2" />
    </Block>
  );
}

export function AmountStep({ amount, setAmount }) {
  return (
    <>
      <BlockTitle>Loan amount</BlockTitle>
      <Block strong inset>
        <div className="text-center">
          <div className="text-sm text-slate-500">You request</div>
          <div className="my-2 text-3xl font-bold">{money(amount)}</div>
          <Range aria-label="Loan amount" value={amount} min={1000000} max={8000000} step={500000} onChange={(e) => setAmount(Number(e.target.value))} />
        </div>
      </Block>
    </>
  );
}

export function TenorStep({ amount, tenor, setTenor }) {
  return (
    <>
      <BlockTitle>Choose tenor</BlockTitle>
      <Block strong inset>
        <Segmented strong rounded>
          {[3, 6, 9, 12].map((value) => (
            <SegmentedButton key={value} active={tenor === value} onClick={() => setTenor(value)}>{value}m</SegmentedButton>
          ))}
        </Segmented>
        <div className="mt-6 space-y-2">
          <div className="flex justify-between"><span>Amount</span><strong>{money(amount)}</strong></div>
          <div className="flex justify-between"><span>Rate</span><strong>1.2% / month</strong></div>
          <div className="flex justify-between"><span>Tenor</span><strong>{tenor} months</strong></div>
        </div>
      </Block>
    </>
  );
}

export function SimulationStep({ amount, tenor, monthly }) {
  return (
    <>
      <BlockTitle>Loan simulation</BlockTitle>
      <Card header="Estimated repayment">
        <div className="space-y-3">
          <div className="flex justify-between"><span>Principal</span><strong>{money(amount)}</strong></div>
          <div className="flex justify-between"><span>Interest</span><strong>{money(Math.round(amount * .012 * tenor))}</strong></div>
          <div className="flex justify-between"><span>Admin fee</span><strong>{money(25000)}</strong></div>
          <div className="flex justify-between border-t pt-3"><span>Monthly installment</span><strong>{money(monthly)}</strong></div>
        </div>
      </Card>
    </>
  );
}

export function PersonalStep() {
  return (
    <>
      <BlockTitle>Personal information</BlockTitle>
      <List strong inset>
        <ListInput label="Full name" floatingLabel value={user.name} readOnly />
        <ListInput label="Phone" floatingLabel type="tel" value={user.phone} readOnly />
        <ListInput label="Employment" floatingLabel value="Full-time employee" readOnly />
        <ListInput label="Monthly income" floatingLabel value="Rp 10.000.000" readOnly />
      </List>
      <BlockTitle>Verification</BlockTitle>
      <List strong inset>
        <ListInput label="KYC verification" value="Verified" readOnly />
        <ListInput label="Bank account" value={user.bank} readOnly />
      </List>
    </>
  );
}

export function ReviewStep({ amount, tenor, monthly }) {
  return (
    <>
      <BlockTitle>Review application</BlockTitle>
      <Card header="Application summary">
        <div className="space-y-3">
          <div className="flex justify-between"><span>Loan amount</span><strong>{money(amount)}</strong></div>
          <div className="flex justify-between"><span>Tenor</span><strong>{tenor} months</strong></div>
          <div className="flex justify-between"><span>Monthly installment</span><strong>{money(monthly)}</strong></div>
        </div>
      </Card>
      <List strong inset>
        <ListItem title="I confirm that the information provided is accurate" media={<Radio checked readOnly aria-label="Information confirmed" />} />
      </List>
    </>
  );
}

export function ApplicationSuccess({ onStatus }) {
  return (
    <Block strong inset className="text-center">
      <div className="success-icon" aria-hidden="true">✓</div>
      <h1 className="text-xl font-bold">Application received</h1>
      <p className="text-slate-500">Your application <strong>LN-20261017</strong> is being reviewed.</p>
      <Button large rounded onClick={onStatus}>View status</Button>
    </Block>
  );
}
