import type { Metadata, Viewport } from "next";
import { Playwrite_DK_Loopet, Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

const playwrite = Playwrite_DK_Loopet({
  weight: "variable",
  variable: "--font-playwrite",
  display: "swap",
});

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#fbf9e1",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mine-flax-five.vercel.app"),
  title: "Lorena del Busto — Estrategia, producto y consultoría",
  description: "Integro estrategia, creatividad y conocimiento para diseñar productos, experiencias, programas y soluciones con impacto.",
  openGraph: {
    title: "Lorena del Busto — Integrar para Crear",
    description: "Estrategia, producto y consultoría para transformar desafíos complejos en soluciones posibles.",
    type: "website",
    locale: "es_PE",
    images: [{ url: "/og.png", width: 1733, height: 907, alt: "Integrar para Crear — Lorena del Busto" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lorena del Busto — Integrar para Crear",
    description: "Estrategia, producto y consultoría para transformar desafíos complejos en soluciones posibles.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={`${raleway.variable} ${playwrite.variable}`}>{children}</body></html>;
}
