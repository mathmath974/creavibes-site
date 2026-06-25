import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  jsonLd?: object;
}

const BASE_URL = "https://creavibespro.com";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CréaVibes",
  "url": BASE_URL,
  "logo": "https://res.cloudinary.com/dpnonvhhs/image/upload/v1743506228/Design_sans_titre_23_pcsvid.png",
  "email": "contact@creavibespro.com",
  "sameAs": ["https://www.facebook.com/creavibespro"],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "CréaVibes",
  "url": BASE_URL,
  "email": "contact@creavibespro.com",
  "image": "https://res.cloudinary.com/dpnonvhhs/image/upload/v1743506228/Design_sans_titre_23_pcsvid.png",
  "description": "Agence digitale à Tahiti : création de sites internet, community management, applications et automatisation IA.",
  "areaServed": [
    { "@type": "Place", "name": "Tahiti" },
    { "@type": "Place", "name": "Papeete" },
    { "@type": "AdministrativeArea", "name": "Polynésie française" },
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Papeete",
    "addressRegion": "Tahiti",
    "addressCountry": "PF",
  },
};

export default function SEOHead({ title, description, path, jsonLd }: SEOHeadProps) {
  const canonical = `${BASE_URL}${path}`;
  const schemas = [organizationSchema, localBusinessSchema];
  if (jsonLd) schemas.push(jsonLd as any);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="fr_PF" />
      <script type="application/ld+json">{JSON.stringify(schemas)}</script>
    </Helmet>
  );
}
