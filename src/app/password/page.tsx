import PasswordForm from "./_components/password-form";

const PasswordGeneratorPage = () => {
  return (
    <div className="flex flex-col size-full items-center justify-center">
      <h1 className="text-5xl font-semibold">Генератор паролей</h1>
      <div>
      <PasswordForm />
      </div>
    </div>
  );
};

export default PasswordGeneratorPage;
