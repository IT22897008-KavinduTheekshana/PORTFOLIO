import type { Metadata } from "next";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kavindu Theekshana — Software Engineer",
  description:
    "Portfolio of Kavindu Theekshana, Associate Software Engineer & Full Stack Developer specializing in enterprise systems, workflow automation, and AI/ML integration.",
  icons: [
    { rel: "icon", url: "/images/logo.png" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-body bg-bg text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
