import Header from "@/components/header/header";
import { UserStoreProvider } from "@/providers/user-store-provider";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Test project Еком",
  description: "Test project Еком",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${GeistSans.variable}`}>
      <body className="pt-16">
        <UserStoreProvider>
          <Header />
          {children}
        </UserStoreProvider>
      </body>
    </html>
  );
}
