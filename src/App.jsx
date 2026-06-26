import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import BentoAccordion from './components/BentoAccordion';
import PricingMatrix from './components/PricingMatrix';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <BentoAccordion />
        <PricingMatrix />
        <SocialProof />
      </main>
      <Footer />
    </>
  );
}
