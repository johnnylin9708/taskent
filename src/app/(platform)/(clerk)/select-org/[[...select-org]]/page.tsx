import { OrganizationList } from "@clerk/nextjs";

export default function CreateOrganizationPage() {
  return (
    <OrganizationList
      hidePersonal
      afterSelectOrganizationUrl="/workspace/:id"
      afterCreateOrganizationUrl="/workspace/:id"
    />
  );
}
