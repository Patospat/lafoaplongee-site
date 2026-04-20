export const metadata = {
  title: "Formation plongée niveau 1 en Nouvelle-Calédonie | La Foa Plongée",
  description:
    "Passez votre niveau 1 de plongée en Nouvelle-Calédonie avec La Foa Plongée. Formation en 6 plongées, apprentissage progressif et accès à 20 m accompagné.",
};

export default function FormationPlongeeNiveau1Page() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Formation</p>

        <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
          Formation plongée niveau 1 en Nouvelle-Calédonie
        </h1>

        <div className="mt-8 space-y-6 text-lg leading-8 text-slate-300">
          <p>
            La Foa Plongée propose une formation niveau 1 en Nouvelle-Calédonie pour apprendre les bases de la plongée dans un environnement exceptionnel, entre La Foa et la zone de Ouano.
          </p>

          <p>
            Cette formation permet d’accéder à{" "}
            <strong className="text-cyan-300">20 mètres accompagné d’un moniteur</strong>,
            avec un apprentissage progressif des gestes techniques, de la théorie et de l’aisance sous l’eau.
          </p>

          <p>
            La formation niveau 1 comprend{" "}
            <strong className="text-cyan-300">6 plongées</strong> et est proposée au tarif de{" "}
            <strong className="text-cyan-300">50 000 F</strong>.
            Elle s’adresse aux personnes souhaitant évoluer au-delà du baptême et acquérir de solides bases pour plonger en sécurité.
          </p>
        </div>
        <div className="mt-10 border-t border-white/10 pt-8">
  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Aller plus loin</p>
  <div className="mt-4 flex flex-wrap gap-4">
    <a href="/bapteme-plongee-la-foa" className="text-cyan-300 hover:text-cyan-200">
      Commencer par un baptême
    </a>
    <a href="/plongee-exploration-ouano" className="text-cyan-300 hover:text-cyan-200">
      Voir les explorations
    </a>
    <a href="/centre-de-plongee-la-foa" className="text-cyan-300 hover:text-cyan-200">
      Découvrir le centre
    </a>
  </div>
</div>
      </div>
    </main>
  );
}
