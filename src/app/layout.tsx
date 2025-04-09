"use client";
import "./globals.css";
import ThemeToggler from "@/components/theme-toggler";
import { ThemeProvider } from "@/components/theme-provider";
const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body className="w-full">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeToggler />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};
export default RootLayout;
