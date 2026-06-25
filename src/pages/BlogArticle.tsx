import { useParams, Link, Navigate } from 'react-router-dom';
import { CalendarDays, ArrowLeft, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import CTAButton from '../components/CTAButton';
import FadeIn from '../components/FadeIn';
import { getArticleBySlug, blogArticles } from '../data/blog-articles';

export default function BlogArticle() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.metaDescription,
    "image": article.image,
    "datePublished": article.date,
    "author": {
      "@type": "Organization",
      "name": "CréaVibes",
      "url": "https://creavibespro.com",
    },
    "publisher": {
      "@type": "Organization",
      "name": "CréaVibes",
      "logo": {
        "@type": "ImageObject",
        "url": "https://res.cloudinary.com/dpnonvhhs/image/upload/v1743506228/Design_sans_titre_23_pcsvid.png",
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://creavibespro.com/blog/${article.slug}`,
    },
  };

  const currentIndex = blogArticles.findIndex(a => a.slug === article.slug);
  const prevArticle = currentIndex > 0 ? blogArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < blogArticles.length - 1 ? blogArticles[currentIndex + 1] : null;

  return (
    <>
      <SEOHead
        title={article.metaTitle}
        description={article.metaDescription}
        path={`/blog/${article.slug}`}
        jsonLd={blogPostingSchema}
      />

      {/* Article header */}
      <article>
        <header className="bg-gradient-to-br from-slate-50 via-white to-sky-50 py-10 md:py-16">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <FadeIn>
              <Link
                to="/blog"
                className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#0ea5e9] transition mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Retour au blog
              </Link>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <CalendarDays className="w-4 h-4" />
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                </time>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                {article.title}
              </h1>
            </FadeIn>
          </div>
        </header>

        {/* Article image */}
        <div className="container mx-auto px-4 md:px-6 max-w-3xl -mt-2 mb-10">
          <FadeIn delay={0.1}>
            <img
              src={article.image}
              alt={article.imageAlt}
              className="w-full h-56 md:h-80 object-cover rounded-2xl shadow-lg"
            />
          </FadeIn>
        </div>

        {/* Article content */}
        <div className="container mx-auto px-4 md:px-6 max-w-3xl pb-12">
          <FadeIn delay={0.15}>
            <div className="prose prose-gray prose-lg max-w-none">
              {article.sections.map((section, i) => {
                switch (section.type) {
                  case 'h2':
                    return <h2 key={i} className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">{section.content}</h2>;
                  case 'h3':
                    return <h3 key={i} className="text-lg md:text-xl font-semibold text-gray-900 mt-6 mb-3">{section.content}</h3>;
                  case 'p':
                    return <p key={i} className="text-gray-700 leading-relaxed mb-4">{section.content}</p>;
                  case 'list':
                    return (
                      <ul key={i} className="space-y-2 mb-5 pl-1">
                        {section.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2.5 text-gray-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] mt-2.5 flex-shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  default:
                    return null;
                }
              })}
            </div>

            {/* Internal link to service */}
            <div className="mt-10 p-5 bg-sky-50 rounded-xl border border-sky-100">
              <p className="text-gray-700 mb-3">
                Cet article vous a intéressé ? Découvrez notre service associé :
              </p>
              <Link
                to={article.serviceLink}
                className="inline-flex items-center gap-1.5 text-[#0ea5e9] font-medium hover:gap-2.5 transition-all"
              >
                {article.serviceLinkLabel} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* CTA */}
            <div className="mt-10 text-center p-8 bg-gray-50 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Envie d'en discuter ?
              </h3>
              <p className="text-gray-600 mb-6">
                Réservez un appel découverte gratuit de 30 minutes. On parle de votre situation et on vous conseille sans engagement.
              </p>
              <CTAButton />
            </div>
          </FadeIn>
        </div>
      </article>

      {/* Navigation between articles */}
      <section className="border-t border-gray-100 bg-gray-50 py-10">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevArticle && (
              <Link
                to={`/blog/${prevArticle.slug}`}
                className="p-4 rounded-xl bg-white border border-gray-200 hover:border-[#0ea5e9] hover:shadow-sm transition group"
              >
                <span className="text-xs text-gray-500 mb-1 block">Article précédent</span>
                <span className="text-sm font-medium text-gray-900 group-hover:text-[#0ea5e9] transition-colors leading-snug block">
                  {prevArticle.title}
                </span>
              </Link>
            )}
            {nextArticle && (
              <Link
                to={`/blog/${nextArticle.slug}`}
                className="p-4 rounded-xl bg-white border border-gray-200 hover:border-[#0ea5e9] hover:shadow-sm transition group sm:text-right"
              >
                <span className="text-xs text-gray-500 mb-1 block">Article suivant</span>
                <span className="text-sm font-medium text-gray-900 group-hover:text-[#0ea5e9] transition-colors leading-snug block">
                  {nextArticle.title}
                </span>
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
