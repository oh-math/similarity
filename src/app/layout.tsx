import NavBar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { mergeClass } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={mergeClass(
        "bg-white text-slate-900 antialiased",
        inter.className
      )}
    >
      <body className="min-h-screen bg-slate-50 dark:bg-slate-900 antialiased">
        <Providers>
          {children}

          <NavBar />
        </Providers>

        {/* Permite mais height em dispositivos mobile */}
        <div className="h-40 md:hidden"></div>
      </body>
    </html>
  );
}
