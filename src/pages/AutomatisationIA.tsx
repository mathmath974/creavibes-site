import { motion } from 'framer-motion';
import { Cpu, MessageSquare, FileText, BarChart3, Clock, Repeat } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import CTAButton from '../components/CTAButton';
import FadeIn from '../components/FadeIn';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Automatisation IA pour entreprises à Tahiti",
  "provider": { "@type": "Organization", "name": "CréaVibes" },
  "areaServed": { "@type": "Place", "name": "Tahiti, Polynésie française" },
  "description": "Automatisez vos process, support client et contenu grâce à l'IA. Gagnez des heures chaque semaine.",
};

const useCases = [
  { icon: MessageSquare, title: "Support client automatisé", desc: "Un chatbot intelligent qui répond aux questions fréquentes de vos clients 24h/24, même quand vous dormez." },
  { icon: FileText, title: "Création de contenu", desc: "Génération de textes, de descriptions produits, de posts pour vos réseaux — adaptés à votre ton." },
  { icon: BarChart3, title: "Analyse et reporting", desc: "Des rapports automatiques sur vos ventes, votre trafic ou vos performances — sans y passer des heures." },
  { icon: Repeat, title: "Process automatisés", desc: "Facturation, relances, mises à jour de stock, envoi de devis — tout ce qui est répétitif peut être automatisé." },
  { icon: Clock, title: "Gain de temps", desc: "En moyenne, nos clients gagnent 5 à 10 heures par semaine sur les tâches administratives." },
  { icon: Cpu, title: "CRM intelligent", desc: "Votre fichier client se met à jour tout seul, les relances partent au bon moment." },
];

export default function AutomatisationIA() {
  return (
    <>
      <SEOHead
        title="Automatisation IA pour entreprises à Tahiti | CréaVibes"
        description="Automatisez vos process, support client et contenu grâce à l'IA. Gagnez des heures chaque semaine. RDV visio gratuit à Tahiti."
        path="/automatisation-ia-tahiti"
        jsonLd={serviceSchema}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <FadeIn>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Automatisation IA pour entreprises à Tahiti
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Gagnez des heures chaque semaine : on automatise vos process, votre support client, la création de contenu et votre CRM grâce à l'intelligence artificielle. Plus besoin de faire le perroquet — laissez l'IA bosser pour vous.
              </p>
              <CTAButton size="lg" />
              <p className="mt-3 text-sm text-gray-500">Appel découverte gratuit — 30 min</p>
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
              Qu'est-ce qu'on peut automatiser pour vous ?
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              Des solutions concrètes, pas de la science-fiction
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

      {/* How it works */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <FadeIn className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Comment ça marche ?</h2>
            <p className="text-gray-600">Pas besoin d'être technique — on s'occupe de tout.</p>
          </FadeIn>

          <div className="space-y-6">
            {[
              { step: "1", title: "On identifie les tâches répétitives", desc: "Ensemble, on liste tout ce qui vous prend du temps et qui pourrait tourner tout seul." },
              { step: "2", title: "On propose des solutions", desc: "On vous montre concrètement ce que l'IA peut faire pour vous, avec des exemples." },
              { step: "3", title: "On met en place", desc: "On configure les automatisations, on les connecte à vos outils existants." },
              { step: "4", title: "Vous profitez du temps gagné", desc: "Les automatisations tournent, vous êtes formé, et on reste disponible pour ajuster." },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.1}>
                <div className="flex gap-4 items-start p-5 bg-white rounded-xl border border-gray-200">
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

      {/* CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Prêt à gagner du temps chaque semaine ?
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              Réservez votre appel découverte. On identifie ensemble les automatisations les plus utiles pour votre activité.
            </p>
            <CTAButton size="lg" />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
