import { Navbar } from './_components/navbar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => (
  <div className=' h-full'>
    <Navbar />
    {children}
  </div>
);

export default DashboardLayout;
