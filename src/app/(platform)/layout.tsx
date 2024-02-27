import { jaJP } from '@clerk/localizations';
import { ClerkProvider } from '@clerk/nextjs';

const PlatformLayout = ({ children }: { children: React.ReactNode }) => (
  <ClerkProvider localization={jaJP}>{children}</ClerkProvider>
);

export default PlatformLayout;
