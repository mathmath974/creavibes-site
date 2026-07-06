import { motion } from 'framer-motion';
import { Globe, Search, Gauge, ShoppingCart, Layers, Smartphone, Check } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import CTAButton from '../components/CTAButton';
import FadeIn from '../components/FadeIn';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Création de site internet à Tahiti",
  "provider": { "@type": "Organization", "name": "CréaVibes" },
  "areaServed": { "@type": "Place", "name": "Tahiti, Polynésie française" },
  "description": "Création de site internet rapide et optimisé à Tahiti et en Polynésie. Un site qui transforme vos visiteurs en clients.",
};

const features = [
  { icon: Gauge, title: "Rapide", description: "Temps de chargement optimal, même avec la connexion polynésienne" },
  { icon: Smartphone, title: "Mobile-first", description: "Parfait sur téléphone — là où vos clients vous cherchent" },
  { icon: Search, title: "Référencé sur Google", description: "Visible dans les résultats de recherche à Tahiti et en Polynésie" },
  { icon: ShoppingCart, title: "E-commerce", description: "Vendez en ligne avec un système de paiement adapté au marché local" },
  { icon: Layers, title: "Sur-mesure", description: "Pas de template générique — un site à votre image, pour votre activité" },
  { icon: Globe, title: "Multilingue", description: "Français, anglais, tahitien — touchez tous vos publics" },
];

export default function CreationSite() {
  return (
    <>
      <SEOHead
        title="Création de site internet à Tahiti | CréaVibes"
        description="Création de site internet rapide et optimisé à Tahiti et en Polynésie. Un site qui transforme vos visiteurs en clients. RDV visio gratuit."
        path="/creation-site-internet-tahiti"
        jsonLd={serviceSchema}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-sky-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <FadeIn>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Création de site internet à Tahiti
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Un site web rapide, moderne et optimisé qui transforme vos visiteurs en clients. Site vitrine, e-commerce ou réservation — adapté à votre activité et au marché polynésien.
              </p>
              <CTAButton size="lg" />
              <p className="mt-3 text-sm text-gray-500">Appel découverte gratuit — 30 min</p>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
                  alt="Écran affichant un site web professionnel avec tableau de bord analytique"
                  className="w-full h-auto"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Un site pensé pour votre réussite
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              Chaque site que l'on crée est conçu pour attirer des clients et faire grandir votre activité à Tahiti.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feat, i) => (
              <FadeIn key={feat.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="p-6 rounded-xl border border-gray-200 hover:border-emerald-200 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <feat.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{feat.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feat.description}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <FadeIn className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Comment ça se passe ?</h2>
          </FadeIn>

          <div className="space-y-6">
            {[
              { step: "1", title: "Appel découverte", desc: "On discute de votre activité, vos objectifs et vos besoins. C'est gratuit." },
              { step: "2", title: "Proposition et maquette", desc: "On vous envoie une proposition claire avec un aperçu visuel de votre futur site." },
              { step: "3", title: "Développement", desc: "On construit votre site. Vous validez à chaque étape." },
              { step: "4", title: "Mise en ligne", desc: "Votre site est live, optimisé et prêt à recevoir vos premiers visiteurs." },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.1}>
                <div className="flex gap-4 items-start p-5 bg-white rounded-xl border border-gray-200">
                  <div className="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
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
              Prêt à avoir un site qui vous ressemble ?
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              Réservez votre appel découverte gratuit. On parle de votre projet et on vous montre ce qu'on peut faire pour vous.
            </p>
            <CTAButton size="lg" />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
