import DeleteAccount from './_components/delete-account';
import PasswordForm from './_components/password-form';

export default function ResetPassword() {
  return (
    <div className="p-8 mx-auto flex flex-col justify-center gap-4">
      <div className="w-full shadow-md p-4 rounded-md  ">
        <PasswordForm />
      </div>
      <div className="w-full shadow-md p-4 rounded-md  ">
        <DeleteAccount />
      </div>
    </div>
  );
}
