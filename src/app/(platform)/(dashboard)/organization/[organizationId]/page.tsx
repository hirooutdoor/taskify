import { auth } from '@clerk/nextjs';

const OrganizationIdPage = () => {
  const { orgId } = auth();

  return (
    <div>
      <h1>Organization ID: {orgId}</h1>
    </div>
  );
};

export default OrganizationIdPage;
