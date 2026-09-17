import { Navigate, Route, Routes } from 'react-router-dom';
import AppShell from '../layouts/AppShell.jsx';
import StandaloneLayout from '../layouts/StandaloneLayout.jsx';
import HomePage from '../pages/Home/HomePage.jsx';
import LoansPage from '../pages/Loans/LoansPage.jsx';
import ProfilePage from '../pages/Profile/ProfilePage.jsx';
import LoanApplicationPage from '../pages/LoanApplication/LoanApplicationPage.jsx';
import { KYCPage, LoanStatusPage, LoanDetailPage, RepaymentPage, PaymentDetailPage } from '../pages/StandalonePages.jsx';

export function AppRoutes() {
  return <Routes>
    <Route element={<AppShell/>}>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/loans" element={<LoansPage/>}/>
      <Route path="/profile" element={<ProfilePage/>}/>
    </Route>
    <Route element={<StandaloneLayout/>}>
      <Route path="/apply" element={<LoanApplicationPage/>} handle={{title:'Apply for a loan'}}/>
      <Route path="/kyc" element={<KYCPage/>} handle={{title:'KYC verification'}}/>
      <Route path="/status" element={<LoanStatusPage/>} handle={{title:'Loan status'}}/>
      <Route path="/loan/active" element={<LoanDetailPage/>} handle={{title:'Loan detail'}}/>
      <Route path="/repayment" element={<RepaymentPage/>} handle={{title:'Repayment'}}/>
      <Route path="/payment" element={<PaymentDetailPage/>} handle={{title:'Payment detail'}}/>
    </Route>
    <Route path="*" element={<Navigate to="/" replace/>}/>
  </Routes>;
}
