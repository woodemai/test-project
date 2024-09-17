"use client";

import { useUserStore } from "@/providers/user-store-provider";

const HeaderName = () => {
  const name = useUserStore((state) => state.name);

  return <h3>{name}</h3>;
};

export default HeaderName;