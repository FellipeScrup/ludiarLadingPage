import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LudiAr | Aprendizagem com Realidade Aumentada",
  description:
    "Descubra como o LudiAr transforma livros físicos em aventuras de aprendizagem interativas com realidade aumentada para crianças.",
  openGraph: {
    title: "LudiAr | Aprendizagem com Realidade Aumentada",
    description:
      "Aponte o celular para o livro e conheça personagens que fazem perguntas divertidas sobre português e leitura.",
    url: "https://ludiar.com",
    siteName: "LudiAr",
    images: [
      {
        url: "/IMG_6209.PNG",
        width: 1200,
        height: 630,
        alt: "LudiAr - Criança lendo livro com realidade aumentada",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
