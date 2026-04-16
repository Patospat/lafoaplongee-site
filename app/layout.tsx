export const metadata = {
  title: "La Foa Plongée | Baptêmes, explorations et formations en Nouvelle-Calédonie",
  description:
    "Découvrez La Foa Plongée à Ouano : baptêmes, explorations, formations niveau 1, 2 et 3 dans le lagon calédonien.",
};

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
