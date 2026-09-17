import { Page } from 'konsta/react';
import { Outlet, useLocation } from 'react-router-dom';
import { BottomNav } from '../components/navigation/AppNavigation.jsx';

export default function AppShell() {
  const location = useLocation();
  const active = location.pathname === '/loans' ? 'loans' : location.pathname === '/profile' ? 'profile' : 'home';
  return <Page className="loan-page"><main className="loan-content"><Outlet /></main><BottomNav active={active}/></Page>;
}
