// next
import { useSession } from 'next-auth/react';

interface UserProps {
  name: string;
  email: string;
  avatar: string;
  thumb: string;
  role: string;
}

export default function useUser() {
  const { data: session } = useSession();
  if (session) {
    const user = session?.user;
    const thumb = user?.image || '/assets/images/users/avatar-1.png';

    if (!user?.image) {
      user!.image = '/assets/images/users/avatar-1.png';
    }

    const newUser: UserProps = {
      name: user?.name || '',
      email: user?.email || '',
      avatar: user?.image || '',
      thumb,
      role: 'Utilisateur'
    };

    return newUser;
  }
  return false;
}
