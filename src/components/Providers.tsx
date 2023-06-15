"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

const Providers = ({ children }: { children: ReactNode }) => {
  //
  return (
    // componente que permite habilitar os temas (dark e light)
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {/* componente que permite autenticação client side 
      secundária (principa será no servidor) */}
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  );
};

export default Providers;
