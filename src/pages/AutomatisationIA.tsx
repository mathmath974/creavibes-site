import { motion } from 'framer-motion';
import { Cpu, MessageSquare, FileText, BarChart3, Clock, Repeat, Database, ChevronDown } from 'lucide-react';
import { useState } from 'react';
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
    question: "Faut-il être technique pour utiliser l'automatisation IA ?",
    answer: "Non. C'est nous qui configurons tout. On vous forme sur l'utilisation (c'est simple, promis) et on reste disponible pour ajuster. Votre seul travail : nous dire ce qui vous prend du temps au quotidien.",
  },
  {
    question: "Combien coûte une automatisation IA pour une PME à Tahiti ?",
    answer: "Une automatisation simple (chatbot, relances automatiques) démarre à partir de 50 000 F. Un projet plus complet (CRM intelligent, reporting automatisé, exploitation de données) se situe entre 100 000 F et 300 000 F. L'investissement se rentabilise en 1 à 2 mois grâce au temps gagné.",
  },
  {
    question: "Quels types de tâches peut-on automatiser concrètement ?",
    answer: "Tout ce qui est répétitif et chronophage : réponses aux questions fréquentes, envoi de devis et factures, relances clients, tri d'emails, génération de posts pour les réseaux sociaux, reporting mensuel, mise à jour de fichiers clients. Si vous faites la même chose plus de 3 fois par semaine, on peut probablement l'automatiser.",
  },
  {
    question: "L'IA peut-elle exploiter les données de mon entreprise ?",
    answer: "Oui. On peut mettre en place des tableaux de bord intelligents qui analysent vos ventes, votre trafic ou vos performances. L'IA identifie les tendances, vous alerte sur les anomalies et vous propose des recommandations. Vos données deviennent un atout stratégique au lieu de dormir dans un fichier Excel.",
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

const concreteExamples = [
  { task: "Répondre aux messages Facebook (questions fréquentes)", before: "30 min/jour", after: "Automatique 24h/24" },
  { task: "Rédiger les publications réseaux sociaux", before: "3h/semaine", after: "15 min de validation" },
  { task: "Envoyer les devis après une demande", before: "Délai 24-48h", after: "Envoi immédiat" },
  { task: "Relancer les prospects sans réponse", before: "Oublié 1 fois sur 2", after: "Relance auto J+2 et J+7" },
  { task: "Générer le reporting mensuel", before: "2h de tableur", after: "Rapport automatique le 1er du mois" },
  { task: "Trier et classer les emails entrants", before: "20 min/jour", after: "Tri intelligent automatique" },
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
        title="Automatisation et IA pour entreprises à Tahiti | CréaVibes"
        description="Outils d'automatisation et intelligence artificielle pour PME à Tahiti : agents IA, chatbots, automatisation des tâches. Devis gratuit."
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
                Agents IA, chatbots et outils d'automatisation pour les entreprises à Tahiti : gagnez des heures chaque semaine en automatisant vos tâches répétitives. Intelligence artificielle pour PME, exploitation de vos données et CRM intelligent — on configure tout, vous profitez du temps gagné.
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

      {/* Concrete examples table */}
      <section className="py-16 md:py-24 bg-violet-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <FadeIn className="text-center mb-10">
            <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mx-auto mb-5">
              <Database className="w-6 h-6 text-violet-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Exemples concrets : avant et après automatisation
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              Voici ce que l'automatisation change concrètement au quotidien pour les entreprises à Tahiti
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200 p-4 text-sm font-semibold text-gray-700">
                <span>Tâche</span>
                <span className="text-center">Avant</span>
                <span className="text-center">Après IA</span>
              </div>
              {concreteExamples.map((ex, i) => (
                <div key={i} className={`grid grid-cols-3 p-4 text-sm items-center ${i < concreteExamples.length - 1 ? 'border-b border-gray-100' : ''}`}>
                  <span className="text-gray-800 font-medium pr-2">{ex.task}</span>
                  <span className="text-center text-gray-500">{ex.before}</span>
                  <span className="text-center text-violet-600 font-medium">{ex.after}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn className="text-center mt-8">
            <CTAButton />
          </FadeIn>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <FadeIn className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Comment ça marche ?</h2>
            <p className="text-gray-600">Pas besoin d'être technique — on s'occupe de tout.</p>
          </FadeIn>

          <div className="space-y-6">
            {[
              { step: "1", title: "On identifie les tâches répétitives", desc: "Ensemble, on liste tout ce qui vous prend du temps et qui pourrait tourner tout seul." },
              { step: "2", title: "On propose des solutions", desc: "On vous montre concrètement ce que l'IA et l'exploitation de vos données peuvent faire pour vous." },
              { step: "3", title: "On met en place", desc: "On configure les automatisations, on les connecte à vos outils existants." },
              { step: "4", title: "Vous profitez du temps gagné", desc: "Les automatisations tournent, vous êtes formé, et on reste disponible pour ajuster." },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.1}>
                <div className="flex gap-4 items-start p-5 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="w-10 h-10 bg-violet-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
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
