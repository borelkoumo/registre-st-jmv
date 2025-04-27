// PROJECT IMPORTS
import GuestGuard from 'utils/route-guard/GuestGuard';
import LoginPage from './(auth)/login/page';

export default function Login() {
  return (
    <GuestGuard>
      <LoginPage />
    </GuestGuard>
  );
}