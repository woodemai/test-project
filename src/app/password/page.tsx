import PasswordForm from "./_components/password-form";
import PasswordsList from "./_components/passwords-list";

const PasswordGeneratorPage = () => {
  return (
    <div className="flex size-full flex-col items-center justify-center gap-4">
      <div className="w-full max-w-4xl flex flex-col gap-4">
        <h1 className="w-full text-left text-4xl ">
          Генератор паролей
        </h1>
        <div className="flex w-full max-w-xl gap-4">
          <PasswordForm />
          <PasswordsList />
        </div>
      </div>
    </div>
  );
};

export default PasswordGeneratorPage;
