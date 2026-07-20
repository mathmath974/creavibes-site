import { motion } from 'framer-motion';
import {
  Cpu, MessageSquare, FileText, BarChart3, Clock, Repeat, Database, ChevronDown,
  Send, Receipt, CalendarCheck, Boxes, Hotel, UtensilsCrossed, ShoppingBag,
  Hammer, Briefcase, Search, Wrench, Rocket, GraduationCap, Link2,
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import CTAButton from '../components/CTAButton';
import FadeIn from '../components/FadeIn';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Automatisation et IA pour entreprises à Tahiti",
  "provider": { "@type": "Organization", "name": "CréaVibes" },
  "areaServed": { "@type": "Place", "name": "Tahiti, Polynésie française" },
  "description": "Automatisation des tâches pour les entreprises à Tahiti : agents IA, chatbots, outils d'automatisation et intelligence artificielle pour PME en Polynésie.",
};

const faqData = [
  {
    question: "Combien coûte une automatisation IA pour une PME à Tahiti ?",
    answer: "Une automatisation simple (chatbot, relances automatiques de devis) démarre à partir de 50 000 F. Un projet plus complet (agent IA, CRM intelligent, reporting automatisé, suivi de stocks) se situe entre 100 000 F et 300 000 F. L'investissement se rentabilise en 1 à 2 mois grâce aux heures gagnées chaque semaine. On vous remet un devis gratuit et détaillé après l'audit, sans surprise.",
  },
  {
    question: "Combien de temps faut-il pour mettre en place une automatisation ?",
    answer: "Une automatisation simple (relance de devis, chatbot de base, prise de rendez-vous) est opérationnelle en 1 à 2 semaines. Un projet plus complet avec plusieurs outils connectés et un agent IA prend généralement 3 à 6 semaines. On vous donne un calendrier précis dès l'audit, et on avance par étapes pour que vous voyiez les premiers résultats rapidement.",
  },
  {
    question: "Est-ce que l'automatisation IA est réservée aux grandes entreprises ?",
    answer: "Non, c'est même souvent l'inverse. Les petites entreprises et patentés de Polynésie sont ceux qui gagnent le plus : moins de personnel, plus de tâches répétitives à gérer seul. Une pension de famille, un snack, un artisan ou un cabinet de services peut automatiser ses relances, sa facturation ou ses rendez-vous sans aucune équipe technique. On configure tout, on vous forme, et ça tourne seul.",
  },
  {
    question: "Quels outils utilisez-vous pour l'automatisation en Polynésie ?",
    answer: "On choisit les outils selon votre besoin et vos outils existants : Make et n8n pour connecter vos applications, des agents IA basés sur les modèles récents d'OpenAI et Anthropic pour le traitement du langage, des chatbots intégrés à Messenger et WhatsApp, Google Sheets ou Airtable comme base légère, et des connecteurs vers votre CRM ou votre site. On privilégie les solutions durables et compatibles avec les réalités locales.",
  },
  {
    question: "Est-ce que l'automatisation IA est éligible à l'aide ACN ?",
    answer: "Oui, dans de nombreux cas. L'Aide à la Création Numérique (ACN) de la DGEN peut financer jusqu'à 50 % d'un projet numérique en Polynésie, dont la conception d'outils sur mesure comme une application ou une automatisation intégrée. Il faut déposer la demande avant de lancer le projet. On vous fournit le devis détaillé et les justificatifs nécessaires. Vérifiez toujours les conditions à jour auprès de la DGEN.",
  },
];

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqData.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
    },
  })),
};

const useCases = [
  { icon: MessageSquare, title: "Support client automatisé", desc: "Un chatbot intelligent qui répond aux questions fréquentes de vos clients 24h/24, même quand vous dormez." },
  { icon: FileText, title: "Création de contenu", desc: "Génération de textes, de descriptions produits, de posts pour vos réseaux — adaptés à votre ton." },
  { icon: BarChart3, title: "Analyse et reporting", desc: "Des rapports automatiques sur vos ventes, votre trafic ou vos performances — sans y passer des heures." },
  { icon: Repeat, title: "Process automatisés", desc: "Facturation, relances, mises à jour de stock, envoi de devis — tout ce qui est répétitif peut être automatisé." },
  { icon: Clock, title: "Gain de temps", desc: "En moyenne, nos clients gagnent 5 à 10 heures par semaine sur les tâches administratives." },
  { icon: Cpu, title: "CRM intelligent", desc: "Votre fichier client se met à jour tout seul, les relances partent au bon moment." },
];

