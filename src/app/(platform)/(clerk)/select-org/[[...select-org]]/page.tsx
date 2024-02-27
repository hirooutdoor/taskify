import { OrganizationList } from '@clerk/nextjs';

export const CreateOrganizationPage = () => (
  <OrganizationList
    hidePersonal
    afterSelectOrganizationUrl='/organization/:id'
    afterCreateOrganizationUrl='/organization/:id'
  />
);

export default CreateOrganizationPage;
