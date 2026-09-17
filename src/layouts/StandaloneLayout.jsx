import { Page, Navbar, NavbarBackLink } from 'konsta/react';
import { Outlet, useMatches, useNavigate } from 'react-router-dom';

export default function StandaloneLayout() {
  const navigate = useNavigate();
  const matches = useMatches();
  const title = matches[matches.length - 1]?.handle?.title || 'Loan App';
  return <Page className="loan-page standalone-page"><Navbar left={<NavbarBackLink text="Back" showText="auto" onClick={() => navigate(-1)}/>} title={title}/><main className="loan-content standalone-content"><Outlet/></main></Page>;
}
