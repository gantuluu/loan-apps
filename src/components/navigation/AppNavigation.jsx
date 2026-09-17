import { Bell, CircleUserRound, CreditCard, Home } from 'lucide-react';
import { Button, Navbar, Tabbar, TabbarLink, ToolbarPane } from 'konsta/react';
import { useNavigate } from 'react-router-dom';

const items = [
  { key: 'home', label: 'Home', icon: Home, path: '/' },
  { key: 'loans', label: 'Loans', icon: CreditCard, path: '/loans' },
  { key: 'profile', label: 'Profile', icon: CircleUserRound, path: '/profile' },
];

export function AppHeader({ title = 'Loan App', notification = false }) {
  return (
    <Navbar
      title={title}
      right={notification ? (
        <Button clear className="!min-w-0" aria-label="Notifications">
          <Bell size={20} strokeWidth={2} aria-hidden="true" />
        </Button>
      ) : null}
    />
  );
}

export function BottomNav({ active }) {
  const navigate = useNavigate();

  return (
    <Tabbar labels icons className="loan-tabbar left-0 bottom-0 fixed">
      <ToolbarPane>
        {items.map(({ key, label, icon: Icon, path }) => (
          <TabbarLink
            key={key}
            active={active === key}
            onClick={() => navigate(path)}
            icon={<Icon size={20} strokeWidth={2} aria-hidden="true" />}
            label={label}
          />
        ))}
      </ToolbarPane>
    </Tabbar>
  );
}
