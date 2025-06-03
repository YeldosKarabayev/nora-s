

import ProfileHeader from "@/components/shared/profile-header";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProfileHeader />
      <main>{children}</main>
    </>
  );
}