const detailedUseCases = [
  {
    icon: Send,
    title: "Relance automatique des devis",
    desc: "Dès qu'un prospect demande un devis, l'agent IA prépare une proposition à partir de vos tarifs, puis relance automatiquement à J+2 et J+7 si aucune réponse. Fini les devis oubliés dans un coin.",
    before: "1 devis sur 2 oublié",
    after: "Relance auto J+2 et J+7",
    gain: "~3 h / semaine",
  },
  {
    icon: MessageSquare,
    title: "Réponses automatiques aux messages clients",
    desc: "Un chatbot connecté à votre page Facebook et à WhatsApp répond aux questions fréquentes (horaires, tarifs, disponibilités) et collecte les infos utiles. Vous ne traitez que les vraies demandes.",
    before: "30 min / jour",
    after: "5 min de validation",
    gain: "~3 h / semaine",
  },
  {
    icon: Receipt,
    title: "Génération de factures",
    desc: "À chaque commande ou fin de mission, la facture est générée automatiquement, numérotée, envoyée au client et archivée. Plus de risque d'oubli ni d'erreur de saisie.",
    before: "2 h / mois",
    after: "Généré en 1 clic",
    gain: "~2 h / mois",
  },
  {
    icon: CalendarCheck,
    title: "Prise de rendez-vous",
    desc: "Vos clients réservent seuls en ligne selon vos disponibilités. L'outil envoie la confirmation, le rappel la veille et ajoute le RDV à votre agenda. Plus besoin d'aller-retour au téléphone.",
    before: "Allers-retours téléphone",
    after: "Réservation 24h/24",
    gain: "~4 h / semaine",
  },
  {
    icon: Boxes,
    title: "Suivi des stocks",
    desc: "Chaque vente met à jour votre stock en temps réel. L'agent IA vous alerte quand un produit descend sous un seuil et propose une commande de réapprovisionnement.",
    before: "Inventaire mensuel 4 h",
    after: "Alertes automatiques",
    gain: "~4 h / mois",
  },
  {
    icon: BarChart3,
    title: "Reporting mensuel",
    desc: "Le 1er de chaque mois, vous recevez un rapport clair : chiffre d'affaires, meilleures ventes, provenance des demandes, taux de transformation. Vos données deviennent un atout stratégique.",
    before: "2 h de tableur",
    after: "Rapport auto le 1er",
    gain: "~2 h / mois",
  },
];

const sectors = [
  {
    icon: Hotel,
    title: "Hôtellerie et pension de famille",
    desc: "Réservations automatiques, envoi des confirmations et rappels, réponses aux questions fréquentes (tarifs, disponibilités, accès), suivi des avis clients. Le chatbot répond en français et en anglais, 24h/24, pendant que vous gérez l'accueil.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restauration",
    desc: "Prise de commandes en ligne pour le click & collect, envoi automatique du menu aux curieux sur Messenger, relance des clients pour déposer un avis. Le reporting mensuel vous montre vos plats les plus vendus sans ouvrir un tableur.",
  },
  {
    icon: ShoppingBag,
    title: "Commerce de détail",
    desc: "Mise à jour automatique des stocks à chaque vente, alertes de réapprovisionnement, génération de visuels pour vos promotions, relance des clients qui n'ont pas finalisé leur panier. Vos données de vente deviennent un vrai tableau de bord.",
  },
  {
    icon: Hammer,
    title: "Artisan et patente",
    desc: "Devis pré-remplis à partir de vos tarifs, relances automatiques, facturation à la fin du chantier, agenda partagé pour vos interventions. L'agent IA rédige même les descriptions de vos réalisations pour vos réseaux sociaux.",
  },
  {
    icon: Briefcase,
    title: "Cabinet de services",
    desc: "Prise de rendez-vous en ligne, envoi des rappels, collecte des documents clients avant la consultation, génération de comptes-rendus, suivi des relances impayées. Vous gagnez un assistant qui ne dort jamais.",
  },
];

const steps = [
  {
    icon: Search,
    step: "1",
    title: "Audit de vos tâches répétitives",
    desc: "En visio, on passe en revue ce qui vous prend du temps chaque semaine : messages clients, devis, factures, agenda, stocks, reporting. On identifie ensemble les tâches que l'on peut automatiser et on estime le gain de temps attendu.",
  },
  {
    icon: Wrench,
    step: "2",
    title: "Choix des outils",
    desc: "Selon votre activité et vos outils actuels, on sélectionne les solutions adaptées : chatbot, agent IA, connecteurs vers votre CRM ou votre site, base de données légère. On vous explique chaque choix en langage simple, sans jargon.",
  },
  {
    icon: Rocket,
    step: "3",
    title: "Mise en place",
    desc: "On configure les automatisations, on les connecte à vos outils existants et on les teste en conditions réelles. Vous validez chaque étape. Une automatisation simple est opérationnelle en 1 à 2 semaines, un projet complet en 3 à 6 semaines.",
  },
  {
    icon: GraduationCap,
    step: "4",
    title: "Formation et suivi",
    desc: "On vous forme à l'utilisation (c'est simple, promis), on documente tout, et on reste disponible pour ajuster. Les automatisations tournent seules, et on vérifie chaque mois que tout fonctionne comme prévu.",
  },
];

function FAQItem({ question, answer, defaultOpen = false }: { question: string; answer: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-gray-50 transition"
      >
        <span className="font-semibold text-gray-900">{question}</span>
        <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 text-gray-600 leading-relaxed">{answer}</div>
      )}
    </div>
  );
}

