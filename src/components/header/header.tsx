import HeaderName from "./header-name";
import HeaderNavigation from "./header-navigation";

const Header = () => {
  return (
    <header className="fixed left-0 top-0 w-full border-b p-2 bg-background grid gap-4 grid-cols-3">
      <HeaderName />
      <HeaderNavigation />
    </header>
  );
};

export default Header;
