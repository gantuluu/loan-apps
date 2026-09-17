import { Button, Navbar, Tabbar, TabbarLink, ToolbarPane } from 'konsta/react';
import { useNavigate } from 'react-router-dom';

const items = [{ key: 'home', label: 'Home', icon: '⌂', path: '/' }, { key: 'loans', label: 'Loans', icon: '▣', path: '/loans' }, { key: 'profile', label: 'Profile', icon: '●', path: '/profile' }];

export function AppHeader({ title = 'Loan App', notification = false }) {
  return <Navbar title={title} right={notification ? <Button clear className="!min-w-0" aria-label="Notifications">🔔</Button> : null} />;
}

export function BottomNav({ active }) {
  const navigate = useNavigate();
  return <Tabbar labels icons className="loan-tabbar left-0 bottom-0 fixed"><ToolbarPane>{items.map((item) => <TabbarLink key={item.key} active={active === item.key} onClick={() => navigate(item.path)} icon={<span aria-hidden="true" className="text-xl">{item.icon}</span>} label={item.label}/>)}</ToolbarPane></Tabbar>;
}
