// components/DashboardNavbar.jsx
import { UserButton } from '@clerk/clerk-react';

const ChatCredential = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default ChatCredential;
