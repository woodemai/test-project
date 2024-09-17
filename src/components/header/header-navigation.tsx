import Link from "next/link";
import { Button } from "../ui/button";

const HeaderNavigation = () => {
  return (
    <nav className="flex justify-center">
      <Button asChild variant="link">
        <Link href="/">Имя</Link>
      </Button>
      <Button asChild variant="link">
        <Link href="/password">Пароль</Link>
      </Button>
      <Button asChild variant="link">
        <Link href="/calculator">Калькулятор</Link>
      </Button>
    </nav>
  );
};

export default HeaderNavigation;
