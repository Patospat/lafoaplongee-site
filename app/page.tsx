'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import logo from '../public/logo.jpg';
import barriereCorail from '../public/plongee-barriere-corail-isie-nouvelle-caledonie.jpg';
import bateauOuano from '../public/mouillage-bateau-plongee-isie-ouano-nouvelle-caledonie.jpg';

export default function LaFoaPlongeeSite() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const whatsappLink =
    'https://wa.me/687948083?text=Bonjour%20La%20Foa%20Plong%C3%A9e%2C%20je%20souhaite%20avoir%20des%20informations%20sur%20vos%20sorties%20et%20formations.';

  const offers = [
    {
      title: 'Baptême de plongée',
      subtitle: 'Découverte encadrée',
      price: '10 000 F avec matériel',
      description:
        'Une première immersion rassurante pour découvrir la magie du lagon, accompagnée par un moniteur attentif.',
      points: ['Accessible aux débutants', 'Encadrement personnalisé', 'Matériel inclus'],
      icon: '🤿',
    },
    {
      title: 'Plongée d’exploration',
      subtitle: 'Pour plongeurs certifiés',
      price: '12 500 F pour deux plongées',
      description:
        'Des sorties sur des sites sélectionnés selon les conditions du jour, pour profiter pleinement des reliefs et de la vie sous-marine.',
      points: [
        'Sites adaptés au niveau',
        'Pack matériel complet : 2 000 F',
        'Location à l’unité : 700 F par matériel',
      ],
      icon: '🐢',
    },
    {
      title: 'Formation',
      subtitle: 'Progression et autonomie',
      description:
        'Un accompagnement sérieux pour évoluer techniquement, gagner en confiance et poursuivre votre parcours de plongeur.',
      points: ['Niveau 1 : 50 000 F', 'Niveau 2 : 70 000 F', 'Niveau 3 : 80 000 F'],
      icon: '🎓',
    },
  ];

  const trainingLevels = [
    {
      level: 'Niveau 1',
      dives: '6 plongées',
      price: '50 000 F',
      details:
        'Accès à 20 m accompagné d’un moniteur, avec apprentissage des bases, théorie, aisance sous l’eau et premières plongées encadrées.',
    },
    {
      level: 'Niveau 2',
      dives: '10 plongées',
      price: '70 000 F',
      details:
        'Perfectionnement vers l’autonomie, assistance, adaptation à la profondeur et gestion de plongées plus engagées.',
    },
    {
      level: 'Niveau 3',
      dives: '10 plongées',
      price: '80 000 F',
      details:
        'Autonomie avancée, sécurité, sauvetage, planification de plongée et maîtrise technique confirmée.',
    },
  ];

  const schoolHighlights = [
    {
      title: 'Niveau 1 — Débuter en confiance',
      text: 'Premiers automatismes, théorie, stabilisation, communication sous l’eau et accès à 20 m accompagné.',
    },
    {
      title: 'Niveau 2 — Vers l’autonomie',
      text: 'Gestion de plongée, assistance, orientation, remontée et évolution progressive vers davantage d’autonomie.',
    },
    {
      title: 'Niveau 3 — Expertise et sécurité',
      text: 'Organisation de plongée, sécurité avancée, sauvetage, planification et autonomie confirmée.',
    },
  ];

  const seoPages = [
    {
      title: 'Baptême de plongée à La Foa',
      href: '/bapteme-plongee-la-foa',
      text: 'Première plongée encadrée dans le lagon de Ouano.',
    },
    {
      title: 'Plongée d’exploration à Ouano',
      href: '/plongee-exploration-ouano',
      text: 'Sorties pour plongeurs certifiés dans des sites exceptionnels.',
    },
    {
      title: 'Formation niveau 1',
      href: '/formation-plongee-niveau-1-nouvelle-caledonie',
      text: 'Apprenez à plonger en Nouvelle-Calédonie.',
    },
    {
      title: 'Centre de plongée à La Foa',
      href: '/centre-de-plongee-la-foa',
      text: 'Découvrez notre club et nos prestations.',
    },
  ];

  const faqs = [
    {
      q: 'Faut-il déjà avoir plongé ?',
      a: 'Non. Les baptêmes sont conçus pour les débutants qui souhaitent découvrir la plongée en toute confiance.',
    },
    {
      q: 'Où se déroulent les sorties ?',
      a: 'Les départs s’organisent dans la zone de Ouano, avec des sites choisis selon la météo, la mer et le niveau du groupe.',
    },
    {
      q: 'Comment réserver ?',
      a: 'Le plus simple est d’envoyer une demande avec votre date, le nombre de personnes et votre niveau de plongée.',
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <style>{`
        @keyframes waveGlow {
          0% { transform: translateX(-18%) translateY(0) scaleX(1); opacity: 0.18; }
          50% { transform: translateX(10%) translateY(6px) scaleX(1.08); opacity: 0.34; }
          100% { transform: translateX(-18%) translateY(0) scaleX(1); opacity: 0.18; }
        }

        @keyframes waveGlowReverse {
          0% { transform: translateX(12%) translateY(0) scaleX(1.05); opacity: 0.1; }
          50% { transform: translateX(-8%) translateY(-5px) scaleX(0.98); opacity: 0.2; }
          100% { transform: translateX(12%) translateY(0) scaleX(1.05); opacity: 0.1; }
        }
      `}</style>

      <header className="sticky top-0 z-50 overflow-hidden border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20">
          <div className="absolute inset-x-[-10%] bottom-[-28px] h-20 rounded-[100%] bg-cyan-300/10 blur-2xl animate-[waveGlow_9s_ease-in-out_infinite]" />
          <div className="absolute inset-x-[-6%] bottom-[-34px] h-16 rounded-[100%] border-t border-cyan-200/15 bg-gradient-to-r from-transparent via-cyan-200/10 to-transparent blur-xl animate-[waveGlowReverse_11s_ease-in-out_infinite]" />
        </div>

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Image
              src={logo}
              alt="Logo La Foa Plongée"
              width={56}
              height={56}
              className="h-14 w-14 rounded-xl object-contain shadow-lg"
              priority
            />
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Nouvelle-Calédonie</p>
              <h1 className="text-xl font-semibold">La Foa Plongée</h1>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-200 lg:flex">
            <a href="#experience" className="transition hover:text-cyan-300">L’expérience</a>
            <a href="#prestations" className="transition hover:text-cyan-300">Prestations</a>
            <a href="#tarifs" className="transition hover:text-cyan-300">Tarifs</a>
            <a href="#ecole" className="transition hover:text-cyan-300">École</a>
            <a href="#contact" className="transition hover:text-cyan-300">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-medium text-slate-950 transition hover:scale-[1.03]"
          >
            Demander une réservation
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.24),transparent_35%),linear-gradient(to_bottom,rgba(2,6,23,0.35),rgba(2,6,23,0.96))]" />

        <div className="absolute inset-0 z-0">
          <Image
            src={barriereCorail}
            alt="Barrière de corail et lagon de Ouano en Nouvelle-Calédonie"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-1 text-sm text-cyan-200">
              Club de plongée à La Foa · Départs vers Ouano
            </p>

            <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
              Vivez la plongée en Nouvelle-Calédonie dans un décor marin d’exception.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              La Foa Plongée propose des baptêmes, des explorations et des formations dans un esprit local,
              rassurant et professionnel, au cœur du lagon calédonien.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-cyan-400 px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.03]"
              >
                Réserver une sortie
              </a>
              <a
                href="#prestations"
                className="rounded-full border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/5"
              >
                Découvrir les prestations
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-2xl font-semibold">Ouano</p>
                <p className="text-sm text-slate-300">zone privilégiée</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-2xl font-semibold">UNESCO</p>
                <p className="text-sm text-slate-300">lagon classé</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-2xl font-semibold">Local</p>
                <p className="text-sm text-slate-300">club à taille humaine</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
            <div className="overflow-hidden rounded-[1.5rem]">
              <Image
                src={bateauOuano}
                alt="Bateau de plongée à Ouano en Nouvelle-Calédonie"
                width={1600}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">L’expérience</p>
            <h3 className="mt-4 text-3xl font-semibold md:text-4xl">
              Une plongée pensée comme un vrai moment d’évasion.
            </h3>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              La Foa Plongée valorise la beauté de la zone de Ouano, la qualité de l’encadrement et le plaisir
              de sortir en mer dans de bonnes conditions. L’objectif n’est pas seulement de plonger, mais de faire
              vivre une expérience mémorable, fluide et accessible.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Atmosphère</p>
              <p className="mt-4 text-2xl font-semibold">Chaleureuse, sûre et authentique</p>
              <p className="mt-4 text-slate-300">
                Une approche humaine pour faire découvrir la richesse des fonds marins avec sérieux et simplicité.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">À observer</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Tortues', 'Raies', 'Dauphins', 'Poissons tropicaux', 'Coraux'].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-2 text-sm text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="prestations" className="bg-white/[0.03] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Prestations</p>
          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h3 className="max-w-2xl text-3xl font-semibold md:text-4xl">
              Trois entrées simples pour répondre à tous les profils.
            </h3>
            <p className="max-w-xl text-slate-300">
              Baptême, exploration ou formation : choisissez la formule adaptée à votre niveau et à votre envie.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {offers.map((offer) => (
              <div
                key={offer.title}
                className="rounded-[2rem] border border-white/10 bg-slate-900 p-8 shadow-xl transition duration-500 hover:-translate-y-2 hover:scale-[1.01]"
              >
                <div className="text-4xl">{offer.icon}</div>
                <p className="mt-6 text-sm uppercase tracking-[0.28em] text-cyan-300">{offer.subtitle}</p>
                <h4 className="mt-3 text-2xl font-semibold">{offer.title}</h4>
                {offer.price && <p className="mt-2 text-lg font-semibold text-cyan-300">{offer.price}</p>}
                <p className="mt-4 leading-7 text-slate-300">{offer.description}</p>
                <div className="mt-6 space-y-3">
                  {offer.points.map((point) => (
                    <div key={point} className="rounded-2xl border border-white/10 px-4 py-3 text-sm text-slate-200">
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tarifs" className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Tarifs & formations</p>
        <h3 className="mt-4 text-3xl font-semibold md:text-4xl">Un tableau clair pour choisir rapidement.</h3>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900">
          <div className="grid grid-cols-4 gap-4 border-b border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-cyan-300">
            <div>Formation</div>
            <div>Nombre de plongées</div>
            <div>Tarif</div>
            <div>Déroulé</div>
          </div>
          {trainingLevels.map((training) => (
            <div
              key={training.level}
              className="grid grid-cols-4 gap-4 border-b border-white/10 px-6 py-5 text-sm text-slate-200 last:border-b-0"
            >
              <div className="font-semibold text-white">{training.level}</div>
              <div>{training.dives}</div>
              <div className="font-semibold text-cyan-300">{training.price}</div>
              <div>{training.details}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="ecole" className="bg-white/[0.03] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">École de plongée</p>
          <h3 className="mt-4 text-3xl font-semibold md:text-4xl">Formez-vous dans un cadre exceptionnel à Ouano.</h3>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Notre école de plongée accompagne chaque élève du Niveau 1 au Niveau 3 avec une pédagogie progressive,
            des petits groupes et un apprentissage en conditions réelles dans le lagon.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {schoolHighlights.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-xl"
              >
                <div className="h-56 w-full bg-cyan-300/10" />
                <div className="p-6">
                  <h4 className="text-2xl font-semibold">{item.title}</h4>
                  <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Guides & informations</p>
        <h3 className="mt-4 text-3xl font-semibold md:text-4xl">Préparez votre plongée à La Foa et Ouano.</h3>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Retrouvez nos pages dédiées pour découvrir le baptême de plongée à La Foa, les explorations à Ouano,
          la formation niveau 1 en Nouvelle-Calédonie et la présentation complète de notre centre de plongée.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {seoPages.map((page) => (
            <a
              key={page.href}
              href={page.href}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.07]"
            >
              <h4 className="text-xl font-semibold text-white">{page.title}</h4>
              <p className="mt-4 leading-7 text-slate-300">{page.text}</p>
              <span className="mt-6 inline-block text-cyan-300">Lire la page →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Plongée à La Foa</p>
        <h3 className="mt-4 text-3xl font-semibold md:text-4xl">
          Votre centre de plongée à La Foa et Ouano en Nouvelle-Calédonie
        </h3>

        <div className="mt-6 space-y-6 text-lg leading-8 text-slate-300">
          <p>
            La Foa Plongée est un club de plongée situé à La Foa, en Nouvelle-Calédonie, proposant des sorties vers
            la zone de Ouano, reconnue pour la richesse de son lagon. Que vous soyez débutant ou plongeur certifié,
            nous organisons des baptêmes de plongée, des explorations et des formations adaptées à votre niveau.
          </p>
          <p>
            Nos plongées à Ouano offrent un accès privilégié à des récifs coralliens préservés, où il est possible
            d’observer des tortues, des raies, des poissons tropicaux et une biodiversité exceptionnelle.
          </p>
          <p>
            Nous proposons également des formations de plongée du niveau 1 au niveau 3 en Nouvelle-Calédonie,
            permettant de progresser en toute confiance et d’acquérir une véritable autonomie sous l’eau.
          </p>
        </div>
      </section>

      <section id="faq" className="bg-white/[0.03] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">FAQ</p>
          <h3 className="mt-4 text-3xl font-semibold md:text-4xl">Les questions les plus fréquentes.</h3>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-[1.5rem] border border-white/10 bg-slate-900 p-6">
                <h4 className="text-xl font-semibold">{item.q}</h4>
                <p className="mt-4 leading-7 text-slate-300">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900 p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Contact</p>
            <h3 className="mt-4 text-3xl font-semibold">Préparez votre prochaine sortie en mer.</h3>
            <div className="mt-8 space-y-5 text-slate-300">
              <div>
                <p className="font-medium text-white">Téléphone</p>
                <p>+687 94 80 83</p>
              </div>
              <div>
                <p className="font-medium text-white">Email</p>
                <p>info@lafoaplongee.com</p>
              </div>
              <div>
                <p className="font-medium text-white">Localisation</p>
                <p>La Foa / zone de Ouano, Nouvelle-Calédonie</p>
              </div>
              <div>
                <p className="font-medium text-white">Conseil</p>
                <p>Précisez la date souhaitée, votre niveau, le nombre de personnes et le type de sortie recherché.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <form
              action="https://formspree.io/f/meevzzod"
              method="POST"
              onSubmit={async (e: any) => {
                e.preventDefault();
                setLoading(true);

                const form = e.currentTarget;
                const data = new FormData(form);

                try {
                  const res = await fetch('https://formspree.io/f/meevzzod', {
                    method: 'POST',
                    body: data,
                    headers: { Accept: 'application/json' },
                  });

                  if (res.ok) {
                    setSent(true);
                    form.reset();
                  }
                } finally {
                  setLoading(false);
                }
              }}
              className="grid gap-5 md:grid-cols-2"
            >
              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">Nom</span>
                <input
                  name="name"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 outline-none transition focus:border-cyan-300"
                  placeholder="Votre nom"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">Téléphone</span>
                <input
                  name="phone"
                  className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 outline-none transition focus:border-cyan-300"
                  placeholder="Votre numéro"
                />
              </label>

              <label className="block md:col-span-2">
                <span className="mb-2 block text-sm text-slate-300">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 outline-none transition focus:border-cyan-300"
                  placeholder="Votre email"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">Date souhaitée</span>
                <input
                  name="date"
                  type="date"
                  className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 outline-none transition focus:border-cyan-300"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">Nombre de personnes</span>
                <input
                  name="participants"
                  type="number"
                  min="1"
                  className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 outline-none transition focus:border-cyan-300"
                  placeholder="Ex : 2"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">Type de sortie</span>
                <select
                  name="trip_type"
                  className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 outline-none transition focus:border-cyan-300"
                >
                  <option value="">Sélectionnez</option>
                  <option value="Baptême">Baptême</option>
                  <option value="Exploration">Exploration</option>
                  <option value="Formation">Formation</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">Niveau de plongée</span>
                <select
                  name="level"
                  className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 outline-none transition focus:border-cyan-300"
                >
                  <option value="">Sélectionnez</option>
                  <option value="Débutant">Débutant</option>
                  <option value="Niveau 1">Niveau 1</option>
                  <option value="Niveau 2">Niveau 2</option>
                  <option value="Niveau 3">Niveau 3</option>
                  <option value="Autre certification">Autre certification</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">Hébergement souhaité</span>
                <select
                  name="accommodation"
                  className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 outline-none transition focus:border-cyan-300"
                >
                  <option value="">Sélectionnez</option>
                  <option value="Bungalow">Bungalow</option>
                  <option value="Camping">Camping (faré)</option>
                  <option value="Aucun">Aucun</option>
                </select>
              </label>

              <label className="block md:col-span-2">
                <span className="mb-2 block text-sm text-slate-300">Votre demande</span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 outline-none transition focus:border-cyan-300"
                  placeholder="Bonjour, je souhaite réserver une sortie…"
                />
              </label>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="mt-4 rounded-full bg-cyan-400 px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.03]"
                >
                  {loading ? 'Envoi...' : 'Envoyer la demande'}
                </button>

                {sent && (
                  <p className="mt-4 text-green-400">
                    Message envoyé ✅ Nous vous répondons rapidement.
                  </p>
                )}

                <p className="mt-4 text-sm text-slate-400">
                  Formulaire de contact actif. Vous recevrez des demandes plus précises avec la date souhaitée,
                  le nombre de participants, le type de sortie et le niveau de plongée.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-[60] flex items-center gap-3 rounded-full border border-white/10 bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-2xl shadow-emerald-950/40 transition hover:scale-[1.04] hover:bg-emerald-400"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-lg">💬</span>
        WhatsApp
      </a>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto mb-6 flex max-w-7xl items-center gap-4">
          <Image
            src={logo}
            alt="Logo La Foa Plongée"
            width={48}
            height={48}
            className="h-12 w-12 rounded-lg object-contain opacity-90"
          />
          <span className="text-sm uppercase tracking-[0.3em] text-cyan-300">La Foa Plongée</span>
        </div>

        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© La Foa Plongée — Site officiel</p>
          <p>Design responsive prêt à être enrichi avec vos photos, tarifs et contenus finaux</p>
        </div>
      </footer>
    </div>
  );
}
