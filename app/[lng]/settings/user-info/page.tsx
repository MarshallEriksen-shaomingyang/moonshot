import ScrollContent from '@/components/scroll-content';

import UserAvatarForm from './_components/user-avatar';
import UserForm from './_components/user-form';
import UserTitle from './_components/user-title';

export default async function UserInfoPage() {
  return (
    <ScrollContent>
      <div className="p-8 min-h-full">
        <div className="max-w-3xl mx-auto md:max-w-full">
          <div className="rounded-3xl p-8 shadow-[0_4px_20px_rgba(150,173,233,0.15)]">
            <UserTitle />
            <UserAvatarForm />
            <UserForm />
          </div>
        </div>
      </div>
    </ScrollContent>
  );
}
