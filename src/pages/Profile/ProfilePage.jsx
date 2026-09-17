import { Block, BlockTitle, Card, List, ListItem, Toggle } from 'konsta/react';
import { useNavigate } from 'react-router-dom';
import { user } from '../../data/mock.js';
import { StatusBadge } from '../../components/common/UI.jsx';
import { AppHeader } from '../../components/navigation/AppNavigation.jsx';
import { useTheme } from '../../hooks/useTheme.js';

export default function ProfilePage() {
  const navigate = useNavigate();
  const { dark, setDark } = useTheme();

  return (
    <>
      <AppHeader title="Profile" />
      <section aria-labelledby="profile-title">
        <h1 id="profile-title" className="sr-only">Profile</h1>
        <Block className="!mb-2">
          <Card className="profile-card">
            <div className="flex items-center gap-4">
              <div className="avatar" aria-hidden="true">A</div>
              <div className="min-w-0">
                <h2 className="m-0 text-lg font-bold">{user.name}</h2>
                <p className="m-0 text-sm text-slate-500">{user.phone}</p>
                <StatusBadge tone="success">Verified</StatusBadge>
              </div>
            </div>
          </Card>
        </Block>

        <BlockTitle>Account</BlockTitle>
        <List strong inset>
          <ListItem title="Personal information" link />
          <ListItem title="Phone number" after="Verified" />
          <ListItem title="Email" after="Verified" />
        </List>

        <BlockTitle>Verification & banking</BlockTitle>
        <List strong inset>
          <ListItem title="KYC verification" after={<StatusBadge tone="success">Verified</StatusBadge>} onClick={() => navigate('/kyc')} link />
          <ListItem title="Bank account" after={user.bank} />
        </List>

        <BlockTitle>Security & settings</BlockTitle>
        <List strong inset className="!mb-8">
          <ListItem title="Change password" link />
          <ListItem
            title="Dark theme"
            after={<Toggle checked={dark} onChange={(e) => setDark(e.target.checked)} aria-label="Dark theme" />}
          />
          <ListItem title="Logout" className="text-red-600" onClick={() => navigate('/')} link />
        </List>
      </section>
    </>
  );
}
