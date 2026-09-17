import { Block } from 'konsta/react';
import { useNavigate } from 'react-router-dom';
import { useLoanApplication } from '../../state/application/useLoanApplication.js';
import {
  AmountStep,
  ApplicationProgress,
  ApplicationSuccess,
  PersonalStep,
  ReviewStep,
  SimulationStep,
  TenorStep,
} from '../../components/application/LoanApplicationSteps.jsx';

export default function LoanApplicationPage() {
  const navigate = useNavigate();
  const { amount, setAmount, tenor, setTenor, step, submitted, monthly, next } = useLoanApplication();

  if (submitted) return <ApplicationSuccess onStatus={() => navigate('/status')} />;

  return (
    <>
      <ApplicationProgress step={step} />

      {step === 1 && <AmountStep amount={amount} setAmount={setAmount} />}
      {step === 2 && <TenorStep amount={amount} tenor={tenor} setTenor={setTenor} />}
      {step === 3 && <SimulationStep amount={amount} tenor={tenor} monthly={monthly} />}
      {step === 4 && <PersonalStep />}
      {step === 5 && <ReviewStep amount={amount} tenor={tenor} monthly={monthly} />}

      <Block className="action-bar">
        <button className="loan-primary-action" type="button" onClick={next}>
          {step === 5 ? 'Submit application' : 'Continue'}
        </button>
      </Block>
    </>
  );
}
