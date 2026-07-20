import { motion } from 'framer-motion';
import { Globe, Search, Gauge, ShoppingCart, Layers, Smartphone, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import CTAButton from '../components/CTAButton';
import FadeIn from '../components/FadeIn';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Création de site internet à Tahiti",
  "provider": { "@type": "Organization", "name": "CréaVibes" },
  "areaServed": { "@type": "Place", "name": "Tahiti, Polynésie française" },
  "description": "Création de site internet rapide et optimisé à Tahiti et en Polynésie. Devis gratuit. Un site qui transforme vos visiteurs en clients.",
};

const faqData = [
  {
    question: "Combien coûte un site internet à Tahiti ?",
    answer: "Le prix d'un site vitrine simple à Tahiti se situe entre 80 000 F et 250 000 F. Un site avancé (réservation, blog) coûte entre 200 000 F et 500 000 F, et un e-commerce entre 300 000 F et 800 000 F. Chez CréaVibes, chaque devis site internet à Tahiti est personnalisé selon votre besoin exact — demandez le vôtre gratuitement.",
  },
  {
    question: "Quels sont les délais de création d'un site web en Polynésie ?",
    answer: "Un site vitrine simple est livré en 2 à 4 semaines. Un site plus complexe (e-commerce, réservation en ligne) prend 4 à 8 semaines. Tout dépend du nombre de pages, des fonctionnalités et de la rapidité de vos retours sur les maquettes.",
  },
  {
    question: "Comment demander un devis pour un site internet à Tahiti ?",
    answer: "C'est gratuit et sans engagement : réservez un appel découverte visio de 30 minutes via notre bouton \"Prendre RDV en visio\". On discute de votre projet et on vous envoie un devis détaillé sous 48h.",
  },
  {
    question: "Site vitrine ou e-commerce : lequel choisir ?",
    answer: "Si vous voulez présenter votre activité, vos services et générer des contacts (appels, formulaires), un site vitrine suffit. Si vous souhaitez vendre des produits en ligne avec paiement intégré, il faut un site e-commerce. Beaucoup de nos clients commencent par un site vitrine et ajoutent le e-commerce plus tard.",
  },
  {
    question: "Existe-t-il des aides au financement pour créer un site en Polynésie ?",
    answer: "Oui ! L'Aide à la Création Numérique (ACN) de la DGEN finance jusqu'à 50 % de votre site internet (plafond 350 000 F CFP). La demande doit être faite AVANT le lancement du projet. On vous accompagne dans la démarche.",
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

const features = [
  { icon: Gauge, title: "Rapide", description: "Temps de chargement optimal, même avec la connexion polynésienne — indispensable pour convertir" },
  { icon: Smartphone, title: "Mobile-first", description: "Parfait sur téléphone — là où 70 % de vos clients de Papeete et alentours vous cherchent" },
  { icon: Search, title: "Référencé sur Google", description: "Visible dans les résultats de recherche à Tahiti, en Polynésie et pour les touristes" },
  { icon: ShoppingCart, title: "Boutique en ligne", description: "Site e-commerce avec paiement adapté au marché polynésien — vendez 24h/24" },
  { icon: Layers, title: "Sur-mesure ou refonte", description: "Création ou refonte de site existant — on reprend tout à zéro ou on améliore l'existant" },
  { icon: Globe, title: "Multilingue", description: "Français, anglais, tahitien — touchez les locaux et les visiteurs internationaux" },
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
        <div className="px-5 pb-5 text-gray-600 leading-relaxed">
          {answer}
          {question.includes("financement") && (
            <Link to="/blog/aide-creation-numerique-acn-polynesie" className="block mt-2 text-[#0ea5e9] hover:underline text-sm font-medium">
              Lire notre article complet sur l'ACN
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default function CreationSite() {
  return (
    <>
      <SEOHead
        title="Création de site internet à Tahiti - devis gratuit | CreaVibes"
        description="Site vitrine ou boutique en ligne à Tahiti. Jusqu'à 50 pour cent financé par l'aide ACN. Devis gratuit, sans engagement, RDV visio de 30 min."
        path="/creation-site-internet-tahiti"
        jsonLd={[serviceSchema, faqPageSchema]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-sky-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <FadeIn>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Création de site internet à Tahiti — devis gratuit
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Site vitrine, boutique en ligne ou refonte de site existant — nos services de création de sites web en Polynésie française s'adaptent à votre activité et à votre budget. Que vous soyez à Papeete, Punaauia, Faa'a ou ailleurs sur l'île, demandez votre devis site internet à Tahiti gratuitement.
              </p>
              <CTAButton size="lg" />
              <p className="mt-3 text-sm text-gray-500">Devis gratuit sous 48h — appel de 30 min, sans engagement</p>
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
              Site vitrine, e-commerce ou refonte — tout est inclus
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              Chaque création de site internet à Papeete, Punaauia ou Faa'a est conçue pour attirer des clients et transformer votre présence en ligne.
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Comment se passe la création de votre site web ?</h2>
          </FadeIn>

          <div className="space-y-6">
            {[
              { step: "1", title: "Appel découverte & devis gratuit", desc: "On discute de votre activité, vos objectifs et vos besoins. Vous recevez un devis site internet à Tahiti clair sous 48h." },
              { step: "2", title: "Proposition et maquette", desc: "On vous envoie un aperçu visuel de votre futur site. Vous validez avant qu'on commence." },
              { step: "3", title: "Développement", desc: "On construit votre site. Vous validez à chaque étape. Aucune surprise." },
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

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Questions fréquentes sur la création de site internet à Tahiti
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
      <section className="py-16 md:py-20 bg-emerald-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Prêt à avoir un site qui vous ressemble ?
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              Demandez votre devis gratuit. On parle de votre projet et on vous montre ce qu'on peut faire pour vous — 30 minutes, sans engagement.
            </p>
            <CTAButton size="lg" />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
