import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Monitor, Share2, Smartphone, Cpu, ArrowRight, Star, Zap, Users } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import CTAButton from '../components/CTAButton';
import FadeIn from '../components/FadeIn';

const services = [
  {
    icon: Monitor,
    title: "Création de sites web",
    description: "Sites vitrines, e-commerce et plateformes de réservation rapides et optimisés pour vos clients.",
    href: "/creation-site-internet-tahiti",
    color: "bg-emerald-500",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Share2,
    title: "Réseaux sociaux",
    description: "Gestion complète de votre page Facebook & Instagram : visuels, publications et stratégie.",
    href: "/community-management-tahiti",
    color: "bg-[#0ea5e9]",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Smartphone,
    title: "Applications mobiles & web",
    description: "Applications sur-mesure pour digitaliser votre activité et mieux servir vos clients.",
    href: "/creation-application-polynesie",
    color: "bg-amber-500",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Cpu,
    title: "Automatisation IA",
    description: "Gagnez du temps chaque semaine en automatisant vos tâches répétitives avec l'IA.",
    href: "/automatisation-ia-tahiti",
    color: "bg-violet-500",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const portfolioItems = [
  {
    title: "Puunui Hotel",
    category: "Site Web",
    image: "https://res.cloudinary.com/dpnonvhhs/image/upload/v1743507746/Capture_d_%C3%A9cran_2025-04-01_153753_ni5f8g.png",
    description: "Site web pour un hôtel 5 étoiles",
  },
  {
    title: "Fare Honu",
    category: "Site Web",
    image: "https://res.cloudinary.com/dpnonvhhs/image/upload/v1743507743/Capture_d_%C3%A9cran_2025-04-01_153853_wqlggp.png",
    description: "Plateforme de réservation touristique",
  },
  {
    title: "Foodeez",
    category: "Marketing Digital",
    image: "https://res.cloudinary.com/dpnonvhhs/image/upload/v1743507732/Lancement-Site-Web-Moderne-Minimaliste-Instagram-Post-1920-_-1080-px-2-2048x1152_mkb3ay.png",
    description: "Gestion des réseaux sociaux",
  },
  {
    title: "Bijwell's Room",
    category: "Branding & Social",
    image: "https://res.cloudinary.com/dpnonvhhs/image/upload/v1743507726/Copie-de-Lancement-Site-Web-Moderne-Minimaliste-Instagram-Post-1920-_-1080-px-2_tbeqqn.jpg",
    description: "Logo et réseaux sociaux",
  },
  {
    title: "Porinetia Import-Export",
    category: "Site Web",
    image: "https://res.cloudinary.com/dpnonvhhs/image/upload/v1743737554/Capture_d_%C3%A9cran_2025-04-04_072843_qqmrfv.png",
    description: "Site web devis B2B",
  },
];

export default function Home() {
  return (
    <>
      <SEOHead
        title="CréaVibes — Création de sites web, réseaux sociaux & IA à Tahiti"
        description="Agence digitale à Tahiti : création de sites internet, community management, applications et automatisation IA. Réservez un appel découverte visio gratuit."
        path="/"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-50">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-28 relative">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <p className="inline-block bg-sky-100 text-[#0ea5e9] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                Agence digitale basée à Tahiti
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Le partenaire digital des{' '}
                <span className="text-[#0ea5e9]">pros de Tahiti</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
                Sites web, réseaux sociaux, applications et IA : chez CréaVibes, on construit votre présence en ligne pour que vous puissiez vous concentrer sur votre activité.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CTAButton size="lg" />
              </div>
              <p className="mt-4 text-sm text-gray-500">Appel découverte gratuit — 30 min, sans engagement</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos expertises</h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Des solutions digitales complètes pour développer votre activité en Polynésie
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {services.map((service, i) => (
              <FadeIn key={service.href} delay={i * 0.1}>
                <Link to={service.href} className="group block">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-2xl border border-gray-200 overflow-hidden bg-white hover:shadow-xl hover:border-gray-300 transition-shadow duration-300"
                  >
                    <div className="relative h-44 md:h-52 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className={`absolute bottom-4 left-4 w-10 h-10 ${service.color} rounded-lg flex items-center justify-center`}>
                        <service.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="p-5 md:p-6">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0ea5e9] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base mb-3">{service.description}</p>
                      <span className="inline-flex items-center gap-1 text-[#0ea5e9] text-sm font-medium group-hover:gap-2 transition-all">
                        En savoir plus <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-12">
            <CTAButton />
          </FadeIn>
        </div>
      </section>

      {/* Trust */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <FadeIn className="text-center" delay={0}>
              <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-[#0ea5e9]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Qualité pro</h3>
              <p className="text-sm text-gray-600">Des réalisations qui font la différence face à la concurrence</p>
            </FadeIn>
            <FadeIn className="text-center" delay={0.1}>
              <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-[#0ea5e9]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">100% local</h3>
              <p className="text-sm text-gray-600">On connaît le marché polynésien et ses spécificités</p>
            </FadeIn>
            <FadeIn className="text-center" delay={0.2}>
              <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-[#0ea5e9]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Résultats concrets</h3>
              <p className="text-sm text-gray-600">Plus de visibilité, plus de clients, moins de galères</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos réalisations</h2>
            <p className="text-lg text-gray-600">Des projets concrets pour des entreprises comme la vôtre</p>
          </FadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 max-w-5xl mx-auto">
            {portfolioItems.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="group bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-32 md:h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={`${item.title} — ${item.description}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3 md:p-5">
                    <span className="text-[10px] md:text-xs font-medium text-[#0ea5e9]">{item.category}</span>
                    <h3 className="text-xs md:text-base font-bold text-gray-900 mt-0.5">{item.title}</h3>
                    <p className="text-gray-600 text-[10px] md:text-sm mt-1 leading-tight">{item.description}</p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-10">
            <CTAButton />
            <p className="mt-3 text-sm text-gray-500">On vous montre d'autres exemples pendant l'appel</p>
          </FadeIn>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Prêt à développer votre activité en ligne ?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
              Réservez un appel découverte gratuit de 30 minutes. On discute de votre activité et on vous propose une solution adaptée — zéro pression.
            </p>
            <CTAButton size="lg" />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
