import { Page, Navbar, NavbarBackLink } from 'konsta/react';
import { Outlet, useNavigate } from 'react-router-dom';

export default function StandaloneLayout() {
  const navigate = useNavigate();
  return <Page className="loan-page standalone-page"><Navbar left={<NavbarBackLink text="Back" showText="auto" onClick={() => navigate(-1)}/>} title="Loan App"/><main className="loan-content standalone-content"><Outlet/></main></Page>;
}
