import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lorena del Busto — Estrategia, producto y consultoría",
  description: "Integro estrategia, creatividad y conocimiento para diseñar productos, experiencias, programas y soluciones con impacto.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
