import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kavindu Theekshana | Full-Stack Developer & AI Enthusiast",
  description:
    "Portfolio of Kavindu Theekshana — Full-Stack Developer and AI/LLM Enthusiast specialising in RAG pipelines, vector databases, and modern web applications.",
  keywords: [
    "Kavindu Theekshana",
    "Full Stack Developer",
    "AI Developer",
    "LLM",
    "RAG",
    "Portfolio",
    "Sri Lanka",
  ],
  authors: [{ name: "Kavindu Theekshana" }],
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
