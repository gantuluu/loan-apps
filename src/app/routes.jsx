import { Navigate, Route, Routes } from 'react-router-dom';
import AppShell from '../layouts/AppShell.jsx';
import StandaloneLayout from '../layouts/StandaloneLayout.jsx';
import HomePage from '../pages/Home/HomePage.jsx';
import LoansPage from '../pages/Loans/LoansPage.jsx';
import ProfilePage from '../pages/Profile/ProfilePage.jsx';
import LoanApplicationPage from '../pages/LoanApplication/LoanApplicationPage.jsx';
import KYCPage from '../pages/KYC/KYCPage.jsx';
import LoanStatusPage from '../pages/LoanStatus/LoanStatusPage.jsx';
import LoanDetailPage from '../pages/LoanDetail/LoanDetailPage.jsx';
import RepaymentPage from '../pages/Repayment/RepaymentPage.jsx';
import PaymentDetailPage from '../pages/PaymentDetail/PaymentDetailPage.jsx';

export function AppRoutes() {
  return <Routes>
    <Route element={<AppShell/>}>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/loans" element={<LoansPage/>}/>
      <Route path="/profile" element={<ProfilePage/>}/>
    </Route>
    <Route element={<StandaloneLayout/>}>
      <Route path="/apply" element={<LoanApplicationPage/>}/>
      <Route path="/kyc" element={<KYCPage/>}/>
      <Route path="/status" element={<LoanStatusPage/>}/>
      <Route path="/loan/active" element={<LoanDetailPage/>}/>
      <Route path="/repayment" element={<RepaymentPage/>}/>
      <Route path="/payment" element={<PaymentDetailPage/>}/>
    </Route>
    <Route path="*" element={<Navigate to="/" replace/>}/>
  </Routes>;
}
