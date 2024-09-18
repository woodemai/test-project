"use client";

import { Button } from "@/components/ui/button";
import { useUserStore } from "@/providers/user-store-provider";
import { CopyIcon } from "@radix-ui/react-icons";

const PasswordsList = () => {
  const passwords = useUserStore((state) => state.passwords);

  return (
    <ul className="size-full">
      {passwords.map((password) => (
        <li
          key={password}
          className="flex items-center justify-between gap-2 rounded-md border px-2"
        >
          <div>{password}</div>
          <Button
            size="icon"
            onClick={() => navigator.clipboard.writeText(password)}
          >
            <CopyIcon className="fill-primary size-4" />
          </Button>
        </li>
      ))}
    </ul>
  );
};
export default PasswordsList;