export default function AutomatisationIA() {
  return (
    <>
      <SEOHead
        title="Automatisation et IA pour entreprises à Tahiti - gagnez des heures"
        description="Agents IA, chatbots et automatisation des tâches pour les PME de Polynésie. Cas d'usage concrets, devis gratuit et RDV visio de 30 min."
        path="/automatisation-ia-tahiti"
        jsonLd={[serviceSchema, faqPageSchema]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <FadeIn>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Automatisation et IA pour les entreprises de Polynésie
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Agents IA, chatbots et outils d'automatisation pour les entreprises à Tahiti : gagnez des heures chaque semaine en automatisant vos tâches répétitives. Intelligence artificielle pour PME en Polynésie, exploitation de vos données et CRM intelligent — on configure tout, vous profitez du temps gagné.
              </p>
              <CTAButton size="lg" />
              <p className="mt-3 text-sm text-gray-500">Devis gratuit — appel découverte de 30 min</p>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
                  alt="Interface d'intelligence artificielle avec visualisation de données et algorithmes"
                  className="w-full h-auto"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Agents IA, chatbots et automatisation — cas concrets
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              Des outils d'automatisation pour les entreprises de Polynésie, pas de la science-fiction
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {useCases.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="p-6 rounded-xl border border-gray-200 hover:border-violet-200 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-violet-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Cas d'usage concrets détaillés */}
      <section className="py-16 md:py-24 bg-violet-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-12">
            <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mx-auto mb-5">
              <Database className="w-6 h-6 text-violet-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Cas d'usage concrets avec gain de temps chiffré
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Voici six automatisations que l'on met en place pour les entreprises à Tahiti, avec le gain de temps estimé. L'automatisation des tâches vous libère pour ce qui compte vraiment : vos clients et votre activité.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {detailedUseCases.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="h-full p-6 rounded-xl bg-white border border-gray-200 hover:border-violet-200 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-violet-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 pt-1">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.desc}</p>
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Avant</p>
                      <p className="text-sm text-gray-500">{item.before}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Après IA</p>
                      <p className="text-sm text-violet-600 font-medium">{item.after}</p>
                    </div>
                  </div>
                  <div className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600">
                    <Clock className="w-4 h-4" />
                    Gain : {item.gain}
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-10">
            <CTAButton />
          </FadeIn>
        </div>
      </section>

      {/* Par secteur d'activité */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <FadeIn className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Par secteur d'activité en Polynésie
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              L'automatisation s'adapte à votre métier. Voici des exemples concrets pour les principales activités du fenua.
            </p>
          </FadeIn>

          <div className="space-y-4">
            {sectors.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -2 }}
                  className="flex flex-col sm:flex-row gap-5 p-6 rounded-xl border border-gray-200 hover:border-violet-200 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Comment on procède */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <FadeIn className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Comment on procède</h2>
            <p className="text-gray-600">Pas besoin d'être technique — on s'occupe de tout, de l'audit à la formation.</p>
          </FadeIn>

          <div className="space-y-6">
            {steps.map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.1}>
                <div className="flex gap-4 items-start p-6 bg-white rounded-xl border border-gray-200 hover:border-violet-200 transition">
                  <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-violet-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-7 h-7 bg-violet-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {item.step}
                      </span>
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-10">
            <CTAButton />
          </FadeIn>
        </div>
      </section>

      {/* Liens internes / aller plus loin */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <FadeIn className="text-center mb-10">
            <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mx-auto mb-5">
              <Link2 className="w-6 h-6 text-violet-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Aller plus loin</h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              L'automatisation prend tout son sens quand elle est reliée à vos autres outils numériques.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeIn>
              <Link
                to="/creation-application-polynesie"
                className="block p-6 rounded-xl border border-gray-200 hover:border-violet-200 hover:shadow-md transition-all group"
              >
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-violet-600 transition">
                  Créer une application mobile en Polynésie
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Une application sur mesure (réservations, commandes, fidélité) est le parfait terrain pour vos automatisations : l'agent IA s'y connecte et fait travailler l'outil pour vous, de jour comme de nuit.
                </p>
              </Link>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Link
                to="/blog/aide-creation-numerique-acn-polynesie"
                className="block p-6 rounded-xl border border-gray-200 hover:border-violet-200 hover:shadow-md transition-all group"
              >
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-violet-600 transition">
                  Aide à la Création Numérique (ACN) : jusqu'à 50 % financé
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  L'ACN de la DGEN peut financer jusqu'à 50 % de votre projet numérique en Polynésie. Conditions, montants et démarches expliqués en détail dans notre article dédié.
                </p>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Questions fréquentes — Automatisation IA à Tahiti
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              Tout ce que les PME polynésiennes nous demandent avant de se lancer.
            </p>
          </FadeIn>

          <div className="space-y-3">
            {faqData.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <FAQItem question={faq.question} answer={faq.answer} defaultOpen={i === 0} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Prêt à gagner du temps chaque semaine ?
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              Demandez votre devis gratuit. On identifie ensemble les automatisations les plus utiles pour votre activité à Tahiti.
            </p>
            <CTAButton size="lg" />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
