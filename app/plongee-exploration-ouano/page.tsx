export const metadata = {
  title: "Plongée d’exploration à Ouano | Sorties lagon avec La Foa Plongée",
  description:
    "Réservez vos plongées d’exploration à Ouano avec La Foa Plongée. Sorties pour plongeurs certifiés, matériel en option et découverte d’un lagon exceptionnel.",
};

export default function PlongeeExplorationOuanoPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Exploration</p>

        <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
          Plongée d’exploration à Ouano
        </h1>

        <div className="mt-8 space-y-6 text-lg leading-8 text-slate-300">
          <p>
            La Foa Plongée propose des sorties de plongée d’exploration à Ouano,
            dans l’un des plus beaux secteurs du lagon de Nouvelle-Calédonie.
          </p>

          <p>
            Cette formule est destinée aux plongeurs certifiés souhaitant découvrir
            des sites riches en biodiversité : tortues, raies, poissons tropicaux
            et récifs coralliens exceptionnels.
          </p>

          <p>
            La formule est proposée à{" "}
            <strong className="text-cyan-300">12 500 F pour deux plongées</strong>,
            avec possibilité de location de matériel à{" "}
            <strong className="text-cyan-300">700 F par équipement</strong> ou
            un pack complet à{" "}
            <strong className="text-cyan-300">2 000 F</strong>.
          </p>
        </div>
      </div><div className="mt-10 border-t border-white/10 pt-8">
  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Aller plus loin</p>
  <div className="mt-4 flex flex-wrap gap-4">
    <a href="/bapteme-plongee-la-foa" className="text-cyan-300 hover:text-cyan-200">
      Découvrir le baptême
    </a>
    <a href="/formation-plongee-niveau-1-nouvelle-caledonie" className="text-cyan-300 hover:text-cyan-200">
      Formation niveau 1
    </a>
    <a href="/centre-de-plongee-la-foa" className="text-cyan-300 hover:text-cyan-200">
      Voir le centre
    </a>
  </div>
</div>
