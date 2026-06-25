import { motion } from 'framer-motion';
import { Smartphone, ShoppingBag, Users, Bell, Shield, Zap } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import CTAButton from '../components/CTAButton';
import FadeIn from '../components/FadeIn';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Création d'application mobile & web en Polynésie",
  "provider": { "@type": "Organization", "name": "CréaVibes" },
  "areaServed": { "@type": "Place", "name": "Polynésie française" },
  "description": "Développement d'applications mobiles et web sur mesure en Polynésie. Digitalisez votre activité.",
};

const useCases = [
  { icon: ShoppingBag, title: "Commandes en ligne", desc: "Vos clients commandent depuis leur téléphone, vous recevez tout sur votre tableau de bord." },
  { icon: Users, title: "Espace client", desc: "Fidélisez vos clients avec un espace dédié : historique, devis, réservations." },
  { icon: Bell, title: "Notifications push", desc: "Prévenez vos clients de vos offres et nouveautés directement sur leur écran." },
  { icon: Shield, title: "Gestion interne", desc: "Simplifiez votre quotidien : planning, stocks, suivi de tâches, facturation." },
  { icon: Zap, title: "Automatisation", desc: "Moins de saisie manuelle, plus de temps pour votre métier." },
  { icon: Smartphone, title: "iOS & Android", desc: "Une seule application qui fonctionne sur tous les téléphones de vos clients." },
];

export default function CreationApplication() {
  return (
    <>
      <SEOHead
        title="Création d'application mobile & web en Polynésie | CréaVibes"
        description="Développement d'applications mobiles et web sur mesure en Polynésie. Digitalisez votre activité. RDV visio gratuit."
        path="/creation-application-polynesie"
        jsonLd={serviceSchema}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <FadeIn>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Création d'application mobile & web en Polynésie
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Digitalisez votre activité avec une application sur-mesure. Réservation, gestion de commandes, espace client — on développe la solution qui vous simplifie la vie et qui plaît à vos clients.
              </p>
              <CTAButton size="lg" />
              <p className="mt-3 text-sm text-gray-500">Appel découverte gratuit — 30 min</p>
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

      {/* How we work */}
      <section className="py-16 md:py-24 bg-gray-50">
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
                <div className="flex gap-4 items-start p-5 bg-white rounded-xl border border-gray-200">
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

      {/* CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Vous avez une idée d'application ?
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              Parlons-en ensemble. On vous aide à transformer votre idée en application concrète, adaptée à votre budget.
            </p>
            <CTAButton size="lg" />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
