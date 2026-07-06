import { motion } from 'framer-motion';
import { Smartphone, ShoppingBag, Users, Bell, Shield, Zap, Code, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import CTAButton from '../components/CTAButton';
import FadeIn from '../components/FadeIn';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Développement d'application mobile à Tahiti",
  "provider": { "@type": "Organization", "name": "CréaVibes" },
  "areaServed": { "@type": "Place", "name": "Polynésie française" },
  "description": "Créer une application mobile à Tahiti : développement iOS/Android, application web sur mesure, PWA et logiciel personnalisé en Polynésie.",
};

const faqData = [
  {
    question: "Combien coûte une application mobile ou web en Polynésie ?",
    answer: "Le prix varie selon la complexité : une application simple (gestion de commandes, espace client) démarre autour de 500 000 F. Une application plus avancée (marketplace, système de réservation multi-utilisateurs) peut aller de 800 000 F à 2 millions. On établit un devis gratuit précis après l'appel découverte.",
  },
  {
    question: "Quelle différence entre une application web et une application mobile ?",
    answer: "Une application web fonctionne dans le navigateur (comme un site, mais avec des fonctionnalités avancées). Une application mobile se télécharge depuis l'App Store ou Google Play. L'avantage d'une appli mobile : notifications push, accès hors-ligne, intégration caméra/GPS. On vous conseille la meilleure option selon votre besoin.",
  },
  {
    question: "Développez-vous des logiciels personnalisés pour les entreprises ?",
    answer: "Oui. Nos logiciels personnalisés en Polynésie sont conçus sur-mesure pour votre activité : gestion de stocks, suivi de chantiers, planification d'équipes, CRM, facturation automatisée. On part de votre process existant et on le digitalise.",
  },
  {
    question: "Combien de temps faut-il pour développer une application ?",
    answer: "Comptez 6 à 12 semaines pour une application standard. Un projet plus complexe (multi-rôles, intégrations tierces) peut prendre 3 à 5 mois. Vous recevez des démos régulières tout au long du développement.",
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
  { icon: ShoppingBag, title: "Commandes en ligne", desc: "Vos clients commandent depuis leur téléphone, vous recevez tout sur votre tableau de bord." },
  { icon: Users, title: "Espace client", desc: "Fidélisez vos clients avec un espace dédié : historique, devis, réservations." },
  { icon: Bell, title: "Notifications push", desc: "Prévenez vos clients de vos offres et nouveautés directement sur leur écran." },
  { icon: Shield, title: "Gestion interne", desc: "Simplifiez votre quotidien : planning, stocks, suivi de tâches, facturation." },
  { icon: Zap, title: "Automatisation", desc: "Moins de saisie manuelle, plus de temps pour votre métier." },
  { icon: Smartphone, title: "iOS & Android", desc: "Une seule application qui fonctionne sur tous les téléphones de vos clients." },
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

export default function CreationApplication() {
  return (
    <>
      <SEOHead
        title="Création d'application mobile en Polynésie | Devis — CréaVibes"
        description="Créer une application mobile à Tahiti : développement d'appli iOS/Android, application web sur mesure, PWA et logiciel personnalisé en Polynésie. Devis gratuit."
        path="/creation-application-polynesie"
        jsonLd={[serviceSchema, faqPageSchema]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <FadeIn>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Créer une application mobile à Tahiti
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Développement d'application mobile en Polynésie : applications iOS et Android, application web sur mesure, PWA et logiciels personnalisés. Que vous souhaitiez digitaliser votre activité ou lancer un nouveau service, on développe la solution adaptée à votre budget et à vos clients.
              </p>
              <CTAButton size="lg" />
              <p className="mt-3 text-sm text-gray-500">Devis gratuit — appel découverte de 30 min</p>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
                  alt="Mains tenant un smartphone affichant une application mobile moderne avec interface colorée"
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
              Qu'est-ce qu'une appli peut faire pour vous ?
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              Quelques exemples concrets pour les entreprises de Polynésie
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {useCases.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="p-6 rounded-xl border border-gray-200 hover:border-amber-200 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-amber-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Applications sur-mesure et logiciels personnalisés */}
      <section className="py-16 md:py-24 bg-amber-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-5">
                  <Code className="w-6 h-6 text-amber-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Applications sur-mesure et logiciels personnalisés
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Votre activité est unique — vos outils devraient l'être aussi. Nos logiciels personnalisés en Polynésie sont développés spécifiquement pour vos besoins métier, pas un logiciel générique que vous devez tordre dans tous les sens.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Gestion de stocks pour un importateur, planning de chantiers pour un artisan, système de réservation multi-sites pour un prestataire touristique, outil de suivi de production pour un traiteur — on s'adapte à votre réalité polynésienne.
                </p>
                <CTAButton size="md" />
              </div>
              <div className="space-y-4">
                {[
                  "Conçu autour de VOS process, pas l'inverse",
                  "Interface simple que vos équipes adoptent sans formation complexe",
                  "Accessible sur ordinateur, tablette et mobile",
                  "Évolutif : on ajoute des fonctions quand votre business grandit",
                  "Hébergé en cloud — accessible depuis toutes les îles",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-white rounded-lg">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* How we work */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <FadeIn className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Notre approche</h2>
          </FadeIn>

          <div className="space-y-6">
            {[
              { step: "1", title: "On comprend votre besoin", desc: "Appel découverte pour identifier ce qui va vraiment vous aider au quotidien." },
              { step: "2", title: "On conçoit ensemble", desc: "Maquettes visuelles pour valider l'ergonomie et le design avant de coder." },
              { step: "3", title: "On développe", desc: "Développement progressif avec des démos régulières. Vous suivez l'avancement." },
              { step: "4", title: "On déploie et on accompagne", desc: "Publication sur les stores, formation et support après livraison." },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.1}>
                <div className="flex gap-4 items-start p-5 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
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
              Questions fréquentes — Applications et logiciels en Polynésie
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
              Vous avez une idée d'application ?
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              Parlons-en ensemble. On vous aide à transformer votre idée en application concrète, adaptée à votre budget. Devis gratuit.
            </p>
            <CTAButton size="lg" />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
