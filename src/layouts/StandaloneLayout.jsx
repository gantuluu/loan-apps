import { Page, Navbar, NavbarBackLink } from 'konsta/react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const titles = { '/apply': 'Apply for a loan', '/kyc': 'KYC verification', '/status': 'Loan status', '/loan/active': 'Loan detail', '/repayment': 'Repayment', '/payment': 'Payment detail' };

export default function StandaloneLayout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return <Page className="loan-page standalone-page"><Navbar left={<NavbarBackLink text="Back" showText="auto" onClick={() => navigate(-1)}/>} title={titles[pathname] || 'Loan App'}/><main className="loan-content standalone-content"><Outlet/></main></Page>;
}
