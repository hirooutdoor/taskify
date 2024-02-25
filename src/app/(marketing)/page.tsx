import { Medal } from 'lucide-react';

const MarketingPage = () => (
  <div className='flex items-center justify-center flex-col'>
    <div className='flex items-center justify-center flex-col gap-6'>
      <div className='flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase'>
        <Medal className='h-6 w-6 mr-2' />
        No. 1 task management app
      </div>
      <h1 className='text-3xl md:text-6xl font-bold text-center text-neutral-800'>
        Taskify helps team move
      </h1>
      <span className='text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white p-6 rounded-md w-fit'>
        work forward.
      </span>
    </div>
  </div>
);

export default MarketingPage;
