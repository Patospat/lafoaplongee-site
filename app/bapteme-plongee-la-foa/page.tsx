export const metadata = {
  title: "Baptême de plongée à La Foa | Découverte du lagon avec La Foa Plongée",
  description:
    "Découvrez le baptême de plongée à La Foa en Nouvelle-Calédonie avec La Foa Plongée. Une première immersion encadrée pour explorer le lagon de Ouano en toute sécurité.",
};

export default function BaptemePlongeeLaFoaPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Baptême</p>

        <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
          Baptême de plongée à La Foa
        </h1>

        <div className="mt-8 space-y-6 text-lg leading-8 text-slate-300">
          <p>
            Vous souhaitez découvrir la plongée en Nouvelle-Calédonie ? La Foa Plongée propose des baptêmes de plongée à La Foa avec départ vers la zone de Ouano, un secteur réputé pour la beauté de son lagon et la richesse de sa vie sous-marine.
          </p>

          <p>
            Le baptême est idéal pour une première immersion, en toute confiance, avec un encadrement personnalisé. Le matériel est inclus dans la formule au tarif de{" "}
            <strong className="text-cyan-300">10 000 F avec matériel</strong>.
          </p>

          <p>
            Choisir un baptême de plongée à La Foa, c’est découvrir le lagon calédonien autrement, au plus près des récifs et de la biodiversité exceptionnelle de Ouano.
          </p>
        </div>
      </div>
    </main>
  );
}
