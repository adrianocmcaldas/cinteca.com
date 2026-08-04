import { LegalShell } from "./legal-shell";

export default function LegalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LegalShell>{children}</LegalShell>;
}
