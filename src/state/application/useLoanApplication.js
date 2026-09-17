import { useMemo, useState } from 'react';
import { loanService } from '../../services/loanService.js';

export function useLoanApplication() {
  const [amount, setAmount] = useState(5000000);
  const [tenor, setTenor] = useState(6);
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const monthly = useMemo(() => loanService.calculateInstallment(amount, tenor), [amount, tenor]);
  const next = () => step < 5 ? setStep(step + 1) : setSubmitted(true);
  return { amount, setAmount, tenor, setTenor, step, submitted, monthly, next };
}
