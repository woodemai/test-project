"use client";

import { useUserStore } from "@/providers/user-store-provider";

const HeaderName = () => {
  const name = useUserStore((state) => state.name);

  return <h3 className="text-right">{name}</h3>;
};

export default HeaderName;