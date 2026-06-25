import { motion } from 'framer-motion';
import { Image, BarChart3, MessageCircle, Calendar, TrendingUp, Check } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import CTAButton from '../components/CTAButton';
import FadeIn from '../components/FadeIn';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Community management à Tahiti",
  "provider": { "@type": "Organization", "name": "CréaVibes" },
  "areaServed": { "@type": "Place", "name": "Tahiti, Polynésie française" },
  "description": "Gestion de votre page Facebook et Instagram à Tahiti : 8 publications/mois, visuels pros et stratégie, 18 000 F/mois sans engagement.",
  "offers": {
    "@type": "Offer",
    "price": "18000",
    "priceCurrency": "XPF",
    "description": "8 publications/mois, visuels professionnels, stratégie personnalisée, sans engagement",
  },
};

const included = [
  "8 publications par mois (Facebook + Instagram)",
  "Visuels professionnels créés sur-mesure",
  "Stratégie de contenu adaptée à votre activité",
  "Réponses aux commentaires et messages",
  "Rapport mensuel de performance",
  "Un interlocuteur dédié qui connaît votre business",
];

export default function CommunityManagement() {
  return (
    <>
      <SEOHead
        title="Community management à Tahiti — Gestion page Facebook & Instagram | CréaVibes"
        description="Gestion de votre page Facebook et Instagram à Tahiti : 8 publications/mois, visuels pros et stratégie, 18 000 F/mois sans engagement. RDV visio gratuit."
        path="/community-management-tahiti"
        jsonLd={serviceSchema}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <FadeIn>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Community management à Tahiti
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Votre page Facebook & Instagram gérée de A à Z par des pros qui connaissent le marché polynésien. Vous gérez votre activité, on s'occupe de votre image en ligne.
              </p>
              <div className="bg-white border-2 border-[#0ea5e9] rounded-xl p-5 mb-8 inline-block">
                <div className="text-3xl font-bold text-gray-900">18 000 F<span className="text-base font-normal text-gray-500">/mois</span></div>
                <p className="text-sm text-gray-600 mt-1">Sans engagement — résiliable à tout moment</p>
              </div>
              <div className="block">
                <CTAButton size="lg" />
                <p className="mt-3 text-sm text-gray-500">Appel découverte gratuit — 30 min</p>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
                  alt="Smartphone affichant une page Instagram professionnelle avec visuels engageants"
                  className="w-full h-auto"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <FadeIn className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ce qui est inclus dans votre forfait
            </h2>
            <p className="text-gray-600">Tout ce qu'il faut pour que votre page soit active, pro et efficace.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {included.map((item, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="flex items-start gap-3 p-4 bg-sky-50 rounded-xl">
                  <Check className="w-5 h-5 text-[#0ea5e9] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why it works */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Pourquoi confier vos réseaux à CréaVibes ?
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Image, title: "Visuels qui accrochent", desc: "Des créations graphiques pros qui donnent envie de s'arrêter, de liker et de partager." },
              { icon: Calendar, title: "Régularité assurée", desc: "Fini les semaines sans publication. Votre page reste active et visible, même quand vous êtes débordé." },
              { icon: MessageCircle, title: "Ton local", desc: "On parle à vos clients comme ils ont l'habitude — avec authenticité et proximité." },
              { icon: BarChart3, title: "Stratégie mesurable", desc: "On analyse ce qui marche et on ajuste. Chaque mois, vous voyez les résultats." },
              { icon: TrendingUp, title: "Plus de clients", desc: "Une page active et bien gérée, c'est plus de visibilité et plus de demandes." },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="p-6 rounded-xl bg-white border border-gray-200 hover:shadow-md hover:border-sky-200 transition-all"
                >
                  <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-[#0ea5e9]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <FadeIn className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Exemples de réalisations</h2>
          </FadeIn>
          <div className="grid grid-cols-2 gap-4">
            <FadeIn delay={0}>
              <img
                src="https://res.cloudinary.com/dpnonvhhs/image/upload/v1743507732/Lancement-Site-Web-Moderne-Minimaliste-Instagram-Post-1920-_-1080-px-2-2048x1152_mkb3ay.png"
                alt="Exemple de visuel créé pour Foodeez — publication Facebook professionnelle"
                className="rounded-xl w-full h-48 md:h-64 object-cover"
              />
              <p className="text-sm text-gray-600 mt-2 text-center">Foodeez — Importation snacking</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <img
                src="https://res.cloudinary.com/dpnonvhhs/image/upload/v1743507726/Copie-de-Lancement-Site-Web-Moderne-Minimaliste-Instagram-Post-1920-_-1080-px-2_tbeqqn.jpg"
                alt="Exemple de branding visuel pour Bijwell's Room — salon de beauté à Tahiti"
                className="rounded-xl w-full h-48 md:h-64 object-cover"
              />
              <p className="text-sm text-gray-600 mt-2 text-center">Bijwell's Room — Salon de beauté</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-sky-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Votre page Facebook mérite mieux 📲
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              Réservez votre appel découverte. On regarde ensemble votre page actuelle et on vous propose un plan d'action concret.
            </p>
            <CTAButton size="lg" />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
