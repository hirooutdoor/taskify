import { ClerkProvider } from '@clerk/nextjs';

const PlatformLayout = ({ children }: { children: React.ReactNode }) => (
  <ClerkProvider>{children}</ClerkProvider>
);

export default PlatformLayout;
