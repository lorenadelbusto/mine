import type { Metadata } from "next";
import "./globals.css";

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
  return <html lang="es"><body>{children}</body></html>;
}
