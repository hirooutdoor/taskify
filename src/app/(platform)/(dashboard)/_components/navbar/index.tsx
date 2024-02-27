import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';
import { Plus } from 'lucide-react';

import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/button';

export const Navbar = () => (
  <nav className='fixed z-50 top-0 px-4 w-full h-14 border-b bg-white shadow flex items-center'>
    <div className='flex items-center gap-x-4'>
      <div className='hidden md:flex'>
        <Logo />
      </div>
      <Button size='sm' className='hidden md:block rounded-sm h-auto'>
        Create
      </Button>
      <Button size='sm' className='md:hidden block rounded-sm'>
        <Plus className='h-4 w-4' />
      </Button>
    </div>
    <div className='ml-auto flex items-center gap-x-2'>
      <OrganizationSwitcher
        hidePersonal
        afterCreateOrganizationUrl='/organization/:id'
        appearance={{
          elements: {
            rootBox: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }
          }
        }}
      />
      <UserButton
        afterSignOutUrl='/'
        appearance={{
          elements: {
            avatarBox: {
              height: 30,
              width: 30
            }
          }
        }}
      />
    </div>
  </nav>
);
