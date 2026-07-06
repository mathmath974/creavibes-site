import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function LegalNotices() {
  return (
    <>
      <Helmet>
        <title>Mentions légales | CréaVibes</title>
        <meta name="description" content="Mentions légales du site CréaVibes — agence digitale à Tahiti." />
      </Helmet>

      <div className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition"
          >
            <ArrowLeft size={20} />
            Retour à l'accueil
          </Link>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-6 md:p-10">
            <h1 className="text-3xl font-bold mb-8 text-gray-900">Mentions Légales</h1>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Informations légales</h2>
              <p className="text-gray-600 mb-4">
                Le site CréaVibes est édité par :<br />
                CréaVibes<br />
                Papeete, Tahiti — Polynésie française<br />
                Email : contact@creavibespro.com
              </p>
              <p className="text-gray-600">
                Directeur de la publication : CréaVibes<br />
                Hébergeur : Vercel Inc.
              </p>
            </section>

            <section className="mb-10" id="cookies">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Politique de cookies</h2>
              <p className="text-gray-600 mb-4">
                Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, mobile) lors de la visite d'un site web.
              </p>
              <h3 className="text-xl font-medium mb-3 mt-6">2.1 Types de cookies utilisés</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Cookies essentiels : nécessaires au fonctionnement du site</li>
                <li>Cookies analytiques : mesure d'audience et statistiques de navigation</li>
                <li>Cookies de personnalisation : préférences de navigation</li>
              </ul>
              <h3 className="text-xl font-medium mb-3">2.2 Gestion des cookies</h3>
              <p className="text-gray-600">
                Vous pouvez à tout moment modifier vos préférences en matière de cookies via les paramètres de votre navigateur.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Protection des données personnelles</h2>
              <p className="text-gray-600 mb-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
              </p>
              <p className="text-gray-600">
                Pour exercer ces droits, contactez-nous à : contact@creavibespro.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Propriété intellectuelle</h2>
              <p className="text-gray-600">
                L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est protégé par le droit d'auteur. Toute reproduction ou représentation, totale ou partielle, est interdite sans autorisation préalable.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
