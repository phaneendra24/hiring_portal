"use client";

import { SessionProvider as Provider } from "next-auth/react";

type props = {
  children: React.ReactNode;
};

export default function SessionProvider({ children }: props) {
  return <Provider>{children}</Provider>;
}
