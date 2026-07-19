import ProfileForm from "@/components/profile/ProfileForm";
import AccountInformation from "@/components/profile/AccountInformation";
import ProfileCard from "@/components/profile/ProfileCard";
import SecuritySettings from "@/components/profile/SecuritySettings";

export default function ProfilePage() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold">
          My Profile
        </h1>

        <p className="mt-2 text-slate-500">
          View and manage your banking profile.
        </p>
      </div>
      
      <ProfileCard/>
    {/* <UserProfileCard />  */}

      <ProfileForm/> 

      <AccountInformation />
      
      <SecuritySettings/>

    </div>
  );
}