import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import CreationSite from './pages/CreationSite';
import CommunityManagement from './pages/CommunityManagement';
import CreationApplication from './pages/CreationApplication';
import AutomatisationIA from './pages/AutomatisationIA';
import Blog from './pages/Blog';
import BlogArticle from './pages/BlogArticle';
import LegalNotices from './components/LegalNotices';

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/creation-site-internet-tahiti" element={<PageWrapper><CreationSite /></PageWrapper>} />
          <Route path="/community-management-tahiti" element={<PageWrapper><CommunityManagement /></PageWrapper>} />
          <Route path="/creation-application-polynesie" element={<PageWrapper><CreationApplication /></PageWrapper>} />
          <Route path="/automatisation-ia-tahiti" element={<PageWrapper><AutomatisationIA /></PageWrapper>} />
          <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
          <Route path="/blog/:slug" element={<PageWrapper><BlogArticle /></PageWrapper>} />
          <Route path="/mentions-legales" element={<PageWrapper><LegalNotices /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}
