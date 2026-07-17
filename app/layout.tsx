import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lorena del Busto — Integrar para Crear",
  description: "Estrategia, creatividad y conocimiento conectados para diseñar productos, experiencias y soluciones con impacto.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
