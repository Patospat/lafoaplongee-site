export const metadata = {
  title: "Centre de plongée à La Foa | Baptêmes, explorations et formations",
  description:
    "Découvrez La Foa Plongée, centre de plongée à La Foa en Nouvelle-Calédonie. Baptêmes, explorations, formations niveau 1, 2, 3 et sorties vers Ouano.",
};

export default function CentreDePlongeeLaFoaPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Centre de plongée</p>

        <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
          Centre de plongée à La Foa
        </h1>

        <div className="mt-8 space-y-6 text-lg leading-8 text-slate-300">
          <p>
            La Foa Plongée est un centre de plongée situé à La Foa, en Nouvelle-Calédonie, proposant des baptêmes, des explorations et des formations dans la zone de Ouano.
          </p>

          <p>
            Grâce à son emplacement privilégié, le club permet d’accéder à un lagon remarquable, dans un environnement naturel idéal pour découvrir la plongée ou progresser en toute confiance.
          </p>

          <p>
            Notre centre s’adresse aux débutants, aux plongeurs certifiés et aux personnes souhaitant suivre une formation du niveau 1 au niveau 3. Nous privilégions un encadrement sérieux, une approche conviviale et des sorties adaptées au niveau des participants.
          </p>

          <p>
            Choisir La Foa Plongée, c’est vivre une expérience locale, authentique et professionnelle, avec la possibilité de combiner plongée et hébergement pour profiter pleinement de votre séjour.
          </p>
        </div>
        <div className="mt-10 border-t border-white/10 pt-8">
  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Nos activités</p>
  <div className="mt-4 flex flex-wrap gap-4">
    <a href="/bapteme-plongee-la-foa" className="text-cyan-300 hover:text-cyan-200">
      Baptême de plongée
    </a>
    <a href="/plongee-exploration-ouano" className="text-cyan-300 hover:text-cyan-200">
      Exploration
    </a>
    <a href="/formation-plongee-niveau-1-nouvelle-caledonie" className="text-cyan-300 hover:text-cyan-200">
      Formation niveau 1
    </a>
  </div>
</div>
      </div>
    </main>
  );
}
