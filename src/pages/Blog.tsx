import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarDays, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import CTAButton from '../components/CTAButton';
import FadeIn from '../components/FadeIn';
import { blogArticles } from '../data/blog-articles';

export default function Blog() {
  return (
    <>
      <SEOHead
        title="Blog — Conseils digital et visibilité en ligne à Tahiti | CréaVibes"
        description="Conseils concrets pour développer votre visibilité en ligne à Tahiti : réseaux sociaux, site internet, IA, Google Business. Articles rédigés pour les patentés et PME de Polynésie."
        path="/blog"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-sky-50 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <p className="inline-block bg-sky-100 text-[#0ea5e9] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Blog CréaVibes
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Conseils digital pour les pros de Tahiti
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des articles concrets pour développer votre visibilité en ligne, attirer plus de clients et gagner du temps. Écrits pour les patentés et petites entreprises de Polynésie.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {blogArticles.map((article, i) => (
              <FadeIn key={article.slug} delay={i * 0.06}>
                <Link to={`/blog/${article.slug}`} className="group block h-full">
                  <motion.article
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="h-full flex flex-col rounded-2xl border border-gray-200 overflow-hidden bg-white hover:shadow-xl hover:border-gray-300 transition-shadow duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex-1 flex flex-col p-5 md:p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <CalendarDays className="w-4 h-4" />
                        <time dateTime={article.date}>
                          {new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </time>
                      </div>
                      <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#0ea5e9] transition-colors leading-snug">
                        {article.title}
                      </h2>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                        {article.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1 text-[#0ea5e9] text-sm font-medium group-hover:gap-2 transition-all">
                        Lire l'article <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </motion.article>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-14">
            <CTAButton />
            <p className="mt-3 text-sm text-gray-500">Besoin d'aide pour votre visibilité en ligne ? Parlons-en.</p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
